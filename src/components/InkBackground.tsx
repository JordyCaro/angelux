import { motion } from "framer-motion";

const InkBackground = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
            {/* Organic fluid shape 1 - Top Left */}
            <motion.svg
                className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] opacity-40 text-angelux-steel"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                    rotate: [0, 10, -5, 0],
                    scale: [1, 1.1, 0.9, 1],
                    x: [0, 20, -10, 0],
                    y: [0, -20, 10, 0],
                }}
                transition={{
                    duration: 20,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            >
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    d="M45.7,-76.3C58.9,-69.3,69.1,-56.9,76.5,-43.3C83.9,-29.7,88.5,-14.9,86.6,-1.1C84.7,12.7,76.3,25.4,66.9,36.5C57.5,47.6,47,57.1,35.2,64.2C23.4,71.3,10.3,76,-4.1,83.1C-18.5,90.2,-34.2,99.8,-48.6,94.9C-63,90,-76.1,70.6,-81.9,51.8C-87.7,33,-86.2,14.8,-81.8,-1.7C-77.4,-18.2,-70.1,-33,-59.7,-44.6C-49.3,-56.2,-35.8,-64.6,-22,-68.1C-8.2,-71.6,5.9,-70.2,20.5,-73.4"
                    transform="translate(100 100)"
                />
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    d="M38.6,-66.4C50.2,-58.5,60.1,-48.6,67.8,-36.8C75.5,-25,81,-11.3,79.8,1.8C78.6,14.9,70.7,27.4,61.5,38.3C52.3,49.2,41.9,58.5,29.8,64.6C17.7,70.7,3.9,73.6,-9.2,77.7C-22.3,81.8,-34.7,87.1,-46.4,83.3C-58.1,79.5,-69.1,66.6,-74.6,52.2C-80.1,37.8,-80.1,21.9,-77.3,7C-74.5,-7.9,-68.9,-21.8,-60.1,-33.4C-51.3,-45,-39.3,-54.3,-26.8,-60.5C-14.3,-66.7,-1.3,-69.8,12.5,-71.4"
                    transform="translate(100 100) scale(0.9)"
                />
            </motion.svg>

            {/* Organic fluid shape 2 - Bottom Right */}
            <motion.svg
                className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] opacity-25 text-angelux-blue"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                    rotate: [0, -15, 5, 0],
                    scale: [1, 1.2, 0.95, 1],
                    x: [0, -30, 20, 0],
                }}
                transition={{
                    duration: 25,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            >
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.6"
                    d="M44.3,-72.1C57.4,-65.2,68.2,-54.5,75.3,-41.8C82.4,-29.1,85.8,-14.5,84.1,-0.7C82.4,13.1,75.6,26.2,66.9,37.8C58.2,49.4,47.6,59.5,35.5,66.5C23.4,73.5,9.8,77.4,-4.1,84.5C-18,91.6,-32.2,101.9,-46.8,98.6C-61.4,95.3,-76.4,78.4,-83.4,59.2C-90.4,40,-89.4,18.5,-84.4,0.4C-79.4,-17.7,-70.4,-32.4,-59.7,-44.2C-49,-56,-36.6,-64.9,-23.3,-68.8C-10,-72.7,4.2,-71.6,18.8,-74.6"
                    transform="translate(100 100)"
                />
            </motion.svg>

            {/* Falling Ink Drops */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute top-0 w-[1px] bg-gradient-to-b from-transparent via-angelux-steel/50 to-transparent"
                    style={{
                        left: `${15 + i * 15}%`,
                        height: "150px"
                    }}
                    initial={{ y: -150, opacity: 0 }}
                    animate={{
                        y: ["0vh", "100vh"],
                        opacity: [0, 0.5, 0]
                    }}
                    transition={{
                        duration: 7 + i,
                        repeat: Infinity,
                        delay: i * 2,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

export default InkBackground;
