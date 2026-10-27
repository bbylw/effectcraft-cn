import { links, statusFigures, statusGaps } from "../data";

export function Status() {
  return (
    <section className="section" id="status" aria-labelledby="status-title">
      <div className="wrap">
        <div className="section-head">
          <h2 className="head" id="status-title" data-reveal>
            处于 alpha，
            <br />
            数字不撒谎。
          </h2>
          <p className="lede" data-reveal>
            项目还很年轻：覆盖面广不等于每个边界情况都成熟。
            如今它是尝试东西、并告诉我们哪里会出错的好地方；
            尚不建议用于生产客户项目。
          </p>
        </div>

        <div className="status-figures" data-reveal>
          {statusFigures.map((figure) => (
            <div className="status-figure" key={figure.label}>
              <span className={figure.compact ? "value value--date" : "value"}>
                {figure.href ? (
                  <a
                    href={figure.href}
                    aria-label={`${figure.label} ${figure.value}${figure.unit}`}
                  >
                    {figure.value}
                  </a>
                ) : (
                  figure.value
                )}
                {figure.unit ? <span className="unit">{figure.unit}</span> : null}
              </span>
              <span className="label">{figure.label}</span>
            </div>
          ))}
        </div>

        <ul className="gaps-grid" data-reveal>
          {statusGaps.map((gap) => {
            const [title, ...rest] = gap.split("：");
            return (
              <li key={gap}>
                <strong>{title}：</strong>
                {rest.join("：")}
              </li>
            );
          })}
          <li>
            <strong>已知短板：</strong>
            全部记录在{" "}
            <a href={links.gaps}>docs/gaps.md</a>；计划见{" "}
            <a href={links.roadmap}>ROADMAP</a>。
          </li>
        </ul>
      </div>
    </section>
  );
}
