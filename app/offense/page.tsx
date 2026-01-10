'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Zap, Flame, Sword, Target, TrendingUp, Layers, ArrowRight, PlayCircle, Move, X } from 'lucide-react';

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

interface OffenseCategory {
  id: string;
  name: string;
  href: string;
  icon: React.ReactNode;
}

const offenseCategories: OffenseCategory[] = [
  { id: '1', name: '1-4 陣式', href: '/offense/1-4', icon: <Layers className="w-4 h-4" /> },
  { id: '2', name: '動態進攻 (Motion)', href: '/offense/motion', icon: <Move className="w-4 h-4" /> },
  { id: '3', name: '普林斯頓體系', href: '/offense/princeton', icon: <Target className="w-4 h-4" /> },
  { id: '4', name: '三角進攻', href: '/offense/triangle', icon: <PlayCircle className="w-4 h-4" /> },
  { id: '5', name: '快攻策略', href: '/offense/fast-break', icon: <Zap className="w-4 h-4" /> },
];

interface OffenseCard {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const offenseCards: OffenseCard[] = [
  {
    id: '1',
    title: '1-4 高位進攻',
    titleEn: '1-4 High Offense',
    description: '主要利用高位（High Post）以及兩翼區域創造得分機會。透過大量的空切（Cuts）與掩護（Screens）來撕破防線。',
    href: '/offense/1-4-high',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: '2',
    title: '1-4 低位進攻',
    titleEn: '1-4 Low Offense',
    description: '一名球員在三分線頂端，其餘四名球員分佈在底線與低位兩側。重點在於禁區的背身單打與低位配合。',
    href: '/offense/1-4-low',
    icon: <Sword className="w-6 h-6" />,
  },
  {
    id: '3',
    title: '2外3內動態進攻',
    titleEn: '2 Out 3 In Motion',
    description: '強調球的流動、底線穿插與連續動作。透過兩名外圍球員與三名內線球員的聯動創造內外結合的得分機會。',
    href: '/offense/2-out-3-in-motion',
    icon: <Flame className="w-6 h-6" />,
  },
  {
    id: '4',
    title: '3外2內動態進攻',
    titleEn: '3 Out 2 In Motion',
    description: '以三名外圍球員為核心，專注於在外圍創造投射空間，同時配合兩名低位球員進行籃下牽制。',
    href: '/offense/3-out-2-in-motion',
    icon: <Zap className="w-6 h-6" />,
  },
];

export default function OffensePage() {
  const [showModal, setShowModal] = useState(false);

  const handleStartTactic = (e: React.MouseEvent, offenseName: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    // 触发 Google Ads 事件追踪
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_offense_start', {
        'offense_name': offenseName,
        'category': 'offense'
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
      window.gtag('event', 'click_offense_sidebar', {
        'link_name': linkName,
        'category': 'offense_navigation'
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
              <span className="text-slate-300 font-medium">進攻體系</span>
            </nav>

            {/* Hero Section */}
            <div className="mb-10">
              {/* 標題 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent leading-tight">
                進攻體系
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-2 font-medium">
                Offensive Systems
              </p>
              {/* 副標題 */}
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mb-6">
                探索多樣化的進攻策略，從高位陣式到動態進攻，全面提升球隊的得分效率。
              </p>

              {/* 標籤 */}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-slate-900 border border-[#FF8C00]/30 rounded-full text-sm font-medium text-[#FF8C00]">
                  類型：陣地戰/動態
                </span>
                <span className="px-4 py-2 bg-slate-900 border border-[#FF8C00]/30 rounded-full text-sm font-medium text-[#FF8C00]">
                  重點：空間與轉身
                </span>
              </div>
            </div>

            {/* 進攻列表 */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-[#FF8C00] rounded-full"></div>
                進攻策略
              </h2>
              
              <div className="grid gap-6">
                {offenseCards.map((card) => (
                  <div
                    key={card.id}
                    className="group relative bg-slate-900/60 rounded-xl border border-[#FF8C00]/30 p-6 hover:border-[#FF8C00]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,140,0,0.25)] overflow-hidden"
                  >
                    <div className="flex items-start gap-4">
                      {/* 左側圖標 - 進攻感設計（橙色漸變邊框） */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF8C00]/20 to-[#FFA500]/10 border border-[#FF8C00]/40 flex items-center justify-center text-[#FF8C00] group-hover:bg-gradient-to-br group-hover:from-[#FF8C00]/30 group-hover:to-[#FFA500]/20 transition-all group-hover:scale-110 group-hover:border-[#FF8C00]/60 transform duration-300 group-hover:shadow-[0_0_15px_rgba(255,140,0,0.4)]">
                        {card.icon}
                      </div>
                      
                      {/* 內容區域 */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF8C00] transition-colors">
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
                            onClick={(e) => handleStartTactic(e, card.title)}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF8C00] hover:bg-[#FF9500] text-white font-medium text-sm rounded-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,140,0,0.5)] group-hover:scale-105 cursor-pointer"
                          >
                            啟動戰術
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* 懸停效果 - 橙色光暈 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C00]/0 via-[#FF8C00]/0 to-[#FF8C00]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    
                    {/* 進攻火力裝飾效果 */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF8C00]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                  進攻類別導航
                </h2>
                
                <div className="space-y-2">
                  {offenseCategories.map((category) => {
                    const isActive = false; // 列表頁面沒有激活狀態
                    return (
                      <button
                        key={category.id}
                        onClick={(e) => handleSidebarClick(e, category.name)}
                        className={`
                          w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-all duration-200 text-left cursor-pointer
                          ${
                            isActive
                              ? 'bg-[#FF8C00]/20 text-[#FF8C00] font-medium border border-[#FF8C00]/40 shadow-[0_0_15px_rgba(255,140,0,0.2)]'
                              : 'text-slate-400 hover:bg-slate-800 hover:text-[#FF8C00] border border-transparent hover:border-[#FF8C00]/20'
                          }
                        `}
                      >
                        <div className={isActive ? 'text-[#FF8C00]' : 'text-slate-500'}>
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
                        href="/defense"
                        className="text-slate-400 hover:text-[#FF8C00] transition-colors flex items-center gap-1"
                      >
                        <Target className="w-3 h-3" />
                        防守策略
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/plays"
                        className="text-slate-400 hover:text-[#FF8C00] transition-colors flex items-center gap-1"
                      >
                        <PlayCircle className="w-3 h-3" />
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
              {/* 籃球圖標 */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-[#FF8C00]/20 rounded-full flex items-center justify-center border-4 border-[#FF8C00]/30">
                  <span className="text-4xl">🏀</span>
                </div>
              </div>

              {/* 標題 */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent">
                戰術詳解製作中...
              </h2>

              {/* 說明文字 */}
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 px-2">
                此系列戰術正在整理中，敬請期待更深入的體系拆解。
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
