"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "Youtube" },
];

const quickLinks = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Tổng quan", href: "#about" },
  { label: "Điểm đến", href: "#destinations" },
  { label: "Ẩm thực", href: "#cuisine" },
  { label: "Hình ảnh", href: "#gallery" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060a14] text-white pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3 sm:mb-4"
            >
              Đà Nẵng
            </motion.h3>
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-5">
              Viên ngọc miền Trung — nơi biển xanh gặp núi thẳm,
              nơi truyền thống sánh bước cùng hiện đại.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/70 mb-3 sm:mb-4">
              Điều hướng
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/70 mb-3 sm:mb-4">
              Liên hệ
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2.5 text-white/50 text-xs sm:text-sm">
                <MapPin size={14} className="text-cyan-400 shrink-0" />
                <span>Đà Nẵng, Việt Nam</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/50 text-xs sm:text-sm">
                <Phone size={14} className="text-cyan-400 shrink-0" />
                <span>+84 236 3888 999</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/50 text-xs sm:text-sm">
                <Mail size={14} className="text-cyan-400 shrink-0" />
                <span>hello@danang.travel</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/70 mb-3 sm:mb-4">
              Bản tin du lịch
            </h4>
            <p className="text-white/50 text-xs sm:text-sm mb-3 sm:mb-4">
              Nhận gợi ý hành trình và ưu đãi mỗi tuần
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 min-w-0 px-3 sm:px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-400/50 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 sm:px-4 py-2.5 rounded-lg bg-cyan-500 text-white text-xs sm:text-sm font-medium hover:bg-cyan-600 transition-colors shrink-0"
              >
                Gửi
              </motion.button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs sm:text-sm">
            © 2024 Đà Nẵng Travel. All rights reserved.
          </p>
          <p className="text-white/30 text-xs sm:text-sm flex items-center gap-1">
            Made with <Heart size={12} className="text-red-400 fill-red-400" /> in Đà Nẵng
          </p>
        </div>
      </div>
    </footer>
  );
}
