'use client';

import { useState } from 'react';
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Globe, 
  Award,
  User,
  MapPin,
  CheckCircle2,
  Plus
} from 'lucide-react';

interface Coach {
  id: string;
  name: string;
  nameCn?: string; // 中文名稱（可選）
  experience: number; // years
  bio: string;
  expertise: string[];
  districts: string[]; // 服務地區
  certifications: string[]; // 認證資歷
  ig?: string;
  facebook?: string;
  youtube?: string;
  website?: string;
  whatsapp: string;
}

const coaches: Coach[] = [
  {
    id: '1',
    name: 'Coach Fui',
    experience: 15,
    bio: '前香港男子籃球代表隊隊員，2007年香港甲一組得分王。現為專業「球員技術開發教練」，專職改善及加強個人技術，透過小班教育，令球員改善基本技術及核心力量動作。',
    expertise: ['個人技術', '球員開發', '核心力量', '得分技巧'],
    districts: ['全港', '九龍區'],
    certifications: ['前香港代表隊', '甲一得分王', '技術開發教練'],
    ig: 'https://instagram.com/coachfui',
    facebook: 'https://facebook.com/coachfuihk',
    youtube: 'https://www.youtube.com/@coachfui',
    whatsapp: '85291234567'
  },
  {
    id: '2',
    name: 'KingCivilian (平民王)',
    nameCn: '劉振星',
    experience: 8,
    bio: 'FIBA 3x3 香港代表隊成員，知名籃球訓練師。以強悍的實戰進攻技術聞名，曾獲 UBK 全國賽亞軍及多項「路人王」冠軍獎項。致力於將實戰對抗與現代籃球技術結合。',
    expertise: ['3x3 戰術', '個人實戰技術', '進攻對抗', '街頭籃球'],
    districts: ['全港', '戶外球場'],
    certifications: ['FIBA 3x3 香港代表', '籃球訓練師', '路人王城市賽冠軍'],
    ig: 'https://instagram.com/kingcivilian',
    facebook: 'https://facebook.com/KingCivilian',
    whatsapp: '85290000000'
  },
  {
    id: '3',
    name: 'Kalik (@kalikbball)',
    nameCn: '嘉力',
    experience: 5,
    bio: '專注於射波技術開發與籃球生活分享。提供專業 1對1 訓練及線上指導，擅長透過獨特的「重波訓練」幫助球員優化射波手感、手指細節與 Step In 節奏感。「You define yourself. Own your beauty.」',
    expertise: ['射波教學', '1對1 訓練', '節奏優化', '線上指導'],
    districts: ['全港', '線上指導'],
    certifications: ['籃球訓練師', '射波技術專家', '線上籃球導師'],
    ig: 'https://instagram.com/kalikbball',
    facebook: 'https://facebook.com/kalikbball',
    youtube: 'https://www.youtube.com/@kalikbball',
    whatsapp: '85290000000'
  },
  {
    id: '4',
    name: 'totobball',
    nameCn: '滔滔',
    experience: 5,
    bio: '「一邊教人打波，一邊幫人排憂解困。」滔滔主張比起籃球技術，他更在意學員的人生。他提供任何水平的籃球訓練，擅長在訓練中融入人生哲學，透過獨特的教學視角（如 9HEA 系列）與學員建立深層連結，幫助球員在球場與生活中同時進步。',
    expertise: ['任何水平訓練', '實戰技術', '心靈指導', '9HEA 系列'],
    districts: ['全港 (Outdoor/Private)'],
    certifications: ['籃球教育工作者', '9HEA 創辦人', '資深內容創作者'],
    ig: 'https://instagram.com/totobball',
    facebook: 'https://facebook.com/totobball',
    whatsapp: '85290000000'
  }
];

