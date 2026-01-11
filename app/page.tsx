'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  User, 
  CheckCircle2, 
  Award, 
  MapPin,
  X,
  PlayCircle,
  Layout,
  Zap
} from 'lucide-react';

// Google Ads gtag 类型声明
declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set',
      eventNameOrTargetId: string,
      eventParameters?: {
        [key: string]: string | number | boolean | undefined;
      }
    ) => void;
  }
}

// 教练数据（从 app/coaches/page.tsx 提取）
const featuredCoaches = [
  {
    id: '1',
    name: 'Coach Fui',
    nameCn: undefined,
    experience: 15,
    certifications: ['前香港代表隊', '甲一得分王', '技術開發教練'],
    districts: ['全港', '九龍區'],
  },
  {
    id: '2',
    name: 'KingCivilian (平民王)',
    nameCn: '劉振星',
    experience: 8,
    certifications: ['FIBA 3x3 香港代表', '籃球訓練師', '路人王城市賽冠軍'],
    districts: ['全港', '戶外球場'],
  },
  {
    id: '3',
    name: 'Kalik (@kalikbball)',
    nameCn: '嘉力',
    experience: 5,
    certifications: ['籃球訓練師', '射波技術專家', '線上籃球導師'],
    districts: ['全港', '線上指導'],
  },
  {
    id: '4',
    name: 'totobball',
    nameCn: '滔滔',
    experience: 5,
    certifications: ['籃球教育工作者', '9HEA 創辦人', '資深內容創作者'],
    districts: ['全港 (Outdoor/Private)'],
  },
];

