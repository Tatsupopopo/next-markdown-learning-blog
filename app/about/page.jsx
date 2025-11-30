import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiQiita } from "react-icons/si";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      {/* タイトル */}
      <h1 className="text-3xl font-bold">当サイトについて</h1>

      {/* 2カラム構成 */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* 左カラム：画像 + SNS */}
        <div className="flex flex-col items-center gap-4 shrink-0">
          {/* 画像のサイズ・形はそのまま */}
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />

          <h2 className="text-center text-sm font-semibold text-slate-800">
            Tatsupopopo<br/>（Tatsuki Yotsushima）
          </h2>

          {/* SNS icons */}
          <div className="flex justify-center gap-4">
            <a
              href="https://x.com/eatingMikan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-black transition-colors text-2xl"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://github.com/Tatsupopopo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 transition-colors text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://qiita.com/Tatsupopopo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#55c500] transition-colors text-2xl"
            >
              <SiQiita />
            </a>
          </div>
        </div>

        {/* 右カラム：テキスト */}
        <div>
          <p className="max-w-2xl text-sm text-slate-700 leading-relaxed">
            このサイトは, 私 Tatsupopopo
            が日々の勉強や趣味のゲームについて書き綴る個人ブログです.
          </p>
          <p className="max-w-2xl text-sm text-slate-700 leading-relaxed">
            <br />
            以前は ITプロダクトの PdM をしておりましたが, 現在は退職しており,
            かねてから興味のあったエンジニア職を目指すべく,
            日々勉強しております. 当サイトもその勉強の一環として開設しました.
          </p>
          <p className="max-w-2xl text-sm text-slate-700 leading-relaxed">
            <br />
            Web開発についての勉強だけでなく,
            趣味であるゲームのことについてもこのブログで書きますが,
            将来的にはゲームについては別サイトとして分離する予定です.
          </p>
          <p className="max-w-2xl text-sm text-slate-700 leading-relaxed">
            <br />
            まだまだ勉強中ですが, どうぞよろしくお願いします.
          </p>
        </div>
      </div>
    </div>
  );
}
