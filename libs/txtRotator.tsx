import React, { useEffect, useState, useRef, FunctionComponent, CSSProperties } from "react";
import { Transition } from 'react-transition-group'
// import React, { useState, useEffect, useRef } from 'react'

interface TxtRotatorProps {
    time: number
    startDelay: number
    transitionTime: number
    content: string[],
    style?: CSSProperties
}
let interval: any;
let timeout: any;
let enteredTimeout: any;

export const TxtRotator: FunctionComponent<TxtRotatorProps> = ({ transitionTime, time, startDelay, content, ...spanProps }) => {
    const indexRef = useRef<number>(0);
    const [entered, setEntered] = useState(false);
    const { className, animation = "fade", text }: any =
        content[indexRef.current] || {};
    const styles = trans({ duration: transitionTime });

    useEffect(() => {
        timeout = setTimeout(() => {
            next();
            interval = setInterval(next, time);
        }, startDelay);

        return () => {
            clearTimeout(timeout)
            clearInterval(interval)
            clearTimeout(enteredTimeout);
        }
    }, []);

    function next() {
        // const total: number = content.length || 0;
        indexRef.current = content[indexRef.current + 1] ? indexRef.current + 1 : 0;
        setEntered(true);
        enteredTimeout = setTimeout(() => setEntered(false), time - transitionTime);
    }

    if (!text) return <span />;

    return (
        <Transition in={entered} timeout={transitionTime}>
            {state => (
                <span
                    {...spanProps}
                    key={indexRef.current}
                    className={className}
                    style={{
                        ...styles[`${animation}-default`],
                        ...styles[`${animation}-${state}`],
                        width: 120,
                        display: 'inline-block'
                    }}
                >
                    {text}
                </span>
            )
            }
        </Transition >
    );
}



const trans = ({ duration }: { duration: number }): any => ({
    "fade-default": {
        transition: `opacity ${duration}ms ease-in`,
        opacity: 0
    },

    "fade-entering": {
        opacity: 0
    },

    "fade-entered": {
        opacity: 1
    },

    "fade-exiting": {
        opacity: 0
    },

    "fade-exited": {
        opacity: 0
    }
});

TxtRotator.defaultProps = {
    time: 2500,
    startDelay: 0,
    transitionTime: 250
};

