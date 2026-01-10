'use client';

import Link from 'next/link';
import { ArrowRight, Target, Shield, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* 背景裝飾效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00]/10 via-transparent to-[#FFA500]/10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF8C00]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFA500]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 md:py-32 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            {/* 主標題 */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent animate-pulse">
              🏀 Learn Basketball HK
            </h1>

            {/* 副標題 */}
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              香港專業籃球戰術與教練平台
            </p>

            {/* CTA 按鈕 */}
            <Link
              href="/plays"
              className="inline-flex items-center gap-2 bg-[#FF8C00] hover:bg-[#FF9500] text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/50 hover:scale-105 group"
            >
              開始學習戰術
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 功能區塊 */}
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 進攻戰術卡片 */}
          <Link
            href="/offense"
            className="group relative bg-gradient-to-br from-slate-800/70 via-slate-800/60 to-slate-900/70 backdrop-blur-md rounded-xl p-8 border border-slate-700/50 hover:border-[#FF8C00]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 overflow-hidden"
          >
            {/* 背景裝飾 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF8C00]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative">
              {/* 圖標 */}
              <div className="w-16 h-16 bg-[#FF8C00]/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-[#FF8C00]" />
              </div>

              {/* 標題 */}
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FF8C00] transition-colors">
                進攻戰術
              </h2>

              {/* 描述 */}
              <p className="text-slate-300 leading-relaxed mb-4">
                提升球隊得分效率
              </p>

              {/* 箭頭 */}
              <div className="flex items-center text-[#FF8C00] font-medium group-hover:gap-2 transition-all">
                了解更多
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* 防守體系卡片 */}
          <Link
            href="/defense"
            className="group relative bg-gradient-to-br from-slate-800/70 via-slate-800/60 to-slate-900/70 backdrop-blur-md rounded-xl p-8 border border-slate-700/50 hover:border-[#FF8C00]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 overflow-hidden"
          >
            {/* 背景裝飾 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF8C00]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative">
              {/* 圖標 */}
              <div className="w-16 h-16 bg-[#FF8C00]/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-[#FF8C00]" />
              </div>

              {/* 標題 */}
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FF8C00] transition-colors">
                防守體系
              </h2>

              {/* 描述 */}
              <p className="text-slate-300 leading-relaxed mb-4">
                打造密不透風的防線
              </p>

              {/* 箭頭 */}
              <div className="flex items-center text-[#FF8C00] font-medium group-hover:gap-2 transition-all">
                了解更多
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* 專業教練卡片 */}
          <Link
            href="/coaches"
            className="group relative bg-gradient-to-br from-slate-800/70 via-slate-800/60 to-slate-900/70 backdrop-blur-md rounded-xl p-8 border border-slate-700/50 hover:border-[#FF8C00]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 overflow-hidden"
          >
            {/* 背景裝飾 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF8C00]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative">
              {/* 圖標 */}
              <div className="w-16 h-16 bg-[#FF8C00]/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-[#FF8C00]" />
              </div>

              {/* 標題 */}
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FF8C00] transition-colors">
                專業教練
              </h2>

              {/* 描述 */}
              <p className="text-slate-300 leading-relaxed mb-4">
                尋找最適合你的私人導師
              </p>

              {/* 箭頭 */}
              <div className="flex items-center text-[#FF8C00] font-medium group-hover:gap-2 transition-all">
                了解更多
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 底部裝飾區塊 */}
      <section className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center">
          <p className="text-slate-400 text-lg mb-6">
            與我們一起，提升你的籃球水平
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/plays"
              className="px-6 py-3 bg-slate-800/50 hover:bg-[#FF8C00] text-white rounded-lg transition-all duration-300 border border-slate-700/50 hover:border-[#FF8C00]"
            >
              戰術圖解
            </Link>
            <Link
              href="/offense"
              className="px-6 py-3 bg-slate-800/50 hover:bg-[#FF8C00] text-white rounded-lg transition-all duration-300 border border-slate-700/50 hover:border-[#FF8C00]"
            >
              進攻技巧
            </Link>
            <Link
              href="/defense"
              className="px-6 py-3 bg-slate-800/50 hover:bg-[#FF8C00] text-white rounded-lg transition-all duration-300 border border-slate-700/50 hover:border-[#FF8C00]"
            >
              防守策略
            </Link>
            <Link
              href="/coaches"
              className="px-6 py-3 bg-slate-800/50 hover:bg-[#FF8C00] text-white rounded-lg transition-all duration-300 border border-slate-700/50 hover:border-[#FF8C00]"
            >
              找教練
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
