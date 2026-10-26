import { useEffect, useState } from "react";
import { links, navItems } from "../data";
import { DownloadIcon } from "./Icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let active = "";
      for (const item of navItems) {
        const node = document.querySelector(item.href);
        if (!node) continue;
        if (node.getBoundingClientRect().top <= 140) active = item.href;
      }
      setCurrent(active);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="wrap header-bar">
        <a className="wordmark" href="#main">
          <img src="/images/apps/effectcraft.png" alt="" width={26} height={26} />
          EffectCraft
        </a>
        <nav className="header-nav" aria-label="页面导航">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={current === item.href ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn" href={links.site}>
          <DownloadIcon />
          下载
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          菜单 <span aria-hidden="true">{open ? "×" : "≡"}</span>
        </button>
      </div>
      <nav
        className="mobile-nav"
        id="mobile-nav"
        aria-label="页面导航"
        data-open={open}
        hidden={!open}
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href={links.site} onClick={() => setOpen(false)}>
          在 getartcraft.com 下载
        </a>
      </nav>
    </header>
  );
}
