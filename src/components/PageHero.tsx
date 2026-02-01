import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    description?: string;
    children?: ReactNode;
}

// Ink flow animation component
const InkFlow = ({ delay, left }: { delay: number; left: string }) => (
    <motion.div
        className="absolute top-0 w-1 bg-gradient-to-b from-primary/20 to-transparent rounded-full"
        style={{ left, height: "80px" }}
        initial={{ y: -80, opacity: 0 }}
        animate={{
            y: ["0%", "100vh"],
            opacity: [0, 0.6, 0.6, 0]
        }}
        transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            ease: "easeIn"
        }}
    />
);

const PageHero = ({ title, subtitle, description, children }: PageHeroProps) => {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden ink-texture">
            {/* Flowing ink drips */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <InkFlow
                        key={i}
                        delay={i * 0.7}
                        left={`${10 + i * 12}%`}
                    />
                ))}
            </div>

            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

            {/* Subtle green glow animation */}
            <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                    background: [
                        "radial-gradient(circle at 30% 50%, hsl(var(--sdarck-green)) 0%, transparent 40%)",
                        "radial-gradient(circle at 70% 50%, hsl(var(--sdarck-green)) 0%, transparent 40%)",
                        "radial-gradient(circle at 50% 70%, hsl(var(--sdarck-green)) 0%, transparent 40%)",
                        "radial-gradient(circle at 30% 50%, hsl(var(--sdarck-green)) 0%, transparent 40%)",
                    ]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center py-10 md:py-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Main title */}
                    <motion.h1
                        className="font-metal text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-wide text-primary leading-tight"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        {title}
                    </motion.h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <motion.p
                            className="font-cinzel text-xs sm:text-sm md:text-base text-muted-foreground tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6 px-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    {/* Description */}
                    {description && (
                        <motion.p
                            className="font-montserrat text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-8"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            {description}
                        </motion.p>
                    )}

                    {/* Custom children content */}
                    {children && (
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            {children}
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-primary/20" />
            <div className="absolute top-0 right-0 w-24 h-24 border-r-2 border-t-2 border-primary/20" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-primary/20" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-primary/20" />
        </section>
    );
};

export default PageHero;
