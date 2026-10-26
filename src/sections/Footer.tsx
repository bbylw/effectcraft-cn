import { footerLinks, links } from "../data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-line">
        <span>© 2026 ArtCraft Team 与 EffectCraft 贡献者 · MIT / Apache-2.0</span>
        <nav aria-label="页脚">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <span>
          界面截图为产品真实渲染 ·{" "}
          <a href={links.attribution}>资产致谢</a>
        </span>
      </div>
    </footer>
  );
}
