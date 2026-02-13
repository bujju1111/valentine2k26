
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Gift, Sparkles } from 'lucide-react';
// import { Link } from 'react-router-dom';



// Background Component with Particles
const Background = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-br from-rose-950 via-rose-900 to-rose-950">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-gold-400 opacity-20"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                        y: [null, Math.random() * -100],
                        opacity: [0.2, 0, 0.2],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        width: Math.random() * 4 + 2 + 'px',
                        height: Math.random() * 4 + 2 + 'px',
                    }}
                />
            ))}
        </div>
    );
};

// Scene 1: Introduction (The Envelope / Box)
const IntroScene = ({ onNext }: { onNext: () => void }) => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center h-full text-center p-6 z-10 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer group relative"
                onClick={onNext}
            >
                <div className="w-64 h-64 bg-gradient-to-br from-rose-600 to-rose-800 rounded-3xl shadow-[0_0_50px_rgba(225,29,72,0.4)] flex items-center justify-center border-4 border-gold-500/30 relative overflow-hidden">
                    <div className="absolute inset-0 border-2 border-gold-400 opacity-20 m-2 rounded-2xl border-dashed"></div>
                    {/* Jariga pattern simulation */}
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/10 to-transparent"></div>

                    <Gift className="w-24 h-24 text-gold-200 drop-shadow-md group-hover:animate-pulse" />

                    <motion.div
                        className="absolute -top-2 -right-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                        <Sparkles className="w-8 h-8 text-gold-400" />
                    </motion.div>
                </div>
                <div className="mt-8">
                    <h1 className="font-playfair text-4xl text-gold-100 mb-2 drop-shadow-lg">For You</h1>
                    <p className="text-rose-200 font-inter text-sm tracking-widest uppercase">Tap to Open</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

// Scene 2: The Story / Reasons
const StoryScene = ({ onNext }: { onNext: () => void }) => {
    const steps = [
        "Every moment with you feels like a dream...",
        "Your smile outshines the brightest gold...",
        "And your heart is more precious than any gem.",
        "I have a question for you..."
    ];

    const [index, setIndex] = useState(0);

    const handleTap = () => {
        if (index < steps.length - 1) {
            setIndex(index + 1);
        } else {
            onNext();
        }
    };

    return (
        <motion.div
            className="flex flex-col items-center justify-center h-full p-8 text-center z-10 relative cursor-pointer"
            onClick={handleTap}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <AnimatePresence mode='wait'>
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md"
                >
                    <h2 className="font-playfair text-3xl md:text-5xl leading-tight text-white drop-shadow-xl">
                        "{steps[index]}"
                    </h2>
                    <p className="mt-12 text-rose-300 text-sm animate-bounce">Tap to continue</p>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

// Scene 3: The Question
const QuestionScene = ({ onUncertain, onYes }: { onUncertain: () => void, onYes: () => void }) => {
    const [noCount, setNoCount] = useState(0);

    const getNoText = () => {
        const texts = ["No", "Are you sure?", "Really?", "Think again!", "Last chance!", "Pretty please?"];
        return texts[Math.min(noCount, texts.length - 1)];
    };

    return (
        <motion.div
            className="flex flex-col items-center justify-center h-full p-4 z-10 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            <h2 className="font-playfair text-4xl md:text-6xl text-gold-200 mb-12 text-center drop-shadow-md">
                Will you be my Valentine?
            </h2>

            <div className="flex flex-col md:flex-row gap-6 items-center">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-rose-600 text-white font-playfair text-xl rounded-full shadow-[0_0_20px_rgba(225,29,72,0.6)] border-2 border-rose-400 hover:bg-rose-500 transition-colors"
                    onClick={onYes}
                >
                    Yes, absolutely! 🌹
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-transparent text-rose-300 border border-rose-800 rounded-full font-playfair text-lg hover:bg-rose-900/40 transition-colors"
                    onClick={() => {
                        setNoCount(noCount + 1);
                        onUncertain();
                    }}
                    style={{
                        transform: `scale(${Math.max(0.8, 1 - noCount * 0.1)})`
                    }}
                >
                    {getNoText()}
                </motion.button>
            </div>
        </motion.div>
    );
};

// Scene 4: The Celebration
const CelebrationScene = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center h-full p-8 pb-20 text-center z-10 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <Heart className="w-32 h-32 text-rose-500 fill-rose-500 drop-shadow-[0_0_30px_rgba(244,63,94,0.8)]" />
            </motion.div>

            <h1 className="font-playfair text-5xl md:text-7xl text-gold-300 mt-8 mb-4 drop-shadow-xl">
                Yay! I love you!
            </h1>
            <p className="font-inter text-rose-200 text-lg max-w-lg mx-auto leading-relaxed">
                You've made me the happiest person. This gift is just the beginning of our story together. <br />
                <span className="text-gold-400 font-bold block mt-4">Happy Valentine's Day!</span>
            </p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-10 z-50 relative"
            >
                <Link to="/our-story" className="inline-block px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-rose-950 font-playfair font-bold text-lg rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:scale-105 transition-transform">
                    Read Our Story ✨
                </Link>

            </motion.div>

            {/* Confetti simulation with particles */}
            {[...Array(50)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    initial={{
                        top: -20,
                        left: Math.random() * 100 + '%',
                        backgroundColor: ['#fb7185', '#fbbf24', '#f472b6'][Math.floor(Math.random() * 3)],
                        width: Math.random() * 10 + 5 + 'px',
                        height: Math.random() * 10 + 5 + 'px',
                        borderRadius: Math.random() > 0.5 ? '50%' : '2px',
                        rotate: Math.random() * 360,
                    }}
                    animate={{
                        top: '110%',
                        rotate: Math.random() * 720,
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "linear",
                    }}
                />
            ))}
        </motion.div>
    )
}

export default function Story() {
    const [scene, setScene] = useState(0);

    const nextScene = () => setScene(s => s + 1);

    return (
        <div className="w-full h-screen bg-rose-950 text-white relative font-sans overflow-hidden">
            <Background />

            <AnimatePresence mode='wait'>
                {scene === 0 && (
                    <motion.div key="intro" className="absolute inset-0">
                        <IntroScene onNext={nextScene} />
                    </motion.div>
                )}
                {scene === 1 && (
                    <motion.div key="story" className="absolute inset-0">
                        <StoryScene onNext={nextScene} />
                    </motion.div>
                )}
                {scene === 2 && (
                    <motion.div key="question" className="absolute inset-0">
                        <QuestionScene onUncertain={() => { }} onYes={nextScene} />
                    </motion.div>
                )}
                {scene === 3 && (
                    <motion.div key="celebration" className="absolute inset-0">
                        <CelebrationScene />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
