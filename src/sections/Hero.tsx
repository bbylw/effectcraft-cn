import { DownloadIcon } from "../components/Icons";
import { heroSpecs, links } from "../data";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <h1 className="hero-title" id="hero-title">
              动态图形与特效，
              <br />
              开源，纯 Rust。
            </h1>
            <p className="lede">
              免费、开源的合成器：合成、图层、关键帧、306 种特效、图层样式、
              表达式、3D 摄像机与灯光，以及渲染队列；原生运行于 macOS、
              Windows、Linux，并可在浏览器中打开。
            </p>
            <div className="hero-actions">
              <a className="btn" href={links.site}>
                <DownloadIcon />
                下载 EffectCraft
              </a>
              <a className="btn btn--ghost" href={links.github}>
                GitHub 仓库
              </a>
            </div>
          </div>

          <figure className="hero-shot">
            <img
              src="/images/hero.webp"
              alt="EffectCraft 主窗口：合成面板中的动画演示合成、项目面板、带文字与形状图层的时间轴，以及属性面板"
              width={1960}
              height={1102}
            />
            <figcaption>主窗口 · 动画演示合成 · 项目与属性面板</figcaption>
          </figure>
        </div>

        <div className="spec-strip" data-reveal>
          {heroSpecs.map((spec) => (
            <div className="spec-cell" key={spec.label}>
              <span className="value">{spec.value}</span>
              <span className="label">{spec.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
