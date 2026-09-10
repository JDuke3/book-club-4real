import React, { useState, useEffect } from "react";
export default function Hero(){
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        function handleMouseMove(e) {
            setMousePosition({ x: e.clientX, y: e.clientY});
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return(
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 100, 246, 0.12), transparent 40%)`
        }}/>

        <div className="flex flex-col items-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 p-5 sm:px-4 bg-slate-950 rounded-full mb-4 sm:mb-6">
                <span className="text-5xl">Welcome!</span>
            </div>
            <div className="bg-slate-950 px-8 py-6 rounded-lg max-2-3xl text-center">
                <span className="text-2xl">This website is a small project of mine. I may be making blog-type<br/> posts here
                     in the future. Check the about page to learn more. ☺ </span>
            </div>
        </div>
    </section>
    );
}