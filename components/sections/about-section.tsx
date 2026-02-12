
"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Star, TrendingUp, Video, Instagram } from "lucide-react"

export default function AboutSection() {
    const services = [
        {
            icon: <Instagram className="w-6 h-6 text-pink-500" />,
            title: "Instagram Reels",
            description: "Trendy, fast-paced edits designed to stop the scroll and maximize engagement."
        },
        {
            icon: <Video className="w-6 h-6 text-red-500" />,
            title: "YouTube Shorts",
            description: "High-retention vertical videos optimized for the YouTube algorithm."
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-indigo-500" />,
            title: "TikTok Content",
            description: "Creative effects and viral sounds to keep your audience hooked."
        }
    ]



    return (
        <section id="about" className="py-24 bg-white/50 relative">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <h2 className="text-sm font-bold text-pink-500 uppercase tracking-widest mb-2 font-sans">About Me</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-indigo-950 mb-6">
                            I help creators <span className="italic text-pink-400">go viral.</span>
                        </h3>
                        <p className="text-lg text-indigo-900/70 mb-6 leading-relaxed font-sans">
                            Hi, I'm <span className="font-semibold text-indigo-950">Sunny</span>. With over <span className="font-semibold text-pink-600">500+ videos</span> edited and <span className="font-semibold text-pink-600">25+ viral hits</span> (1M+ views), I know exactly what makes short-form content perform.
                        </p>
                        <p className="text-lg text-indigo-900/70 mb-8 leading-relaxed font-sans">
                            My editing style focuses on rhythm, storytelling, and retention. Whether it's a 15-second Reel or a 60-second Short, I ensure every frame counts.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-sm">
                                <div className="text-3xl font-bold text-indigo-950 mb-1 font-serif">500+</div>
                                <div className="text-sm text-indigo-900/60 font-sans">Videos Created</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-white border border-pink-100 shadow-sm">
                                <div className="text-3xl font-bold text-indigo-950 mb-1 font-serif">1M+</div>
                                <div className="text-sm text-indigo-900/60 font-sans">Views Generated</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Services Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 grid gap-6"
                    >
                        {services.map((service, index) => (
                            <div key={index} className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:bg-white/80 transition-colors group">
                                <div className="p-3 rounded-full bg-pink-50 group-hover:bg-pink-100 transition-colors">
                                    {service.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-indigo-950 mb-2 font-serif">{service.title}</h4>
                                    <p className="text-indigo-900/60 text-sm font-sans">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
