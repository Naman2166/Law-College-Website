import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const pdfLinks = [
    { text: "Institute Level Against Cap Admission Notification", url: "/spotlight1.pdf" },
    { text: "SSKVM ACAP Merit List 2025-26", url: "/spotlight2.pdf" },
];

export default function SpotlightTicker() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint
        };
        handleResize(); // initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="py-1.5 flex items-center w-full">
            {/* Fixed label */}
            <p
                className="px-2 md:px-3 font-semibold md:font-bold text-[14px] md:text-[17px] flex-shrink-0"
                style={{ animation: "blinkColor 1s infinite steps(1)" }}
            >
                SPOTLIGHT :
            </p>

            <style>
                {`
                  @keyframes blinkColor {
                    0%, 49% { color: #1d4ed8; }
                    50%, 100% { color: #ffffff; }
                  }
                `}
            </style>

            {/* Scrolling wrapper */}
            <div className="flex-1 overflow-hidden">
                <motion.div
                    className="flex whitespace-nowrap w-full"
                    animate={{ x: isMobile ? ["50%", "-100%"] : ["70%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: isMobile ? 7 : 20, // faster on mobile
                        ease: "linear",
                    }}
                >
                    {[...Array(1)].map((_, i) => (
                        <div key={i} className="flex">
                            {pdfLinks.map((item, idx) => (
                                <a
                                    key={`${idx}-${i}`}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mx-2 md:mx-6 font-medium text-[13px] md:text-[16px] text-blue-700 hover:text-blue-700 hover:underline hover:decoration-2"
                                >
                                    {item.text}
                                </a>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
