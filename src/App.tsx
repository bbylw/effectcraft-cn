import { Header } from "./components/Header";
import { useReveal } from "./hooks/useReveal";
import { Agents } from "./sections/Agents";
import { Animation } from "./sections/Animation";
import { CallToAction } from "./sections/CallToAction";
import { Download } from "./sections/Download";
import { Effects } from "./sections/Effects";
import { Export } from "./sections/Export";
import { Family } from "./sections/Family";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Status } from "./sections/Status";
import { Workbench } from "./sections/Workbench";

export function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Workbench />
        <Animation />
        <Effects />
        <Export />
        <Agents />
        <Status />
        <Download />
        <Family />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
