import { animationRows } from "../data";

export function Animation() {
  return (
    <section className="section" id="animation" aria-labelledby="animation-title">
      <div className="wrap">
        <div className="section-head">
          <h2 className="head" id="animation-title" data-reveal>
            关键帧怎么弯，
            <br />
            画面就怎么动。
          </h2>
          <p className="lede" data-reveal>
            行为一致的关键帧与图表编辑器；时间重映射、伸缩与反转，
            在包括 29.97 掉帧在内的任意帧率下逐帧精确。
          </p>
        </div>

        <div className="animation-grid">
          <figure className="shot" data-reveal>
            <img
              src="/images/graph-editor.webp"
              alt="图表编辑器显示文字动画器范围起点的缓动数值曲线，以及定格、线性、自动贝塞尔与 Easy Ease 按钮栏"
              width={1960}
              height={1080}
              loading="lazy"
            />
            <figcaption>图表编辑器 · 数值图与速度图 · 可拖拽控制柄</figcaption>
          </figure>

          <table className="table" data-reveal>
            <tbody>
              {animationRows.map((row) => (
                <tr key={row.name}>
                  <th scope="row">{row.name}</th>
                  <td className="dim">{row.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
