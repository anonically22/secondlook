import React from 'react';

const CircularText = ({ text, className = "", size = 200, duration = 60 }) => {
    return (
        <div className={`circular-text select-none ${className}`} style={{ width: size, height: size }}>
            <svg className="w-full h-full animate-spin-slow" viewBox="0 0 200 200" style={{ animationDuration: `${duration}s` }}>
                <path
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                    fill="transparent"
                    id="circlePath"
                />
                <text className="text-[10px] uppercase tracking-[0.2em] font-light fill-current">
                    <textPath href="#circlePath">
                        {text} • {text} •
                    </textPath>
                </text>
            </svg>
        </div>
    );
};

export default CircularText;
