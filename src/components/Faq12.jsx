import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questionsAndAnswers = [
    {
        question: "What is Hacknovate 6.0?",
        answer: " Hacknovate 6.0 is a 24-hour hybrid hackathon, flagship event of ABES Institute of Technology, designed to bring together innovative minds to build groundbreaking solutions. Participants will collaborate, code, and compete for exciting prizes while gaining hands-on experience. It is happening on 4th-5th April, 2025.",
    },
    {
        question: "How can I register for the hackathon?",
        answer: "You can register for Hacknovate 6.0 by visiting our official website and filling out the registration form.",
    },
    {
        question: "Is there an age limit for participation?",
        answer: " There is no specific age limit; however, participants must be at least 16 years old. Minors must provide parental consent.",
    },
    {
        question: "Can I participate if I am from a different country?",
        answer: " Yes, Hacknovate 6.0 welcomes international participants. However, ensure you meet the event's participation requirements.",
    },
    {
        question: "What are the eligibility criteria for participation?",
        answer: " Participants must be college students with an interest in technology and innovation. They must also have a valid student ID",
    },
    {
        question: "Can I participate individually, or do I need a team?",
        answer: " You can participate in a team of 3-4 members. Team formation can be done during registration.",
    },
    {
        question: "Can I participate even if I am a beginner?",
        answer: "  Yes, beginners are encouraged to participate. Mentors will be available to guide and support you throughout the event.",
    },
    {
        question: "Will there be certificates for participation?",
        answer: " Yes, all participants will receive an official certificate of participation.",
    },
    {
        question: "What happens if I miss a deadline?",
        answer: "  Missing a deadline may result in disqualification. Ensure you adhere to all submission timelines provided in the hackathon schedule.",
    }
];

const FaqItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFaq = () => setIsOpen(!isOpen);

    return (
        <div className="relative mb-4 border-2 border-amber-700 rounded-xl overflow-hidden shadow-lg">
            <button 
                onClick={toggleFaq}
                className="w-full text-left p-4 bg-amber-50 hover:bg-amber-200 transition-colors flex justify-between items-center"
            >
                <span className="font-serif text-sm md:text-lg  text-black">{faq.question}</span>
                <motion.div
                    initial={false}
                    animate={{ 
                        rotate: isOpen ? 180 : 0,
                        scale: isOpen ? 1.1 : 1
                    }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 350, 
                        damping: 15 
                    }}
                    className="flex items-center justify-center"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.span 
                                key="wizard"
                                initial={{ opacity: 0, rotate: -90, scale: 0.3 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, rotate: 90, scale: 0.3 }}
                                transition={{ 
                                    duration: 0.4,
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 20
                                }}
                                className="text-2xl"
                            >
                                🧙‍♂️
                            </motion.span>
                        ) : (
                            <motion.span 
                                key="scroll"
                                initial={{ opacity: 0, rotate: 90, scale: 0.3 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, rotate: -90, scale: 0.3 }}
                                transition={{ 
                                    duration: 0.4,
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 20
                                }}
                                className="text-2xl"
                            >
                                📜
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.div>
            </button>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ 
                            opacity: 0, 
                            height: 0,
                            scale: 0.7,
                            transformOrigin: 'top center'
                        }}
                        animate={{ 
                            opacity: 1, 
                            height: 'auto',
                            scale: 1,
                            transition: { 
                                duration: 0.6,
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            }
                        }}
                        exit={{ 
                            opacity: 0, 
                            height: 0,
                            scale: 0.7,
                            transition: { 
                                duration: 0.6,
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            }
                        }}
                        className="bg-transparent p-4 origin-top text-sm md:text-lg"
                    >
                        <motion.p 
                            initial={{ 
                                opacity: 0,
                                y: -50,
                                scale: 0.8
                            }}
                            animate={{ 
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: { 
                                    delay: 0.2,
                                    duration: 0.6,
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15
                                }
                            }}
                            className="text-black  font-bold tracking-widest font-['Papyrus'] italic"
                        >
                            {faq.answer}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Faq12 = () => {
    const [visibleFaqs, setVisibleFaqs] = useState(4);

    const loadMoreFaqs = () => {
        setVisibleFaqs(prevVisible => 
            prevVisible + 4 <= questionsAndAnswers.length 
            ? prevVisible + 4 
            : questionsAndAnswers.length
        );
    };

    return (
        <div 
            className="min-h-screen bg-cover bg-center flex justify-center items-center"
        >
            <section className="w-[90%] max-w-4xl p-8 bg-transparent backdrop-blur-sm rounded-xl shadow-2xl">
                <div className="text-center mb-8">
                    <motion.h1 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ 
                            opacity: 1, 
                            y: 0,
                            transition: { 
                                duration: 0.6,
                                type: "spring",
                                stiffness: 100 
                            }
                        }}
                        className="font-['Luminari'] text-4xl text-black mb-4"
                    >
                        Hacknovate 6.0 FAQs
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: 1,
                            transition: { 
                                delay: 0.3,
                                duration: 0.6 
                            }
                        }}
                        className="text-lg text-black/70 font-['Papyrus']"
                    >
                        Your guide to the magical world of innovation
                    </motion.p>
                </div>

                <AnimatePresence>
                    {questionsAndAnswers.slice(0, visibleFaqs).map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaqItem faq={faq} />
                        </motion.div>
                    ))}
                </AnimatePresence>

                {visibleFaqs < questionsAndAnswers.length && (
                    <motion.button 
                        onClick={loadMoreFaqs}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                            opacity: 1, 
                            scale: 1,
                            transition: { 
                                delay: 0.5,
                                duration: 0.6,
                                type: "spring",
                                stiffness: 200
                            }
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 mx-auto block px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors font-['Luminari']"
                    >
                        More Magical Insights
                    </motion.button>
                )}
            </section>
        </div>
    );
};

export default Faq12;