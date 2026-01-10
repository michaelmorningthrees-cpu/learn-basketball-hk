import Link from 'next/link';
import { ArrowLeft, FileText, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: '免責聲明 | Learn Basketball HK',
  description: 'Learn Basketball HK 免責聲明 - 使用本平台時的責任與風險聲明',
};

export default function DisclaimerPage() {
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
              <AlertTriangle className="w-6 h-6 text-[#FF8C00]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent">
              免責聲明
            </h1>
          </div>
          <p className="text-slate-400 text-sm md:text-base">
            Disclaimer - Last Updated: 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-700/50 p-6 md:p-8 space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              歡迎使用 Learn Basketball HK（以下簡稱「本站」）。在使用本站提供的服務前，請仔細閱讀以下免責聲明。使用本站即表示您已理解並同意本免責聲明的所有條款。
            </p>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                1. 內容資訊準確性
              </h2>
              <p className="text-slate-300 leading-relaxed">
                本站僅提供籃球技術資訊及教練資訊分享，包括但不限於戰術圖解、訓練方法、技術分析等內容。我們致力於提供準確、有價值的資訊，但並不保證內容的絕對準確性、完整性或適用性。所有內容僅供參考，用戶應自行判斷資訊的適用性。
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                2. 運動風險與安全責任
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                籃球是一項具備體力消耗及受傷風險的運動。用戶在嘗試任何戰術、訓練動作、體能練習或技術訓練前，應：
              </p>
              <ol className="list-decimal list-inside space-y-2 text-slate-300 leading-relaxed ml-4">
                <li>充分評估個人身體狀況、健康狀態及體能水平</li>
                <li>諮詢專業醫療人員或教練意見，特別是如有舊患、慢性疾病或其他健康問題</li>
                <li>在安全、適當的場地進行練習，並確保有足夠的保護裝備</li>
                <li>循序漸進，避免過度訓練或不當動作</li>
              </ol>
              <p className="text-slate-300 leading-relaxed mt-4 font-semibold">
                本站對因模仿、嘗試或應用本站內容而導致的任何意外、受傷、財產損失或法律責任概不負責。用戶需自行承擔所有相關風險。
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                3. 教練資訊與第三方關係
              </h2>
              <p className="text-slate-300 leading-relaxed">
                本站提供教練目錄資訊僅供參考，旨在協助用戶尋找合適的籃球教練。本站與名單中的教練並無直接僱傭關係、合約關係或業務合作關係。本站不對教練的專業資歷、教學質素、服務內容或收費標準作任何保證或推薦。
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                學員與教練之間的私人交易、服務協議、付款安排或任何糾紛，均屬雙方之間的直接關係，與本站無關。本站恕不介入、不承擔任何責任，亦不提供任何形式的擔保或調解服務。
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                4. 外部連結與第三方內容
              </h2>
              <p className="text-slate-300 leading-relaxed">
                本站可能包含指向第三方網站、社交媒體平台（如 Instagram、Facebook、YouTube）或其他外部資源的連結。這些連結僅為方便用戶而提供，本站不對這些外部網站的內容、私隱政策、服務條款或任何行為負責。
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                5. 免責範圍
              </h2>
              <p className="text-slate-300 leading-relaxed">
                在法律允許的最大範圍內，本站及其營運者、員工、合作伙伴對以下情況不承擔任何責任：
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 leading-relaxed ml-4 mt-4">
                <li>因使用或無法使用本站服務而導致的直接、間接、偶然、特殊或後續損失</li>
                <li>因網站技術故障、維護、中斷或資料損失而造成的任何不便或損失</li>
                <li>因用戶違反本免責聲明或相關法律法規而導致的任何後果</li>
              </ul>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                6. 聲明更新
              </h2>
              <p className="text-slate-300 leading-relaxed">
                本站保留隨時修改、更新或補充本免責聲明的權利，恕不另行通知。用戶應定期查閱本頁面，以了解最新版本。繼續使用本站即表示您接受更新後的免責聲明。
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-slate-700/50">
              <p className="text-slate-400 text-sm">
                如有任何疑問，請透過{' '}
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
