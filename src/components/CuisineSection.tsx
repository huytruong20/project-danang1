"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Clock, Flame, UtensilsCrossed } from "lucide-react";

const dishes = [
  {
    name: "Mì Quảng",
    description:
      "Sợi mì dẹt vàng ươm tẩm nghệ, chan nước dùng tôm cua đậm vị, rắc đậu phộng rang giòn.",
    image:
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=600&auto=format",
    rating: 4.9,
    price: "35.000đ",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Hải sản tươi sống",
    description:
      "Tôm hùm, cua hoàng đế, ghẹ biển — vớt lên bàn trong vòng 30 phút ngay tại bờ biển.",
    image:
      "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=600&auto=format",
    rating: 4.8,
    price: "200.000đ",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Bún chả cá",
    description:
      "Nước dùng trong vắt ninh từ xương cá, chả cá chiên vàng thơm phức, ăn kèm rau sống địa phương.",
    image:
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=600&auto=format",
    rating: 4.7,
    price: "30.000đ",
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Bánh tráng cuốn thịt heo",
    description:
      "Thịt ba chỉ luộc mềm cuốn cùng rau thơm mười loại, chấm mắm nêm Đà Nẵng chuẩn vị.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format",
    rating: 4.8,
    price: "45.000đ",
    color: "from-rose-500 to-pink-600",
  },
];

const markets = [
  {
    name: "Chợ Cồn",
    description:
      "Khu chợ sầm uất lớn nhất thành phố, thiên đường ẩm thực với hàng trăm quầy hàng bán đủ loại đặc sản miền Trung từ sáng sớm đến chiều muộn.",
    image: "/images/chocon.jpg",
    address: "290 Hùng Vương, Hải Châu",
    hours: "5:00 - 19:00",
    highlight: "Chợ lớn nhất",
    accent: "from-orange-500 to-red-500",
  },
  {
    name: "Chợ Hàn",
    description:
      "Ngôi chợ truyền thống bên bờ sông Hàn, nổi danh với hải sản khô, mắm cái, bánh tráng và quà lưu niệm cho du khách.",
    image: "/images/chohan.jpg",
    address: "119 Trần Phú, Hải Châu",
    hours: "6:00 - 18:00",
    highlight: "Quà đặc sản",
    accent: "from-emerald-500 to-cyan-500",
  },
];

const choConDishes = [
  {
    name: "Bánh xèo giòn",
    description:
      "Vỏ bột gạo giòn tan đổ trên khuôn đất, nhân đầy tôm đất và giá đỗ, cuốn rau rừng chấm mắm ngọt.",
    image: "/images/banhxeo.jpg",
    price: "5.000đ/cái",
    emoji: "🥘",
  },
  {
    name: "Bánh mì lò than",
    description:
      "Ổ bánh nướng lò than giòn rụm, nhồi patê gan, thịt nguội, dưa leo và nước sốt bí truyền.",
    image: "/images/banhmi.jpg",
    price: "15.000đ",
    emoji: "🥖",
  },
  {
    name: "Bún thịt nướng",
    description:
      "Bún tươi trắng ngần phủ thịt heo nướng than hoa thơm lừng, ăn kèm chả giò và nước mắm tỏi ớt.",
    image: "/images/bunmam.jpg",
    price: "30.000đ",
    emoji: "🍜",
  },
  {
    name: "Gỏi cuốn tươi",
    description:
      "Tôm hấp, thịt luộc, bún và rau thơm cuốn trong bánh tráng mỏng, chấm tương đậu phộng béo ngậy.",
    image: "/images/goicuon.jpg",
    price: "5.000đ/cuốn",
    emoji: "🌯",
  },
];

export default function CuisineSection() {
  return (
    <section
      id="cuisine"
      className="py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1222] via-[#0f172a] to-[#0c1222]" />
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-orange-500/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <UtensilsCrossed size={14} className="text-orange-400" />
            <span className="text-orange-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Ẩm thực
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-5 sm:mb-6 text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nếm trọn{" "}
            <span className="bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
              vị miền Trung
            </span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base sm:text-lg">
            Hành trình ẩm thực đưa bạn qua những hương vị đặc trưng không nơi nào có được
          </p>
        </motion.div>

        {/* Dish Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-24">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${dish.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 scale-90`} />

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${dish.image}')` }}
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md flex items-center gap-1.5 border border-white/10">
                    <Star size={11} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-xs font-medium">
                      {dish.rating}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${dish.color} text-white text-xs font-bold shadow-lg`}>
                      {dish.price}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-orange-300 transition-colors mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Markets Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <MapPin size={14} className="text-emerald-400" />
            <span className="text-emerald-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Chợ truyền thống
            </span>
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 mb-4 text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ăn vặt{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              giữa lòng chợ
            </span>
          </h3>
          <p className="text-white/50 max-w-2xl mx-auto text-base sm:text-lg">
            Hòa vào nhịp sống bản địa tại hai khu chợ truyền thống lâu đời nhất Đà Nẵng
          </p>
        </motion.div>

        {/* Market Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 mb-16 sm:mb-24">
          {markets.map((market, index) => (
            <motion.div
              key={market.name}
              initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl flex flex-col sm:flex-row"
            >
              <div className="relative w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden shrink-0">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${market.image}')` }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${market.accent} text-white text-xs font-bold shadow-lg`}>
                    {market.highlight}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col justify-center flex-1">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-3">
                  {market.name}
                </h4>
                <p className="text-white/40 text-xs sm:text-sm leading-relaxed mb-4">
                  {market.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <MapPin size={13} className="text-emerald-400 shrink-0" />
                    <span className="text-white/50">{market.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <Clock size={13} className="text-emerald-400 shrink-0" />
                    <span className="text-white/50">{market.hours}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cho Con Dishes Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4">
            <Flame size={14} className="text-rose-400" />
            <span className="text-rose-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Must-try
            </span>
          </div>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 mb-4 text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Đặc sản{" "}
            <span className="bg-gradient-to-r from-rose-300 via-orange-300 to-amber-300 bg-clip-text text-transparent">
              Chợ Cồn
            </span>
          </h3>
          <p className="text-white/50 max-w-2xl mx-auto text-base sm:text-lg">
            Bốn món ăn gắn liền với tên tuổi khu chợ lớn nhất Đà Nẵng suốt nhiều thập kỷ
          </p>
        </motion.div>

        {/* Cho Con Dish Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {choConDishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-rose-500/30 transition-all duration-300">
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${dish.image}')` }}
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 text-2xl">{dish.emoji}</div>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white text-xs font-bold shadow-lg">
                      {dish.price}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-rose-300 transition-colors mb-2">
                    {dish.name}
                  </h4>
                  <p className="text-white/40 text-xs sm:text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
