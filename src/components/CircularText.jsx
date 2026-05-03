const CircularText = ({ text = '', size = 200, duration = 20, className = '', fill = 'currentColor' }) => {
    const chars = text.split('');
    const radius = size / 2 - 20;
    const circumference = 2 * Math.PI * radius;
    const charSpacing = circumference / chars.length;

    return (
        <div
            className={`pointer-events-none ${className}`}
            style={{ width: size, height: size }}
            aria-hidden="true"
        >
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                style={{ animation: `spin-slow ${duration}s linear infinite` }}
            >
                <defs>
                    <path
                        id="circle-path"
                        d={`M ${size / 2}, ${size / 2} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
                    />
                </defs>
                <text
                    fontSize="10"
                    fontFamily="var(--font-mono, monospace)"
                    letterSpacing={charSpacing > 0 ? (charSpacing - 10).toFixed(2) : '2'}
                    fill={fill}
                >
                    <textPath href="#circle-path">{text}</textPath>
                </text>
            </svg>
            <style>{`@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </div>
    );
};

export default CircularText;
