import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata = {
  title: '服務條款 | Learn Basketball HK',
  description: 'Learn Basketball HK 服務條款 - 使用本平台的條款與條件',
};

export default function TermsPage() {
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
              <FileText className="w-6 h-6 text-[#FF8C00]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF8C00] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent">
              服務條款
            </h1>
          </div>
          <p className="text-slate-400 text-sm md:text-base">
            Terms of Service - Last Updated: 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-700/50 p-6 md:p-8 space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              歡迎使用 Learn Basketball HK（以下簡稱「本站」）。使用本站提供的服務前，請仔細閱讀以下服務條款。使用本站即表示您已理解、同意並願意遵守本服務條款的所有規定。
            </p>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                1. 服務說明
              </h2>
              <p className="text-slate-300 leading-relaxed">
                本站是一個提供籃球技術資訊、戰術圖解、訓練方法及教練目錄的資訊平台。我們致力於為香港籃球愛好者提供專業、實用的學習資源。
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                2. 使用許可與限制
              </h2>
              <h3 className="text-lg font-semibold text-slate-200 mt-4 mb-2">
                2.1 個人學習使用
              </h3>
              <p className="text-slate-300 leading-relaxed">
                用戶僅限於將本站內容用於個人學習、非商業性教育或個人訓練目的。您可以瀏覽、閱讀、下載及分享本站的公開內容，前提是必須遵守本服務條款。
              </p>
              
              <h3 className="text-lg font-semibold text-slate-200 mt-4 mb-2">
                2.2 商業使用限制
              </h3>
              <p className="text-slate-300 leading-relaxed">
                未經本站書面許可，用戶不得將本站的戰術圖解、教學文字、圖片、影片或其他內容用於以下商業目的：
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 leading-relaxed ml-4 mt-4">
                <li>複製、重製、改編或重新發布內容以進行商業營利</li>
                <li>將內容納入收費課程、訓練計劃或商業產品</li>
                <li>以本站內容為基礎開發商業應用程式或服務</li>
                <li>任何其他未經授權的商業利用行為</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-slate-200 mt-4 mb-2">
                2.3 知識產權
              </h3>
              <p className="text-slate-300 leading-relaxed">
                本站所有內容，包括但不限於文字、圖片、圖表、影片、標誌、設計等，均受版權、商標或其他知識產權法保護。未經許可的使用可能構成侵權行為。
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                3. 用戶行為規範
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                使用本站時，用戶必須遵守以下行為規範，不得從事以下行為：
              </p>
              <ol className="list-decimal list-inside space-y-2 text-slate-300 leading-relaxed ml-4">
                <li>
                  <strong className="text-slate-200">非法活動：</strong>
                  不得利用本站資訊進行任何違反法律、法規或具有欺詐性質的活動
                </li>
                <li>
                  <strong className="text-slate-200">損害他人權益：</strong>
                  不得利用本站資訊損害他人名譽、侵犯他人隱私、進行騷擾或威脅行為
                </li>
                <li>
                  <strong className="text-slate-200">干擾服務：</strong>
                  不得嘗試破壞、干擾、入侵或損害本站的系統、伺服器或網路安全
                </li>
                <li>
                  <strong className="text-slate-200">虛假資訊：</strong>
                  不得提供虛假、誤導性或欺詐性資訊
                </li>
                <li>
                  <strong className="text-slate-200">未授權存取：</strong>
                  不得嘗試未經授權存取本站的任何部分、用戶帳戶或資料
                </li>
              </ol>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                4. 免責聲明
              </h2>
              <p className="text-slate-300 leading-relaxed">
                本站提供的資訊僅供參考，不構成任何專業建議。用戶使用本站內容時需自行承擔風險。有關詳細的免責聲明，請參閱我們的{' '}
                <Link
                  href="/disclaimer"
                  className="text-[#FF8C00] hover:text-[#FFA500] transition-colors underline"
                >
                  免責聲明
                </Link>
                {' '}頁面。
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                5. 服務變更與中斷
              </h2>
              <p className="text-slate-300 leading-relaxed">
                本站保留隨時修改、暫停、中斷或終止部分或全部服務的權利，恕不另行通知。我們不對任何服務中斷、資料損失或技術故障承擔責任。
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                6. 條款修改權
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Learn Basketball HK 保留隨時修改、更新或補充本服務條款及頁面內容的權利，恕不另行通知。重大變更將在本頁面公布，並更新「Last Updated」日期。
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                繼續使用本站即表示您接受更新後的服務條款。如您不同意任何修改，請立即停止使用本站服務。
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                7. 終止服務
              </h2>
              <p className="text-slate-300 leading-relaxed">
                如用戶違反本服務條款或任何適用的法律法規，本站保留立即終止或暫停該用戶使用本站服務的權利，無需提前通知。
              </p>
            </section>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#FF8C00] mb-4">
                8. 適用法律與管轄權
              </h2>
              <p className="text-slate-300 leading-relaxed">
                本服務條款受香港特別行政區法律管轄並按其解釋。任何與本服務條款相關的爭議，均應提交香港特別行政區具有管轄權的法院處理。
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-slate-700/50">
              <p className="text-slate-400 text-sm mb-4">
                如有任何疑問，請透過{' '}
                <a
                  href="mailto:michaelmorningthrees@gmail.com"
                  className="text-[#FF8C00] hover:text-[#FFA500] transition-colors"
                >
                  michaelmorningthrees@gmail.com
                </a>{' '}
                聯絡我們。
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                <Link href="/disclaimer" className="hover:text-[#FF8C00] transition-colors">
                  免責聲明
                </Link>
                <span className="text-slate-600">|</span>
                <Link href="/privacy" className="hover:text-[#FF8C00] transition-colors">
                  私隱政策
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
