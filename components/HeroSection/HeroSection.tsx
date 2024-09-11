'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
    return (
        <section className="py-20 md:py-32">
            <div className="container max-w-6xl mx-auto px-4 sm:px-8 lg:px-8 text-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    {/* Go from <span className="font-normal">generic</span> to <span className="font-normal">specialized</span> AI */}
                    Let&apos;s see where your adventure takes you!
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    Design your perfect trip with ease. Start exploring your next destination now.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-4 text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                    <Button
                        size="lg"
                        className="bg-purple-600 text-lg hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full"
                    >
                        Get Started
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="bg-transparent text-lg hover:bg-gray-800 text-white font-semibold py-3 px-8 border border-gray-700 rounded-full"
                    >
                        Talk to an Expert
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}