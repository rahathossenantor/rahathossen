"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const hobbies = [
    {
        id: 1,
        name: "Painting",
        emoji: "🎨",
        top: "5%",
        left: "5%"
    },
    {
        id: 2,
        name: "Photography",
        emoji: "📸",
        top: "5%",
        left: "50%"
    },
    {
        id: 3,
        name: "Hiking",
        emoji: "🥾",
        top: "40%",
        left: "35%"
    },
    {
        id: 4,
        name: "Gaming",
        emoji: "🎮",
        top: "35%",
        left: "10%"
    },
    {
        id: 5,
        name: "Music",
        emoji: "🎵",
        top: "45%",
        left: "70%"
    },
    {
        id: 6,
        name: "Fitness",
        emoji: "🏋️‍♂️",
        top: "65%",
        left: "5%"
    },
    {
        id: 7,
        name: "Reading",
        emoji: "📚",
        top: "70%",
        left: "45%"
    }
];

const Hobbies = () => {
    const constraintRef = useRef(null);

    return (
        <div className="relative flex-1" ref={constraintRef}>
            {
                hobbies.map(hobby => (
                    <motion.div
                        key={hobby.id}
                        className="inline-flex items-center gap-1 px-6 bg-gradient-to-t custom-gradient-bg py-1.5 rounded-full absolute"
                        style={{
                            top: hobby.top,
                            left: hobby.left
                        }}
                        drag
                        dragConstraints={constraintRef}
                    >
                        <span className="font-medium text-gray-950">{hobby.name}</span>
                        <span>{hobby.emoji}</span>
                    </motion.div>
                ))
            }
        </div>
    );
};

export default Hobbies;
