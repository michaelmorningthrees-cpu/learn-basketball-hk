'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Lock, Target, Users, Layers, Zap, ArrowRight, TrendingUp, X } from 'lucide-react';

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

interface DefenseCategory {
  id: string;
  name: string;
  href: string;
  icon: React.ReactNode;
}

const defenseCategories: DefenseCategory[] = [
  { id: '1', name: '人盯人防守', href: '/defense/man-to-man', icon: <Users className="w-4 h-4" /> },
  { id: '2', name: '區域防守', href: '/defense/zone', icon: <Layers className="w-4 h-4" /> },
  { id: '3', name: '全場緊逼', href: '/defense/full-court-press', icon: <Zap className="w-4 h-4" /> },
  { id: '4', name: '陷阱防守', href: '/defense/trap', icon: <Target className="w-4 h-4" /> },
  { id: '5', name: '防守轉攻', href: '/defense/transition', icon: <ArrowRight className="w-4 h-4" /> },
];

interface DefenseCard {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const defenseCards: DefenseCard[] = [
  {
    id: '1',
    title: '1-1-2-1 緊逼防守',
    titleEn: '1-1-2-1 Press Defense',
    description: '強調在底角附近進行防守壓迫與陷阱圍堵，旨在造成對手失誤並干擾其進攻節奏。',
    href: '/defense/1-1-2-1-press',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    id: '2',
    title: '1-1-3 緊逼防守',
    titleEn: '1-1-3 Press Defense',
    description: '利用持球壓力與邊線陷阱來擾亂對手的進攻流動，限制其得分機會並製造轉守為攻的時機。',
    href: '/defense/1-1-3-press',
    icon: <Lock className="w-6 h-6" />,
  },
  {
    id: '3',
    title: '1-1-3 區域防守',
    titleEn: '1-1-3 Zone Defense',
    description: '一種旨在防止對手在高質量區域得分的策略，特別是保護禁區，透過持球與無球的聯動防守達成目標。',
    href: '/defense/1-1-3-zone',
    icon: <Target className="w-6 h-6" />,
  },
];

export default function DefensePage() {
  const [showModal, setShowModal] = useState(false);
  const [clickedCategory, setClickedCategory] = useState<string | null>(null);

  const handleBreakDefense = (e: React.MouseEvent, defenseName: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    // 触发 Google Ads 事件追踪
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_defense_breakdown', {
        'defense_name': defenseName,
        'category': 'defense'
      });
    }
    
    // 显示弹窗
    setShowModal(true);
  };

  const handleSidebarClick = (e: React.MouseEvent, linkName: string, categoryId: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    // 触发 Google Ads 事件追踪
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_defense_sidebar', {
        'link_name': linkName,
        'category': 'defense_navigation'
      });
    }
    
    // 点击反馈效果
    setClickedCategory(categoryId);
    setTimeout(() => setClickedCategory(null), 200); // 重置點擊狀態
    
    // 显示弹窗
    setShowModal(true);
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

      <div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
        {/* 雙欄佈局 - 比例調整為 4:1 */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 左側主欄 - 80% (4/5) */}
          <div className="lg:w-4/5">
            {/* 麵包屑導航 */}
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-[#FF8C00] transition-colors">
                首頁
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-300 font-medium">防守體系</span>
            </nav>

            {/* Hero Section */}
            <div className="mb-10">
              {/* 標題 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent leading-tight">
                防守體系
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-2 font-medium">
                Defense System
              </p>
              {/* 副標題 */}
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mb-6">
                本頁面涵蓋了多種專業籃球防守策略，從全場緊逼到區域防守，助你打造最強防線。
              </p>

              {/* 標籤 */}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-slate-900 border border-[#FF8C00]/30 rounded-full text-sm font-medium text-[#FF8C00]">
                  類型：全場/半場
                </span>
                <span className="px-4 py-2 bg-slate-900 border border-[#FF8C00]/30 rounded-full text-sm font-medium text-[#FF8C00]">
                  重點：壓迫與陷阱
                </span>
              </div>
            </div>

            {/* 防守列表 */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-[#FF8C00] rounded-full"></div>
                防守策略
              </h2>
              
              <div className="grid gap-6">
                {defenseCards.map((card) => (
                  <div
                    key={card.id}
                    className="group relative bg-slate-900/60 rounded-xl border border-cyan-500/30 p-6 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] overflow-hidden"
                  >
                    <div className="flex items-start gap-4">
                      {/* 左側圖標 - 盾牌感設計 */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors group-hover:scale-110 transform duration-300">
                        {card.icon}
                      </div>
                      
                      {/* 內容區域 */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-slate-400 text-sm mb-2 font-medium">
                          {card.titleEn}
                        </p>
                        <p className="text-slate-300 leading-relaxed mb-4">
                          {card.description}
                        </p>
                        
                        {/* 右下角按鈕 - 橙色按鈕 */}
                        <div className="flex justify-end">
                          <button
                            onClick={(e) => handleBreakDefense(e, card.title)}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF8C00] hover:bg-[#FF9500] active:bg-[#FF8500] text-white font-medium text-sm rounded-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,140,0,0.4)] cursor-pointer active:scale-95"
                          >
                            解構防線
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* 懸停效果 - 青藍色光暈 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    
                    {/* 防護盾牌裝飾效果 */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右側側邊欄 - 20% (1/5) */}
          <div className="lg:w-1/5">
            <div className="sticky top-24">
              <div className="bg-slate-900 rounded-xl border border-slate-800 p-4">
                <h2 className="text-lg font-bold text-white mb-4 pb-3 border-b border-slate-800">
                  防守類別導航
                </h2>
                
                <div className="space-y-2">
                  {defenseCategories.map((category) => {
                    const isActive = false; // 列表頁面沒有激活狀態
                    const isClicked = clickedCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={(e) => handleSidebarClick(e, category.name, category.id)}
                        className={`
                          w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-all duration-200 text-left cursor-pointer
                          ${
                            isActive
                              ? 'bg-[#FF8C00]/20 text-[#FF8C00] font-medium border border-[#FF8C00]/40 shadow-[0_0_15px_rgba(255,140,0,0.2)]'
                              : isClicked
                              ? 'bg-[#FF8C00]/15 text-[#FF8C00] border border-[#FF8C00]/30'
                              : 'text-slate-400 hover:bg-slate-800 hover:text-[#FF8C00] border border-transparent hover:border-[#FF8C00]/20 active:bg-[#FF8C00]/10 active:text-[#FF8C00]'
                          }
                        `}
                      >
                        <div className={isActive || isClicked ? 'text-[#FF8C00]' : 'text-slate-500'}>
                          {category.icon}
                        </div>
                        <span className="flex-1">{category.name}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800">
                  <h3 className="text-sm font-semibold text-white mb-3">相關資源</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/offense"
                        className="text-slate-400 hover:text-[#FF8C00] transition-colors flex items-center gap-1"
                      >
                        <TrendingUp className="w-3 h-3" />
                        進攻技巧
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/plays"
                        className="text-slate-400 hover:text-[#FF8C00] transition-colors flex items-center gap-1"
                      >
                        <Target className="w-3 h-3" />
                        戰術圖解
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/coaches"
                        className="text-slate-400 hover:text-[#FF8C00] transition-colors flex items-center gap-1"
                      >
                        <TrendingUp className="w-3 h-3" />
                        找專業教練
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              {/* 防守圖標 - 使用 ShieldCheck */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-[#FF8C00]/20 rounded-full flex items-center justify-center border-4 border-[#FF8C00]/30">
                  <ShieldCheck className="w-10 h-10 text-[#FF8C00]" />
                </div>
              </div>

              {/* 標題 */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent">
                解構防線製作中...
              </h2>

              {/* 說明文字 */}
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 px-2">
                此防守陣型的站位要求與輪轉細節正在製作中，敬請期待！
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
