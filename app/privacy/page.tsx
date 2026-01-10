import Link from 'next/link';
import { ArrowLeft, Shield, Lock } from 'lucide-react';

export const metadata = {
  title: '私隱政策 | Learn Basketball HK',
  description: 'Learn Basketball HK 私隱政策 - 了解我們如何收集、使用和保護您的個人資料',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-[#FF8C00] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">返回首頁</span>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#FF8C00]/20 flex items-center justify-center border-2 border-[#FF8C00]">
              <Shield className="w-6 h-6 text-[#FF8C00]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent">
              私隱政策
            </h1>
          </div>
          <p className="text-slate-400 text-sm md:text-base">
            Privacy Policy - Last Updated: 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-700/50 p-6 md:p-8 space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              Learn Basketball HK（以下簡稱「本站」）重視用戶的私隱權。本私隱政策說明我們如何收集、使用、儲存和保護您的個人資料。使用本站即表示您同意本私隱政策的所有條款。
            </p>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                1. 資料收集
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                我們尊重用戶私隱。本站目前僅在以下情況下收集基本聯絡資料：
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 leading-relaxed ml-4">
                <li>
                  <strong className="text-slate-200">主動聯絡：</strong>
                  當您透過電郵主動聯絡我們時，我們會收集您提供的姓名、電郵地址及訊息內容。
                </li>
                <li>
                  <strong className="text-slate-200">技術資料：</strong>
                  為改善網站體驗，我們可能會自動收集匿名技術資料，如瀏覽器類型、裝置資訊、IP 地址（已匿名化）及使用統計。
                </li>
              </ul>
              <p className="text-slate-300 leading-relaxed mt-4">
                本站不會要求或收集敏感個人資料（如身份證號碼、信用卡資訊、健康記錄等），除非法律明確要求。
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                2. 資料使用目的
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                我們收集的資料僅用於以下合法目的：
              </p>
              <ol className="list-decimal list-inside space-y-2 text-slate-300 leading-relaxed ml-4">
                <li>回覆您的查詢、意見或建議</li>
                <li>改善網站功能、內容及用戶體驗</li>
                <li>遵守適用的法律法規及執法要求</li>
                <li>防止欺詐、濫用或非法活動</li>
              </ol>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                3. 資料保護與保密
              </h2>
              <p className="text-slate-300 leading-relaxed">
                我們承諾採取合理的技術及行政措施保護您的個人資料，防止未經授權的存取、使用、披露或破壞。除非符合以下情況，否則我們不會向第三方洩露您的個人電郵或聯絡資訊：
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 leading-relaxed ml-4 mt-4">
                <li>
                  <strong className="text-slate-200">法律要求：</strong>
                  根據適用的法律、法規、法院命令或政府機關的合法要求
                </li>
                <li>
                  <strong className="text-slate-200">同意授權：</strong>
                  獲得您明確、自願的同意
                </li>
                <li>
                  <strong className="text-slate-200">保護權益：</strong>
                  為保護本站、用戶或公眾的權利、財產或安全
                </li>
              </ul>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                4. 第三方網站連結
              </h2>
              <p className="text-slate-300 leading-relaxed">
                本站包含指向第三方網站、社交媒體平台（如 Instagram、Facebook、YouTube）或其他外部資源的連結。這些外部網站有其獨立的私隱政策及資料處理方式。
              </p>
              <p className="text-slate-300 leading-relaxed mt-4 font-semibold">
                本站對這些外部網站的私隱政策、資料收集方式、Cookie 使用或任何行為概不負責。建議您在訪問這些外部網站前，仔細閱讀其私隱政策。
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                5. Cookie 與追蹤技術
              </h2>
              <p className="text-slate-300 leading-relaxed">
                本站可能使用 Cookie 及類似追蹤技術來改善用戶體驗、分析網站流量及提供個人化內容。您可以透過瀏覽器設定選擇拒絕或刪除 Cookie，但這可能會影響某些網站功能的正常運作。
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                6. 您的權利
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                根據適用的私隱法規，您對個人資料享有以下權利：
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 leading-relaxed ml-4">
                <li>查閱權：要求查閱我們持有的您的個人資料</li>
                <li>更正權：要求更正不準確或不完整的個人資料</li>
                <li>刪除權：要求刪除您的個人資料（在法律允許的情況下）</li>
                <li>撤回同意權：撤回您之前給予的同意</li>
              </ul>
              <p className="text-slate-300 leading-relaxed mt-4">
                如需行使上述權利，請透過電郵聯絡我們。
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                7. 政策更新
              </h2>
              <p className="text-slate-300 leading-relaxed">
                本站保留隨時修改、更新或補充本私隱政策的權利。重大變更將在本頁面公布，並更新「Last Updated」日期。繼續使用本站即表示您接受更新後的私隱政策。
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-slate-700/50">
              <p className="text-slate-400 text-sm">
                如有任何私隱相關疑問或需要行使您的權利，請透過{' '}
                <a
                  href="mailto:michaelmorningthrees@gmail.com"
                  className="text-[#FF8C00] hover:text-[#FFA500] transition-colors"
                >
                  michaelmorningthrees@gmail.com
                </a>{' '}
                聯絡我們。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
