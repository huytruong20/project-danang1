"use client";

import { motion } from "framer-motion";
import { MapPin, Compass } from "lucide-react";

const destinations = [
  {
    name: "Cầu Rồng",
    description:
      "Công trình kiến trúc dài 666m uốn lượn qua sông Hàn, phun lửa và nước mỗi cuối tuần thu hút hàng ngàn du khách.",
    image: "/images/caurong.jpg",
    tag: "Biểu tượng",
    accent: "from-orange-500 to-amber-500",
  },
  {
    name: "Bà Nà Hills",
    description:
      "Thiên đường nghỉ dưỡng trên cao độ 1.487m với Cầu Vàng huyền thoại, lâu đài châu Âu và vườn hoa bốn mùa.",
    image: "/images/banahill2.jpg",
    tag: "Trên mây",
    accent: "from-pink-500 to-rose-500",
  },
  {
    name: "Biển Mỹ Khê",
    description:
      "Forbes vinh danh trong top bãi biển quyến rũ nhất hành tinh — cát mịn trải dài 900m, sóng êm quanh năm.",
    image: "/images/mykhe.jpg",
    tag: "Biển xanh",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    name: "Ngũ Hành Sơn",
    description:
      "Quần thể năm ngọn núi thiêng Kim - Mộc - Thủy - Hỏa - Thổ ẩn chứa chùa cổ và hang động kỳ bí.",
    image: "/images/nguhanhson.jpg",
    tag: "Tâm linh",
    accent: "from-emerald-500 to-green-600",
  },
  {
    name: "Bán đảo Sơn Trà",
    description:
      "Lá phổi xanh 4.439 ha với đàn voọc chà vá chân nâu quý hiếm và đường ven biển đẹp nhất Đông Dương.",
    image: "/images/sontra.jpg",
    tag: "Hoang dã",
    accent: "from-teal-500 to-emerald-500",
  },
  {
    name: "Thể thao biển",
    description:
      "Lướt ván, chèo SUP, lặn ngắm san hô — thiên đường cho tín đồ thể thao mạo hiểm trên sóng nước.",
    image: "/images/sup.jpg",
    tag: "Phiêu lưu",
    accent: "from-sky-500 to-cyan-500",
  },
  {
    name: "Sun World Asia Park",
    description:
      "Công viên giải trí với Sun Wheel cao 115m — vòng quay lớn nhất Đông Nam Á, nhìn trọn toàn cảnh thành phố.",
    image: "/images/asiapark.jpg",
    tag: "Giải trí",
    accent: "from-red-500 to-orange-500",
  },
  {
    name: "Thành phố Đà Nẵng",
    description:
      "Đô thị sông Hàn lung linh về đêm với 9 cây cầu nối đôi bờ, mỗi cầu mang một kiến trúc riêng biệt.",
    image: "/images/danang-city.jpg",
    tag: "Đô thị",
    accent: "from-violet-500 to-purple-600",
  },
];

export default function DestinationsSection() {
  return (
    <section id="destinations" className="py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1222] via-[#0e1629] to-[#0c1222]" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-violet-500/8 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <Compass size={14} className="text-cyan-400" />
            <span className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Điểm đến
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-5 sm:mb-6 text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Những nơi{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
              phải ghé thăm
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base sm:text-lg">
            8 trải nghiệm không thể thiếu cho hành trình khám phá thành phố bên sông Hàn
          </p>
        </motion.div>

        {/* Top row - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-4 sm:mb-5">
          {destinations.slice(0, 3).map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              <div className="relative h-64 sm:h-72 lg:h-[400px] overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${dest.image}')` }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" as const }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${dest.accent} text-white text-xs font-bold shadow-lg`}>
                    {dest.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={13} className="text-cyan-400" />
                    <span className="text-cyan-400 text-xs font-medium">
                      Đà Nẵng
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {dest.name}
                  </h3>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                    {dest.description}
                  </p>
                </div>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${dest.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </motion.div>
          ))}
        </div>

        {/* Middle row - 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
          {destinations.slice(3, 5).map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${dest.image}')` }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" as const }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${dest.accent} text-white text-xs font-bold shadow-lg`}>
                    {dest.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={13} className="text-cyan-400" />
                    <span className="text-cyan-400 text-xs font-medium">
                      Đà Nẵng
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                    {dest.name}
                  </h3>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                    {dest.description}
                  </p>
                </div>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${dest.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom row - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {destinations.slice(5).map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${dest.image}')` }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" as const }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${dest.accent} text-white text-xs font-bold shadow-lg`}>
                    {dest.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={13} className="text-cyan-400" />
                    <span className="text-cyan-400 text-xs font-medium">
                      Đà Nẵng
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                    {dest.name}
                  </h3>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                    {dest.description}
                  </p>
                </div>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${dest.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
