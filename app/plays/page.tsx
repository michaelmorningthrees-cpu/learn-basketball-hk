'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Zap, Target, TrendingUp, Box, ArrowLeftRight, Check, PlayCircle, Layout, ArrowRight, Move, Repeat, X } from 'lucide-react';

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

interface TacticItem {
  id: string;
  name: string;
  href: string;
  icon: React.ReactNode;
}

const tacticCategories: TacticItem[] = [
  { id: '1', name: '1-3-1 區域進攻', href: '/plays/1-3-1-zone-offense', icon: <Layout className="w-4 h-4" /> },
  { id: '2', name: '1-4 高位擋拆', href: '/plays/1-4-high-pick-roll', icon: <TrendingUp className="w-4 h-4" /> },
  { id: '3', name: '1-4 破緊逼', href: '/plays/1-4-press-break', icon: <Zap className="w-4 h-4" /> },
  { id: '4', name: '箱型進攻', href: '/plays/box-offense', icon: <Box className="w-4 h-4" /> },
  { id: '5', name: '動態進攻', href: '/plays/motion-offense', icon: <Move className="w-4 h-4" /> },
  { id: '6', name: '連續進攻', href: '/plays/continuity-offense', icon: <Repeat className="w-4 h-4" /> },
];

interface TacticCard {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  difficulty: '初級' | '中級' | '高級';
}

const tacticCards: TacticCard[] = [
  {
    id: '1',
    title: '1-3-1 區域進攻戰術',
    titleEn: '1-3-1 Zone Offense Plays',
    description: '設計用於針對 1-3-1 區域防守創造得分機會的各種戰術配合與球員跑位策略。',
    href: '/plays/1-3-1-zone-offense',
    icon: <Layout className="w-6 h-6" />,
    difficulty: '中級',
  },
  {
    id: '2',
    title: '1-4 高位擋拆戰術',
    titleEn: '1-4 High Pick and Roll Plays',
    description: '在 1-4 陣式中，利用高位擋拆（Pick and Roll）在弧頂創造空間，針對籃框或外圍投射進行進攻。',
    href: '/plays/1-4-high-pick-roll',
    icon: <PlayCircle className="w-6 h-6" />,
    difficulty: '初級',
  },
  {
    id: '3',
    title: '1-4 破緊逼戰術',
    titleEn: '1-4 Press Break Plays',
    description: '專門應對 1-2-1-1 菱形緊逼、2-2-1 或全場人盯人緊逼的進攻推進策略。',
    href: '/plays/1-4-press-break',
    icon: <Zap className="w-6 h-6" />,
    difficulty: '中級',
  },
  {
    id: '4',
    title: '箱型進攻戰術',
    titleEn: 'Box Offense Plays',
    description: '利用底線四點定位，透過多重掩護創造內線得分或外圍投射機會。',
    href: '/plays/box-offense',
    icon: <Box className="w-6 h-6" />,
    difficulty: '中級',
  },
  {
    id: '5',
    title: '動態進攻戰術',
    titleEn: 'Motion Offense Plays',
    description: '強調球員間的默契與連續跑動，不依賴固定套路，而是根據防守反應進行切入與傳導。',
    href: '/plays/motion-offense',
    icon: <Move className="w-6 h-6" />,
    difficulty: '高級',
  },
  {
    id: '6',
    title: '連續進攻戰術',
    titleEn: 'Continuity Offense Plays',
    description: '設計一套可以循環執行的動作，持續給予防守壓力直到出現空位。',
    href: '/plays/continuity-offense',
    icon: <Repeat className="w-6 h-6" />,
    difficulty: '高級',
  },
];

