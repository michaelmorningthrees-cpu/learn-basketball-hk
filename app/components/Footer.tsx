import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-700/50 bg-slate-950/80 backdrop-blur-md mt-16">
      <div className="container mx-auto px-4 max-w-7xl py-8">
        <div className="flex flex-col gap-4">
          {/* 主要内容：版权信息和导航链接 */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p className="text-center md:text-left">
              © 2026 LearnBasketballHK - 為香港人提供最優質嘅籃球教學服務
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <Link
                href="/"
                className="hover:text-[#FF8C00] transition-colors"
              >
                首頁
              </Link>
              <Link
                href="/about"
                className="hover:text-[#FF8C00] transition-colors"
              >
                關於我們
              </Link>
              <a
                href="mailto:michaelmorningthrees@gmail.com"
                className="hover:text-[#FF8C00] transition-colors"
              >
                聯絡我們
              </a>
            </div>
          </div>

          {/* 法律链接 */}
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-xs text-slate-500 pt-3 border-t border-slate-700/30">
            <Link
              href="/disclaimer"
              className="hover:text-orange-500 transition-colors whitespace-nowrap"
            >
              免責聲明
            </Link>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <Link
              href="/privacy"
              className="hover:text-orange-500 transition-colors whitespace-nowrap"
            >
              私隱政策
            </Link>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <Link
              href="/terms"
              className="hover:text-orange-500 transition-colors whitespace-nowrap"
            >
              服務條款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
