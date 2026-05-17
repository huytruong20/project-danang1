"use client";

import { motion } from "framer-motion";
import { MapPin, Sun, Plane, Users } from "lucide-react";

const stats = [
  {
    icon: MapPin,
    value: "11.859,6 km²",
    label: "Tổng diện tích",
    description: "Trải dài từ núi đến biển",
    gradient: "from-blue-500 to-cyan-400",
    bgGlow: "bg-blue-500/20",
  },
  {
    icon: Sun,
    value: "25-26°C",
    label: "Nhiệt độ trung bình",
    description: "Ấm áp bốn mùa trong năm",
    gradient: "from-amber-400 to-orange-500",
    bgGlow: "bg-amber-500/20",
  },
  {
    icon: Plane,
    value: "10M+",
    label: "Lượt khách mỗi năm",
    description: "Top điểm đến Đông Nam Á",
    gradient: "from-violet-500 to-purple-500",
    bgGlow: "bg-violet-500/20",
  },
  {
    icon: Users,
    value: "1.2M",
    label: "Cư dân sinh sống",
    description: "Đô thị trực thuộc trung ương",
    gradient: "from-emerald-400 to-teal-500",
    bgGlow: "bg-emerald-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-[#0c1222] to-purple-950" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6">
            Tổng quan
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-5 sm:mb-6 text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Đà Nẵng —{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Vùng đất hội tụ
            </span>
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Tọa lạc giữa trục di sản miền Trung, Đà Nẵng sở hữu đường bờ biển
            dài hơn 90 km, dãy Trường Sơn hùng vĩ phía Tây và hệ sinh thái đa dạng
            từ rừng nguyên sinh đến rạn san hô. Đây là nơi lịch sử ngàn năm hòa
            nhịp cùng tốc độ phát triển đô thị hiện đại bậc nhất Việt Nam.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              <div className={`absolute -top-10 -right-10 w-32 h-32 ${stat.bgGlow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}>
                <stat.icon size={20} className="text-white" />
              </div>
              <h3 className="relative text-xl sm:text-2xl font-bold text-white mb-1">
                {stat.value}
              </h3>
              <p className={`relative bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent font-semibold text-xs sm:text-sm mb-1.5`}>
                {stat.label}
              </p>
              <p className="relative text-white/40 text-xs sm:text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
