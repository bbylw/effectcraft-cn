import { familyApps, links } from "../data";

export function Family() {
  return (
    <section className="section" id="family" aria-labelledby="family-title">
      <div className="wrap">
        <div className="section-head">
          <h2 className="head" id="family-title" data-reveal>
            同一个家族，
            <br />
            都用 Rust 从零写起。
          </h2>
          <p className="lede" data-reveal>
            EffectCraft 是 Crafting 系列应用之一：来自 ArtCraft
            团队的免费、开源创意工具，每一个都能独立运行。
          </p>
        </div>

        <table className="table" data-reveal>
          <tbody>
            {familyApps.map((app) => (
              <tr key={app.name}>
                <th scope="row">
                  <span className="family-cell">
                    <img src={app.icon} alt="" width={28} height={28} loading="lazy" />
                    {app.name}
                    {app.current ? " · 你在这里" : ""}
                  </span>
                </th>
                <td className="dim">{app.use}</td>
                <td>
                  <a href={app.href} aria-label={`${app.name} 官网`}>
                    官网
                  </a>
                </td>
              </tr>
            ))}
            <tr>
              <th scope="row">
                <span className="family-cell">ArtCraft</span>
              </th>
              <td className="dim">AI 图像与视频工作室，为想要真正掌控权的艺术家</td>
              <td>
                <a href={links.artcraft} aria-label="ArtCraft 官网">
                  官网
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
