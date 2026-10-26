import { links } from "../data";

export function CallToAction() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="wrap">
        <h2 className="head" id="cta-title" data-reveal>
          来和我们一起创造东西吧。
        </h2>
        <p className="lede" data-reveal>
          Discord 是各类艺术家聚会的地方：画画、拍摄、剪辑、排版的人，
          还有仍在摸索自己喜欢做什么的人。分享作品、寻求帮助，
          或告诉我们哪里出了问题。
        </p>
        <div className="cta-actions" data-reveal>
          <a className="btn" href={links.discord}>
            加入 Discord
          </a>
          <a className="btn btn--ghost" href={links.site}>
            下载 EffectCraft
          </a>
        </div>
      </div>
    </section>
  );
}
