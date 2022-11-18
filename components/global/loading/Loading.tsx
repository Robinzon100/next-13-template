"use client";

import { useEffect } from "react";
import { counter } from "./loading_animation/Loading.animation";

const Loading = () => {
    const path = 'M410.426 206.07C410.426 318.801 319.04 410.187 206.309 410.187C93.5777 410.187 2.19116 318.801 2.19116 206.07C2.19116 93.3386 93.5777 1.95209 206.309 1.95209C319.04 1.95209 410.426  93.3386  410.426  206.07Z';

    useEffect(() => {
        if (typeof window !== undefined) {
            (window as any).isLoaded = false;

            const interval = setInterval(() => {
                if ((window as any).isLoaded == true) {
                    counter();
                    clearInterval(interval);
                }
            }, 500);
        }
    }, []);


    return (
        <>
            <div className="loading-screen">
                <div className="loading-screen_container">
                    <svg
                        className='loading_circle'
                        width="412"
                        height="412"
                        viewBox="0 0 412 412"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d={path} stroke="white" strokeWidth="2.5" />

                    </svg>
                    <div className="loading_poligon">
                        <h1 className="f-weight-bo f-size-h1" id="counter">
                            <p className="f-size-p1 f-weight-bo">loading</p>
                        </h1>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Loading;


// <style jsx> {` @keyframes animatePath { 0% { background-position: 1300; } 100% { stroke-dashoffset: 0; } } .loading-screen_container .loading_circle path  { stroke-dashoffset: 1300; stroke-dasharray: 1300; animation: animatePath ${duration}s ease-in forwards; } `} </style>