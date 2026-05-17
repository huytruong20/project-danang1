"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=800&auto=format",
    alt: "Sông Hàn về đêm",
    span: "col-span-2 row-span-2",
    color: "from-blue-600/40 to-cyan-600/40",
  },
  {
    src: "/images/caurong.jpg",
    alt: "Rồng phun lửa",
    span: "col-span-1 row-span-1",
    color: "from-orange-600/40 to-amber-600/40",
  },
  {
    src: "/images/mykhe.jpg",
    alt: "Bình minh Mỹ Khê",
    span: "col-span-1 row-span-1",
    color: "from-cyan-600/40 to-teal-600/40",
  },
  {
    src: "/images/sontra.jpg",
    alt: "Đỉnh Sơn Trà",
    span: "col-span-1 row-span-2",
    color: "from-emerald-600/40 to-green-600/40",
  },
  {
    src: "/images/banahill.jpg",
    alt: "Cầu Vàng trên mây",
    span: "col-span-1 row-span-1",
    color: "from-yellow-600/40 to-orange-600/40",
  },
  {
    src: "/images/nguhanhson.jpg",
    alt: "Hang động Huyền Không",
    span: "col-span-1 row-span-1",
    color: "from-violet-600/40 to-purple-600/40",
  },
  {
    src: "/images/chocon.jpg",
    alt: "Nhộn nhịp Chợ Cồn",
    span: "col-span-1 row-span-1",
    color: "from-rose-600/40 to-pink-600/40",
  },
  {
    src: "/images/chohan.jpg",
    alt: "Sắc màu Chợ Hàn",
    span: "col-span-1 row-span-1",
    color: "from-amber-600/40 to-red-600/40",
  },
];

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1222] via-[#0a0f1e] to-[#0c1222]" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <Camera size={14} className="text-violet-400" />
            <span className="text-violet-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Bộ sưu tập
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-5 sm:mb-6 text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Góc nhìn{" "}
            <span className="bg-gradient-to-r from-violet-300 via-pink-300 to-orange-300 bg-clip-text text-transparent">
              Đà Nẵng
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base sm:text-lg">
            Mỗi bức ảnh là một lời mời — hãy để hình ảnh dẫn lối bạn đến với thành phố biển
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 auto-rows-[140px] sm:auto-rows-[180px] lg:auto-rows-[210px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group ${img.span}`}
              onClick={() => openLightbox(index)}
            >
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${img.src}')` }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${img.color} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-300" />

              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2 border border-white/30">
                  <Camera size={16} className="text-white" />
                </div>
                <span className="text-white text-xs sm:text-sm font-semibold drop-shadow-lg text-center px-2">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />

            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2.5 sm:p-3 rounded-full bg-white/10 backdrop-blur-md text-white/70 hover:text-white hover:bg-white/20 transition-all z-10 border border-white/10"
              aria-label="Đóng"
            >
              <X size={20} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-3 sm:left-4 p-2.5 sm:p-3 rounded-full bg-white/10 backdrop-blur-md text-white/70 hover:text-white hover:bg-white/20 transition-all z-10 border border-white/10"
              aria-label="Trước"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-3 sm:right-4 p-2.5 sm:p-3 rounded-full bg-white/10 backdrop-blur-md text-white/70 hover:text-white hover:bg-white/20 transition-all z-10 border border-white/10"
              aria-label="Tiếp"
            >
              <ChevronRight size={22} />
            </button>

            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              className="relative max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
              <span className="text-white/80 text-xs sm:text-sm font-medium">
                {galleryImages[selectedIndex].alt} — {selectedIndex + 1} / {galleryImages.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
