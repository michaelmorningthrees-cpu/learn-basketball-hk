import Link from 'next/link';
import { ArrowLeft, Dribbble, Trophy, Shield, Target, Users, CheckCircle2, BookOpen, MapPin, ArrowRight, Mail } from 'lucide-react';

export const metadata = {
  title: '關於我們 | Learn Basketball HK',
  description: 'Learn Basketball HK 關於我們 - 了解我們的使命、核心價值與服務內容',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-[#FF8C00] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">返回首頁</span>
        </Link>

        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-full bg-[#FF8C00]/20 flex items-center justify-center border-2 border-[#FF8C00]">
              <Dribbble className="w-8 h-8 text-[#FF8C00]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent">
              關於我們
            </h1>
          </div>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            為香港籃球注入專業力量，打造最強籃球戰術與教練平台
          </p>
        </div>

        {/* 平台使命 */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-slate-800/70 via-slate-800/60 to-slate-900/70 backdrop-blur-md rounded-xl p-8 md:p-10 border border-slate-700/50 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FF8C00]/20 flex items-center justify-center border-2 border-[#FF8C00] flex-shrink-0">
                <Trophy className="w-6 h-6 text-[#FF8C00]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  我們的使命 (Our Mission)
                </h2>
              </div>
            </div>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed ml-16 md:ml-0">
              Learn Basketball HK 誕生於對籃球的熱愛。我們發現香港缺乏一個系統化、現代化的籃球知識平台，因此我們決定參考國際專業標準，為香港球員提供最精準的戰術圖解，並連結本土最頂尖的籃球教練。
            </p>
          </div>
        </section>

        {/* 三大核心價值 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">
            三大核心價值 (Core Values)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* 專業性 */}
            <div className="bg-gradient-to-br from-slate-800/70 via-slate-800/60 to-slate-900/70 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-[#FF8C00]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#FF8C00]/20 flex items-center justify-center border-2 border-[#FF8C00] flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#FF8C00]" />
                </div>
                <h3 className="text-xl font-bold text-white">專業性</h3>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                嚴選甲一級及具備社交媒體影響力的專業教練
              </p>
            </div>

            {/* 系統化 */}
            <div className="bg-gradient-to-br from-slate-800/70 via-slate-800/60 to-slate-900/70 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-[#FF8C00]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#FF8C00]/20 flex items-center justify-center border-2 border-[#FF8C00] flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-[#FF8C00]" />
                </div>
                <h3 className="text-xl font-bold text-white">系統化</h3>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                從進攻到防守，將複雜戰術拆解為易懂的圖解
              </p>
            </div>

            {/* 在地化 */}
            <div className="bg-gradient-to-br from-slate-800/70 via-slate-800/60 to-slate-900/70 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-[#FF8C00]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#FF8C00]/20 flex items-center justify-center border-2 border-[#FF8C00] flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#FF8C00]" />
                </div>
                <h3 className="text-xl font-bold text-white">在地化</h3>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                專為香港籃球愛好者設計，使用本土語言與溝通方式
              </p>
            </div>
          </div>
        </section>

        {/* 我們的內容 */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">
            我們的內容
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* 進攻體系 */}
            <Link
              href="/offense"
              className="group bg-gradient-to-br from-slate-800/70 via-slate-800/60 to-slate-900/70 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-[#FF8C00]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#FF8C00]/20 flex items-center justify-center border-2 border-[#FF8C00] flex-shrink-0 group-hover:bg-[#FF8C00]/30 transition-colors">
                  <Target className="w-6 h-6 text-[#FF8C00]" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF8C00] transition-colors">
                  進攻體系
                </h3>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                深入了解各種進攻戰術、跑位策略與得分技巧
              </p>
              <div className="flex items-center gap-2 text-[#FF8C00] text-sm font-medium group-hover:gap-3 transition-all">
                探索進攻戰術
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 防守策略 */}
            <Link
              href="/defense"
              className="group bg-gradient-to-br from-slate-800/70 via-slate-800/60 to-slate-900/70 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-[#FF8C00]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#FF8C00]/20 flex items-center justify-center border-2 border-[#FF8C00] flex-shrink-0 group-hover:bg-[#FF8C00]/30 transition-colors">
                  <Shield className="w-6 h-6 text-[#FF8C00]" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF8C00] transition-colors">
                  防守策略
                </h3>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                學習區域防守、人盯人戰術與全場緊逼技巧
              </p>
              <div className="flex items-center gap-2 text-[#FF8C00] text-sm font-medium group-hover:gap-3 transition-all">
                探索防守策略
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* 找教練 */}
            <Link
              href="/coaches"
              className="group bg-gradient-to-br from-slate-800/70 via-slate-800/60 to-slate-900/70 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 hover:border-[#FF8C00]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#FF8C00]/20 flex items-center justify-center border-2 border-[#FF8C00] flex-shrink-0 group-hover:bg-[#FF8C00]/30 transition-colors">
                  <Users className="w-6 h-6 text-[#FF8C00]" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF8C00] transition-colors">
                  找教練
                </h3>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                尋找最適合你的專業籃球教練，開啟你的籃球之旅
              </p>
              <div className="flex items-center gap-2 text-[#FF8C00] text-sm font-medium group-hover:gap-3 transition-all">
                瀏覽教練目錄
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </section>

        {/* 聯絡我們 */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-slate-800/70 via-slate-800/60 to-slate-900/70 backdrop-blur-md rounded-xl p-8 md:p-10 border border-slate-700/50 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              想要了解更多？
            </h2>
            <p className="text-slate-300 text-base md:text-lg mb-6 max-w-2xl mx-auto">
              如果你有任何問題、建議或合作機會，歡迎隨時聯絡我們
            </p>
            <a
              href="mailto:michaelmorningthrees@gmail.com"
              className="inline-flex items-center gap-2 bg-[#FF8C00] hover:bg-[#FF9500] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-orange-500/50 group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              聯絡我們
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
