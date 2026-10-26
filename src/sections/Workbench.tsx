import { panels, shortcuts } from "../data";

export function Workbench() {
  return (
    <section className="section section--panel" id="workbench" aria-labelledby="workbench-title">
      <div className="wrap workbench-grid">
        <div className="workbench-left">
          <h2 className="head" id="workbench-title" data-reveal>
            你熟悉的那张
            <br />
            工作台。
          </h2>
          <p className="lede" data-reveal>
            面板、菜单与快捷键遵循标准的动态设计惯例，按你期望的方式停靠；
            拖拽素材、合成与特效时，它们落在指针所指的图层与时间点。
          </p>
          <ul className="panel-grid" data-reveal>
            {panels.map((panel) => (
              <li key={panel}>{panel}</li>
            ))}
          </ul>
          <div className="kbd-row" data-reveal>
            {shortcuts.map((key) => (
              <kbd key={key}>{key}</kbd>
            ))}
          </div>
          <p className="note" style={{ marginTop: 16 }}>
            属性快捷键照旧：Shift 叠加，Alt+Shift 在当前时间打关键帧，
            Ctrl+` 展开所选图层。
          </p>
        </div>

        <figure className="shot" data-reveal>
          <img
            src="/images/effect-controls.webp"
            alt="列出粒子系统参数的特效控制面板，数值可内联编辑"
            width={1960}
            height={1080}
            loading="lazy"
          />
          <figcaption>特效控制面板 · 参数名、顺序与默认值逐项可读</figcaption>
        </figure>
      </div>
    </section>
  );
}