export default function PlaysPage() {
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

  const handleSidebarClick = (e: React.MouseEvent, linkName: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    // 触发 Google Ads 事件追踪
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_plays_sidebar', {
        'link_name': linkName,
        'category': 'plays_navigation'
      });
    }
    
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
              <span className="text-slate-300 font-medium">戰術圖解</span>
            </nav>

            {/* Hero Section */}
            <div className="mb-10">
              {/* 標題 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent leading-tight">
                戰術圖解
              </h1>
              {/* 導讀文字 */}
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mb-4">
                本目錄收錄了各類基於不同進攻策略與戰略目標的籃球戰術。無論是應對區域防守、人盯人，還是特定的發球情境，你都能在這裡找到詳細的圖解與執行細節。
              </p>
            </div>

            {/* 戰術列表 */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-[#FF8C00] rounded-full"></div>
                戰術列表
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tacticCards.map((card) => {
                  const difficultyColors = {
                    '初級': 'bg-green-500/20 text-green-400 border-green-500/40',
                    '中級': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40',
                    '高級': 'bg-red-500/20 text-red-400 border-red-500/40',
                  };
                  
                  return (
                    <div
                      key={card.id}
                      className="group relative bg-slate-900/60 rounded-xl border border-orange-500/30 p-6 hover:border-orange-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,140,0,0.15)] overflow-hidden h-full flex flex-col"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        {/* 左側圖標 */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500/20 transition-colors group-hover:scale-110 transform duration-300">
                          {card.icon}
                        </div>
                        
                        {/* 內容區域 */}
                        <div className="flex-1 min-w-0 flex flex-col">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors flex-1">
                              {card.title}
                            </h3>
                            {/* 難度標籤 */}
                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${difficultyColors[card.difficulty]} flex-shrink-0`}>
                              {card.difficulty}
                            </span>
                          </div>
                          <p className="text-slate-400 text-sm mb-2 font-medium">
                            {card.titleEn}
                          </p>
                          <p className="text-slate-300 leading-relaxed mb-4 flex-1">
                            {card.description}
                          </p>
                          
                          {/* 右下角按鈕 - 橙色空心按鈕 */}
                          <div className="flex justify-end mt-auto">
                            <button
                              onClick={(e) => handleReadMore(e, card.title)}
                              className="inline-flex items-center gap-2 px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium text-sm rounded-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,140,0,0.3)] cursor-pointer"
                            >
                              閱讀詳情
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* 懸停效果 */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      
                      {/* 裝飾效果 */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 右側側邊欄 - 20% (1/5) */}
          <div className="lg:w-1/5">
            <div className="sticky top-24">
              <div className="bg-slate-900 rounded-xl border border-slate-800 p-4">
                <h2 className="text-lg font-bold text-white mb-4 pb-3 border-b border-slate-800">
                  戰術分類
                </h2>
                
                <div className="space-y-2">
                  {tacticCategories.map((tactic) => {
                    // 檢查是否有對應的卡片
                    const hasCard = tacticCards.some(card => card.href === tactic.href);
                    const isActive = false; // 列表頁面沒有激活狀態
                    
                    return (
                      <button
                        key={tactic.id}
                        onClick={(e) => handleSidebarClick(e, tactic.name)}
                        className={`
                          w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-all duration-200 text-left cursor-pointer
                          ${
                            isActive
                              ? 'bg-[#FF8C00]/20 text-[#FF8C00] font-medium border border-[#FF8C00]/40 shadow-[0_0_15px_rgba(255,140,0,0.2)]'
                              : hasCard
                              ? 'text-slate-400 hover:bg-slate-800 hover:text-[#FF8C00] border border-transparent hover:border-[#FF8C00]/20'
                              : 'text-slate-500 hover:bg-slate-800 hover:text-slate-400 border border-transparent hover:border-slate-700/50 opacity-60'
                          }
                        `}
                      >
                        <div className={isActive ? 'text-[#FF8C00]' : hasCard ? 'text-slate-500' : 'text-slate-600'}>
                          {tactic.icon}
                        </div>
                        <span className="flex-1">{tactic.name}</span>
                        {hasCard && (
                          <Check className="w-3 h-3 text-green-400" />
                        )}
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
                        <ArrowLeftRight className="w-3 h-3" />
                        進攻技巧
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/defense"
                        className="text-slate-400 hover:text-[#FF8C00] transition-colors flex items-center gap-1"
                      >
                        <Target className="w-3 h-3" />
                        防守策略
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
