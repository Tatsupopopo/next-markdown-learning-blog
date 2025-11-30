import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiQiita } from "react-icons/si";

export default function ProfileCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      {/* プロフィール画像 */}
      <div className="w-20 h-20 mx-auto rounded-full bg-slate-200 overflow-hidden mb-3">
        <img src="/images/profile.jpg" className="object-cover h-20 w-20"/>
      </div>

      {/* 名前 */}
      <h2 className="text-center text-sm font-semibold text-slate-800">
        Tatsupopopo
      </h2>

      {/* SNSアイコン */}
      <div className="flex justify-center gap-4 mt-4">
        <a
          href="https://x.com/eatingMikan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-black transition-colors text-xl"
          aria-label="X"
        >
          <FaXTwitter />
        </a>

        <a
          href="https://github.com/Tatsupopopo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-slate-900 transition-colors text-xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://qiita.com/Tatsupopopo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-[#55c500] transition-colors text-xl"
          aria-label="Qiita"
        >
          <SiQiita />
        </a>
      </div>

      {/* 説明文 */}
      <p className="text-center text-xs mt-2 text-slate-600 leading-relaxed">
        Web の勉強, 読書, ゲームが趣味です.
      </p>
    </div>
  );
}
