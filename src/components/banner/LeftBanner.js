import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Designer Freelancer.", "Logo Designer.", "Infographics."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className="text-md sm:text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                    Hi, I'm <span className="text-designColor capitalize">Mokibi Ranhlakgwe</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className="text-xs sm:text-sm md:text-base font-bodyFont leading-6 tracking-wide">
                    A proactive BSc Computer Science (Mathematical Science) student at the University of Limpopo with a strong academic background and experience. Possessing strong analytical ability and problem-solving skills with fluency in English. Keen to pursue a career in the tech industry with a focus on technical aspects, design, and user experience.
                </p>
            </div>
            {/* Media */}
            <Media />
        </div>
    );
}

export default LeftBanner;
