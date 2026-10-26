import { Fragment } from "react";
import { exportFormats, exportNotes } from "../data";

const groups = ["视频", "图像", "音频", "交换"];

export function Export() {
  return (
    <section className="section" id="export" aria-labelledby="export-title">
      <div className="wrap">
        <div className="section-head">
          <h2 className="head" id="export-title" data-reveal>
            交付，
            <br />
            不靠外挂。
          </h2>
          <p className="lede" data-reveal>
            专用渲染队列带渲染设置与输出模块；每个编码器都是纯 Rust
            ——FilmCraft 的 H.264、ProRes 与 AAC，EffectCraft 自家的 VP9、AV1、
            HEVC 与 Opus。内部没有任何 FFmpeg。
          </p>
        </div>

        <div className="animation-grid">
          <figure className="shot" data-reveal>
            <img
              src="/images/render-queue.webp"
              alt="渲染队列面板，其中排队了两个合成"
              width={1960}
              height={324}
              loading="lazy"
            />
            <figcaption>渲染队列 · 两个合成排队 · 同一队列可从命令行运行</figcaption>
          </figure>
          <div>
            <ul className="note-list" data-reveal>
              {exportNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>

          <table className="table" data-reveal>
            <tbody>
              {groups.map((group) => (
                <Fragment key={group}>
                  <tr className="group-row">
                    <th scope="colgroup" colSpan={2}>
                      {group}
                    </th>
                  </tr>
                  {exportFormats
                    .filter((format) => format.group === group)
                    .map((format) => (
                      <tr key={format.name}>
                        <th scope="row">{format.name}</th>
                        <td className="dim">{format.detail}</td>
                      </tr>
                    ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
