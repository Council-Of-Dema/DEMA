import React from "react";

const STRIPS_DATA = [
    { x1: "-2em", hue1: "-16deg", x2: "2em", hue2: "13deg", pos: "0 -0em", h: "5em", anim: "glitch-9", dur: "9000ms", delay: "2s" },
    { x1: "-1em", hue1: "-42deg", x2: "-6em", hue2: "-23deg", pos: "0 -5em", h: "3em", anim: "glitch-5", dur: "5000ms", delay: "1s" },
    { x1: "-10em", hue1: "-42deg", x2: "-9em", hue2: "45deg", pos: "0 -8em", h: "3em", anim: "glitch-7", dur: "7000ms", delay: "0s" },
    { x1: "-6em", hue1: "-11deg", x2: "2em", hue2: "29deg", pos: "0 -11em", h: "5em", anim: "glitch-8", dur: "8000ms", delay: "1s" },
    { x1: "0em", hue1: "42deg", x2: "2em", hue2: "-28deg", pos: "0 -16em", h: "5em", anim: "glitch-6", dur: "6000ms", delay: "0s" },
    { x1: "-3em", hue1: "-45deg", x2: "-5em", hue2: "-15deg", pos: "0 -21em", h: "2em", anim: "glitch-7", dur: "7000ms", delay: "0s" },
    { x1: "-5em", hue1: "35deg", x2: "9em", hue2: "35deg", pos: "0 -23em", h: "2em", anim: "glitch-6", dur: "6000ms", delay: "0s" },
    { x1: "10em", hue1: "39deg", x2: "-8em", hue2: "24deg", pos: "0 -25em", h: "6em", anim: "glitch-7", dur: "7000ms", delay: "1s" },
    { x1: "-6em", hue1: "-46deg", x2: "-3em", hue2: "18deg", pos: "0 -31em", h: "6em", anim: "glitch-10", dur: "10000ms", delay: "1s" },
    { x1: "-8em", hue1: "-37deg", x2: "-6em", hue2: "15deg", pos: "0 -37em", h: "1em", anim: "glitch-9", dur: "9000ms", delay: "1s" },
    { x1: "-1em", hue1: "16deg", x2: "2em", hue2: "25deg", pos: "0 -38em", h: "2em", anim: "glitch-5", dur: "5000ms", delay: "1s" },
    { x1: "5em", hue1: "32deg", x2: "10em", hue2: "-3deg", pos: "0 -40em", h: "2em", anim: "glitch-9", dur: "9000ms", delay: "1s" },
    { x1: "10em", hue1: "-26deg", x2: "6em", hue2: "-45deg", pos: "0 -42em", h: "4em", anim: "glitch-6", dur: "6000ms", delay: "1s" },
    { x1: "-7em", hue1: "-45deg", x2: "-8em", hue2: "45deg", pos: "0 -46em", h: "3em", anim: "glitch-5", dur: "5000ms", delay: "2s" },
    { x1: "4em", hue1: "40deg", x2: "-8em", hue2: "29deg", pos: "0 -49em", h: "3em", anim: "glitch-6", dur: "6000ms", delay: "1s" },
    { x1: "-4em", hue1: "26deg", x2: "-6em", hue2: "-3deg", pos: "0 -52em", h: "6em", anim: "glitch-10", dur: "10000ms", delay: "0s" },
    { x1: "6em", hue1: "43deg", x2: "-1em", hue2: "-1deg", pos: "0 -58em", h: "4em", anim: "glitch-8", dur: "8000ms", delay: "0s" },
];

export default function Glitch() {
    return (
        <div className="bard">
            {STRIPS_DATA.map((strip, index) => (
                <div
                    key={index}
                    className="strip"
                    style={{
                        "--glitch-x-1": strip.x1,
                        "--glitch-hue-1": strip.hue1,
                        "--glitch-x-2": strip.x2,
                        "--glitch-hue-2": strip.hue2,
                        backgroundPosition: strip.pos,
                        height: strip.h, // Qui le tue strip sommate devono fare 100vh
                        flexGrow: 1,     /* Aggiungi questo per forzarle a riempire lo spazio vuoto */
                        animationName: strip.anim,
                        animationDuration: strip.dur,
                        animationDelay: strip.delay,
                    } as React.CSSProperties}
                />
            ))}
        </div>
    );
}