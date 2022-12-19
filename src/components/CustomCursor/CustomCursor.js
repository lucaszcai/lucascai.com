import React, { useRef } from "react";

export const CustomCursor = () => {
    const cursorRef = React.useRef(null);
    let enlarge = false;

    React.useEffect(()=> {
        document.addEventListener("mousemove", (event) => {
            const {clientX, clientY} = event;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px,0)`;
           
        });
    }, []);

    React.useEffect(() => {
        document.addEventListener("mouseover", (event) => {
            cursorRef.current.style.width = `80px`;
            cursorRef.current.style.height = `80px`;
        })
    })

    React.useEffect(() => {
        document.addEventListener("mouseout", (event) => {
            cursorRef.current.style.width = `50px`;
            cursorRef.current.style.height = `50px`;
            console.log("mouse out");
        })
    })

    return <div className="app-cursor" ref={cursorRef}></div>
}