// 战术数据（从 app/plays/page.tsx 提取）
const featuredTactics = [
  {
    id: '2',
    title: '1-4 高位擋拆戰術',
    titleEn: '1-4 High Pick and Roll Plays',
    description: '在 1-4 陣式中，利用高位擋拆（Pick and Roll）在弧頂創造空間，針對籃框或外圍投射進行進攻。',
    icon: <PlayCircle className="w-6 h-6" />,
  },
  {
    id: '1',
    title: '1-3-1 區域進攻戰術',
    titleEn: '1-3-1 Zone Offense Plays',
    description: '設計用於針對 1-3-1 區域防守創造得分機會的各種戰術配合與球員跑位策略。',
    icon: <Layout className="w-6 h-6" />,
  },
  {
    id: '3',
    title: '1-4 破緊逼戰術',
    titleEn: '1-4 Press Break Plays',
    description: '專門應對 1-2-1-1 菱形緊逼、2-2-1 或全場人盯人緊逼的進攻推進策略。',
    icon: <Zap className="w-6 h-6" />,
  },
];

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleReadMore = (e: React.MouseEvent, playName: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    // 触发 Google Ads 事件追踪
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_play_detail', {
        'play_name': playName,
        'category': 'plays'
      });
    }
    
    // 显示弹窗
    setShowModal(true);
  };

  const handleHomepagePlayClick = (e: React.MouseEvent, playName: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    // 触发 Google Ads 事件追踪（专门追踪首页的战术点击）
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'homepage_play_click', {
        'play_name': playName,
        'category': 'homepage_tactics'
      });
    }
    
    // 显示弹窗
    setShowModal(true);
  };

  const handleCoachClick = (e: React.MouseEvent, coachName: string) => {
    // 触发 Google Ads 事件追踪
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'homepage_coach_click', {
        'coach_name': coachName
      });
    }
    // 不阻止默认行为，让链接正常跳转
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* 網格背景效果 */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-8">
            {/* 主標題 */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-3 bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent leading-tight">
              香港專業籃球訓練平台
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-3 font-medium">
              Learn Basketball HK
            </p>

            {/* 副標題 */}
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              由甲一級名師及技術開發導師引路，全方位提升球技與戰術意識
            </p>
          </div>

          {/* 專業教練牆 */}
          <div className="mb-20">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1 h-8 bg-[#FF8C00] rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  全港最強人氣導師
                </h2>
              </div>
              <p className="text-slate-400 text-sm md:text-base ml-4">
                搜尋香港最具影響力的技術開發導師，助你突破球技瓶頸。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCoaches.map((coach) => (
                <div
                  key={coach.id}
                  className="group relative bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80 backdrop-blur-md rounded-xl border border-slate-700/50 hover:border-[#FF8C00]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 overflow-hidden p-6 flex flex-col"
                >
                  {/* 頭像區域 */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full bg-[#FF8C00]/20 flex items-center justify-center border-4 border-[#FF8C00]/30 shadow-xl">
                      <User className="w-12 h-12 text-[#FF8C00]/50" />
                    </div>
                    {/* 已驗證標誌 */}
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-slate-900 shadow-lg">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    {/* 經驗年數標籤 */}
                    <div className="absolute -top-2 -right-2 bg-[#FF8C00] text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <Award className="w-3 h-3" />
                      {coach.experience} 年
                    </div>
                  </div>

                  {/* 姓名 */}
                  <div className="text-center mb-3">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {coach.name}
                    </h3>
                    {coach.nameCn && (
                      <p className="text-slate-300 text-sm font-medium">
                        {coach.nameCn}
                      </p>
                    )}
                  </div>

                  {/* 資歷標籤 */}
                  <div className="flex flex-wrap gap-1.5 justify-center mb-3">
                    {coach.certifications.slice(0, 2).map((cert, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded border border-blue-500/30"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  {/* 地區 */}
                  <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs mb-4">
                    <MapPin className="w-3 h-3 text-[#FF8C00]" />
                    <span>{coach.districts[0]}</span>
                  </div>

                  {/* 查看個人檔案按鈕 */}
                  <Link
                    href="/coaches"
                    onClick={(e) => handleCoachClick(e, coach.nameCn || coach.name)}
                    className="mt-auto w-full bg-[#FF8C00]/10 hover:bg-[#FF8C00] text-[#FF8C00] hover:text-white font-medium text-sm py-2.5 rounded-lg transition-all duration-300 text-center border border-[#FF8C00]/30 hover:border-[#FF8C00] group-hover:shadow-lg group-hover:shadow-orange-500/30"
                  >
                    查看個人檔案
                  </Link>

                  {/* 懸停效果 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00]/0 to-[#FF8C00]/0 group-hover:from-[#FF8C00]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* 熱門戰術預覽 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-[#FF8C00] rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                專業戰術解析
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredTactics.map((tactic) => (
                <div
                  key={tactic.id}
                  className="group relative bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80 backdrop-blur-md rounded-xl border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 overflow-hidden p-6 flex flex-col h-full"
                >
                  {/* 圖標 */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500/20 transition-colors group-hover:scale-110 transform duration-300 mb-4">
                    {tactic.icon}
                  </div>

                  {/* 標題 */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {tactic.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3 font-medium">
                    {tactic.titleEn}
                  </p>

                  {/* 描述 */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                    {tactic.description}
                  </p>

                  {/* 閱讀詳情按鈕 */}
                  <button
                    onClick={(e) => handleHomepagePlayClick(e, tactic.title)}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium text-sm rounded-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,140,0,0.3)] cursor-pointer w-full justify-center"
                  >
                    閱讀詳情
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* 懸停效果 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 敬請期待彈窗 Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* 背景遮罩 - 磨砂玻璃效果 */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* 彈窗內容 */}
          <div 
            className="relative bg-slate-900 rounded-2xl border-2 border-[#FF8C00] shadow-2xl shadow-orange-500/20 p-8 max-w-md w-full mx-auto transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 關閉按鈕 */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
              aria-label="關閉"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 內容區域 */}
            <div className="text-center">
              {/* 籃球圖標 */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-[#FF8C00]/20 rounded-full flex items-center justify-center border-4 border-[#FF8C00]/30">
                  <span className="text-4xl">🏀</span>
                </div>
              </div>

              {/* 標題 */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent">
                內容準備中...
              </h2>

              {/* 說明文字 */}
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 px-2">
                此戰術的詳細圖解正在製作中，敬請期待！
              </p>

              {/* 我知道了按鈕 */}
              <button
                onClick={closeModal}
                className="w-full bg-gradient-to-r from-[#FF8C00] to-[#FF9500] hover:from-[#FF9500] hover:to-[#FFA500] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-orange-500/50 transform hover:scale-105"
              >
                我知道了
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
