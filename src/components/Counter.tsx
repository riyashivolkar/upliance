import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const Counter: React.FC = () => {
    const [value, setValue] = useState<number>(() => {
        return Number(localStorage.getItem('counter')) || 0;
    });

    useEffect(() => {
        localStorage.setItem('counter', value.toString());
    }, [value]);

    const decrement = () => setValue(prev => prev - 1);
    const increment = () => setValue(prev => prev + 1);
    const reset = () => setValue(0);

    // Calculate width % based on count (max width = 100%)
    const widthPercentage = Math.min(Math.abs(value * 5), 100);

    // Background gradient based on count
    const getGradient = () => {
        if (value <= 5) return "linear-gradient(to right, #2ecc71, #27ae60)"; // Green shades
        if (value <= 10) return "linear-gradient(to right, #f1c40f, #f39c12)"; // Yellow to Orange
        if (value <= 15) return "linear-gradient(to right, #e67e22, #d35400)"; // Dark Orange
        return "linear-gradient(to right, #e74c3c, #c0392b)"; // Red shades
    };

    // Animate background width & color
    const bgStyle = useSpring({
        width: `${widthPercentage}%`,
        background: getGradient(),
        config: { tension: 200, friction: 20 }, // Smooth animation
    });

    return (
        <div className="flex flex-col items-center w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg border border-gray-200 relative overflow-hidden">
            {/* Animated Progress Bar */}
            <animated.div
                style={bgStyle}
                className="absolute top-0 left-0 h-full transition-all z-0"
            />

            {/* Counter Input */}
            <div className="w-full text-center mt-4 z-10">
                <label htmlFor="custom-input-number" className="text-gray-700 text-lg font-semibold mb-3 block">
                    Counter Input
                </label>
                <input
                    type="number"
                    className="text-center w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="custom-input-number"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                />
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between w-full mt-6 z-10">
                <button
                    className="flex-1 py-3 mx-1 text-gray-900 border bg-white hover:bg-gray-100 cursor-pointer rounded-lg shadow transition-all text-lg"
                    onClick={decrement}
                >
                    −
                </button>

                <button
                    className="flex-1 cursor-pointer py-3 mx-1 bg-gray-800 text-white hover:bg-gray-700 rounded-lg shadow transition-all text-lg"
                    onClick={reset}
                >
                    Reset
                </button>

                <button
                    className="flex-1 py-3 mx-1 text-gray-900 border bg-white hover:bg-gray-100 cursor-pointer rounded-lg shadow transition-all text-lg"
                    onClick={increment}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default Counter;
