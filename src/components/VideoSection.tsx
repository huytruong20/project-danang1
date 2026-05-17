"use client";

import { motion } from "framer-motion";
import { Play, Film } from "lucide-react";
import { useState } from "react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="video"
      className="py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1222] via-[#0a0f1e] to-[#0c1222]" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-sky-500/8 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <Film size={14} className="text-sky-400" />
            <span className="text-sky-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Cinematic
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-5 sm:mb-6 text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Cảm nhận{" "}
            <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              qua ống kính
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base sm:text-lg">
            2 phút bay trên bầu trời Đà Nẵng — từ đỉnh Sơn Trà đến bãi biển Mỹ Khê lúc hoàng hôn
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 aspect-video border border-white/10"
        >
          {!playing ? (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1600&auto=format')",
                }}
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  onClick={() => setPlaying(true)}
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Phát video"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="relative w-14 h-14 sm:w-18 sm:h-18 lg:w-22 lg:h-22 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl">
                    <Play
                      size={24}
                      className="text-sky-600 fill-sky-600 ml-0.5"
                    />
                  </div>
                </motion.button>
              </div>
            </>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/PzC4_zNcSSM?autoplay=1&rel=0&modestbranding=1&playsinline=1"
              title="Đà Nẵng từ trên cao"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
