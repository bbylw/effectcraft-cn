import type { CSSProperties } from "react";
import { effectCategories, threeDSpecs } from "../data";

export function Effects() {
  return (
    <section className="section section--panel" id="effects" aria-labelledby="effects-title">
      <div className="wrap">
        <div className="section-head">
          <h2 className="head" id="effects-title" data-reveal>
            306 种特效，
            <br />
            九种图层样式。
          </h2>
          <p className="lede" data-reveal>
            跨 16 个分类，每种特效带各自的参数名、顺序与默认值；
            图层样式全部带全局光。经典 3D 合成：摄像机、灯光与正确相交的图层。
          </p>
        </div>

        <div className="tag-grid" data-reveal>
          {effectCategories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>

        <div className="effects-shots">
          <figure className="shot" data-reveal>
            <img
              src="/images/effects.webp"
              alt="一次 CC Particle World 爆发叠加辉光"
              width={1920}
              height={1166}
              loading="lazy"
            />
            <figcaption>模拟 · CC Particle World 爆发叠加辉光</figcaption>
          </figure>
          <figure className="shot" data-reveal style={{ "--d": "90ms" } as CSSProperties}>
            <img
              src="/images/3d-canvas.webp"
              alt="自定义视图中被聚光灯照亮的相交卡片，投下柔和阴影"
              width={1030}
              height={580}
              loading="lazy"
            />
            <figcaption>经典 3D · 聚光灯 · 柔和光线追踪阴影</figcaption>
          </figure>
        </div>

        <table className="table" data-reveal>
          <tbody>
            {threeDSpecs.map((spec) => (
              <tr key={spec.label}>
                <th scope="row">{spec.label}</th>
                <td className="dim">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