export default function CoachesPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('全部');

  const filters = ['全部', '個人技術', '青少年培訓', '體能訓練'];
  
  // 篩選邏輯（視覺佔位，暫時不過濾）
  const filteredCoaches = coaches;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Page Header */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent mb-2">
                🏀 專業教練目錄
              </h1>
              <p className="text-slate-400 text-sm md:text-base">
                尋找最適合你的籃球教練
              </p>
            </div>
            {/* 教練加盟 CTA 按鈕 */}
            <a
              href="mailto:michaelmorningthrees@gmail.com?subject=教練加盟申請 - LearnBasketballHK"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF8C00] to-[#FF9500] hover:from-[#FF9500] hover:to-[#FFA500] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-orange-500/50 whitespace-nowrap"
            >
              <Plus className="w-5 h-5" />
              教練加盟 / 刊登資料
            </a>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedFilter === filter
                  ? 'bg-[#FF8C00] text-white shadow-lg shadow-orange-500/30'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50'
              }`}
            >
              {filter}
            </button>
          ))}
          </div>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {filteredCoaches.map((coach) => (
            <div
              key={coach.id}
              className="relative bg-gradient-to-br from-slate-800/70 via-slate-800/60 to-slate-900/70 backdrop-blur-md rounded-xl border border-slate-700/50 hover:border-[#FF8C00]/50 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group flex flex-col"
            >
              {/* Avatar Section */}
              <div className="relative w-full h-64 bg-gradient-to-br from-slate-700/50 to-slate-800/50 overflow-hidden flex items-center justify-center">
                {/* 圓形頭像框 */}
                <div className="relative w-32 h-32">
                  <div className="w-32 h-32 rounded-full bg-[#FF8C00]/20 flex items-center justify-center border-4 border-[#FF8C00]/30 shadow-xl">
                    <User className="w-16 h-16 text-[#FF8C00]/50" />
                  </div>
                  {/* 已驗證標誌 */}
                  <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-slate-900 shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>
                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-[#FF8C00] text-white text-sm font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                  <Award className="w-4 h-4" />
                  {coach.experience} 年
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Name and District */}
                <div className="mb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-2xl font-bold text-white">{coach.name}</h3>
                  </div>
                  {/* 中文名稱（如果存在） */}
                  {coach.nameCn && (
                    <p className="text-slate-300 text-sm mb-1.5 font-medium">
                      {coach.nameCn}
                    </p>
                  )}
                  {/* 地區標籤 */}
                  <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-2">
                    <MapPin className="w-4 h-4 text-[#FF8C00]" />
                    <span>{coach.districts.join('、')}</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                  {coach.bio}
                </p>

                {/* Certifications */}
                {coach.certifications && coach.certifications.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs text-slate-500 mb-1.5 font-medium">認證資歷</p>
                    <div className="flex flex-wrap gap-1.5">
                      {coach.certifications.map((cert, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded border border-blue-500/30"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {coach.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs font-medium rounded-full border border-slate-600/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center gap-3 mt-auto pt-2">
                  {coach.ig && (
                    <a
                      href={coach.ig}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-purple-500/50"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4 text-white" />
                    </a>
                  )}
                  {coach.facebook && (
                    <a
                      href={coach.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-blue-500/50"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4 text-white" />
                    </a>
                  )}
                  {coach.youtube && (
                    <a
                      href={coach.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 bg-[#FF0000] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-red-500/50"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-4 h-4 text-white" />
                    </a>
                  )}
                  {coach.website && (
                    <a
                      href={coach.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-9 h-9 bg-slate-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-slate-500/50"
                      aria-label="Website"
                    >
                      <Globe className="w-4 h-4 text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00]/0 to-[#FF8C00]/0 group-hover:from-[#FF8C00]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              想成為我們的教練？
            </h2>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              如果你是一位專業的籃球教練，歡迎加入我們的平台，讓更多學員認識你！
            </p>
            <a
              href="mailto:michaelmorningthrees@gmail.com?subject=教練加盟申請 - LearnBasketballHK"
              className="inline-flex items-center gap-2 bg-[#FF8C00] hover:bg-[#FF9500] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-orange-500/50"
            >
              聯絡我們
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}