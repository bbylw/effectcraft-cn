<p align="center">
  <a href="https://getartcraft.com/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/storytold/effectcraft/main/docs/brand/artcraft-logo-white.svg">
      <img alt="ArtCraft" src="https://raw.githubusercontent.com/storytold/effectcraft/main/docs/brand/artcraft-logo.svg" width="200">
    </picture>
  </a>
</p>


<p align="center">
  <img src="https://raw.githubusercontent.com/storytold/effectcraft/main/assets/app-icon/hicolor/256x256/apps/ai.storyteller.effectcraft.png" width="128" height="128" alt="EffectCraft 图标：粉色瓷砖上的独角兽浮雕">
</p>

<h1 align="center">EffectCraft</h1>

<p align="center">
  <b>动态图形与视觉特效；一款用纯 Rust 打造的开源专业动态图形与视觉特效工作室。</b>
</p>

<p align="center">
  一款免费、开源的合成器：包含合成、图层、关键帧、306 种特效、图层样式、表达式、3D 摄像机与灯光，以及渲染队列，原生支持 macOS、Windows、Linux，并可在浏览器中运行。项目还很年轻，但发展迅速，且已经可用。
</p>

<p align="center">
  <img alt="状态：年轻且发展迅速" src="https://img.shields.io/badge/status-young%20and%20moving%20fast-e0368f?style=flat-square">
  <img alt="使用 Rust 编写" src="https://img.shields.io/badge/rust-1.95%2B-b0206c?style=flat-square&logo=rust&logoColor=white">
  <img alt="许可证：MIT 或 Apache-2.0" src="https://img.shields.io/badge/license-MIT%20%2F%20Apache--2.0-555?style=flat-square">
  <br>
  <a href="https://sonarcloud.io/project/overview?id=storytold_effectcraft"><img alt="由 SonarCloud 扫描" src="https://img.shields.io/badge/Scanned_by-SonarCloud-4b9fd5?style=flat-square&logo=sonarqubecloud&logoColor=white"></a>
  <a href="https://coderabbit.ai"><img alt="由 CodeRabbit 审查" src="https://img.shields.io/coderabbit/prs/github/storytold/effectcraft?style=flat-square&label=Reviewed%20by%20CodeRabbit&logo=coderabbit"></a>
</p>

<p align="center">
  <a href="https://discord.gg/artcraft"><img alt="加入 ArtCraft 社区 Discord" src="https://img.shields.io/badge/Join%20us%20on%20Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" height="40"></a>
</p>

<p align="center">
  <a href="https://getartcraft.com/apps/effectcraft"><b>getartcraft.com 上的 EffectCraft</b></a> ·
  <a href="https://getartcraft.com/">ArtCraft</a> ·
  <a href="https://getartcraft.com/apps">全部 Crafting 应用</a>
</p>

<br>

<p align="center">
  <img src="https://raw.githubusercontent.com/storytold/effectcraft/main/docs/images/effectcraft-hero.png" alt="EffectCraft 主窗口：合成面板中的动画演示合成、项目面板、带有文字/形状/纯色图层的时间轴，以及属性面板中显示所选文字图层的变换、字体与段落设置" width="100%">
</p>

> [!NOTE]
> **ArtCraft 是一个来自各行各业的艺术家社区。** 数字艺术、生成艺术、音乐、游戏——只要你创造东西，你就是我们的一员。**[来 Discord 跟我们打个招呼](https://discord.gg/artcraft)。**

<p align="center">
  <a href="#what-effectcraft-is">它是什么</a> ·
  <a href="#animate">动画</a> ·
  <a href="#effects">特效</a> ·
  <a href="#3d">3D</a> ·
  <a href="#export">导出</a> ·
  <a href="#built-for-agents">智能体</a> ·
  <a href="#get-started">开始使用</a> ·
  <a href="#where-it-stands">当前状态</a> ·
  <a href="#how-its-made">如何实现</a> ·
  <a href="#downloads">下载</a> ·
  <a href="#the-crafting-apps">Crafting 系列应用</a> ·
  <a href="#license-and-credits">许可证</a>
</p>

<a id="what-effectcraft-is"></a>
## EffectCraft 是什么

EffectCraft 面向动画标题、动态图形与合成工作：也就是动态设计师和视觉特效艺术家所需要的那类工具。你用图层（纯色、形状、文字、素材、其他合成）搭建出一个合成，用关键帧为它们的属性做动画，在上面叠加特效，然后渲染出结果。

界面自然且响应灵敏，配有专门的面板（项目、合成、时间轴、图层、素材、特效控制、工具、预览、特效与预设、音频、信息、段落、字符、对齐、进度、渲染队列）以及标准的动态图形快捷键，并在我们看重的一些地方更进一步：

- **内置 Lottie 导入与导出**，动画无需插件即可直接进入网页与应用。
- **可读的项目文件。** 项目以带版本的 JSON（`.ecproj`）保存，因此在版本控制中能干净地 diff。
- **一切皆可脚本化。** 每一个菜单项、时间轴拖拽与属性修改都经由同一个命令注册表，因此相同的操作可以从命令行、JSON 控制通道，以及面向智能体的 MCP 服务器触达。
- **没有 FFmpeg。** 视频与音频的解码、编码全部是纯 Rust：FilmCraft 的编解码器，以及 EffectCraft 自家的 VP9、AV1、HEVC 与 Opus 编码器。

<a id="animate"></a>
## 动画

面板、菜单与快捷键遵循标准的动态设计惯例：项目、合成、时间轴、特效控制、属性、特效与预设、字符、段落、对齐、信息、预览、音频与渲染队列，按你期望的方式停靠。在它们之间拖拽素材、合成与特效：拖到合成视图中时，它们落在指针下方；拖入时间轴时，落在图层之间与你所指的时间点。

- **各类图层：** 纯色、形状、文字、素材、嵌套合成、空对象、调整图层、摄像机与灯光；父子关系、轨道遮罩、全部 38 种混合模式、运动模糊。
- **行为一致的关键帧：** 线性、贝塞尔、定格、自动与连续贝塞尔、游走关键帧、Easy Ease（F9）、关键帧速度与插值对话框、在当前时间点复制粘贴，以及带有数值图与速度图、可拖拽控制柄的**图表编辑器**。
- **时间：** 时间重映射、时间伸缩、时间反转、冻结帧、工作区、标记，在包括 29.97 掉帧在内的任意帧率下都做到逐帧精确。
- **形状与遮罩：** 带修剪路径、重复器、圆角、偏移、zig zag、扭曲、抖动、合并路径与渐变描边的形状图层；用钢笔工具绘制的遮罩，支持模式、羽化、扩展与在视图中编辑顶点。
- **文字：** 点文字与段落文字，支持本机安装任意字体的真实成型；字符与段落面板，以及带范围选择器的文字动画器。
- **表达式：** 标准动态表达式模型的 JavaScript（`wiggle`、`loopOut`、`thisComp.layer("…")`，对数组的矢量运算），带内联编辑器与拾取鞭。
- **熟悉的时间轴：** 展开图层以查看变换、遮罩、特效等；拖动行以重新排序图层；用 Enter 或双击重命名；属性快捷键（A、P、S、R、T、M、F、E、L、U 及双击 AA、PP、SS、RR、TT、MM、FF、EE、LL、UU），Shift 添加属性，Alt+Shift+A/P/S/R/T 为当前时间打关键帧，Ctrl+` 展开所选图层。
- **木偶工具：** 在由图层构建的网格上放置位置、高级、弯曲、僵硬与重叠图钉，实时录制图钉，旋转/缩放手柄，由（或承载）空对象驱动的图钉用于绑定，以及头发与布料的自然跟随。

<p align="center">
  <img src="https://raw.githubusercontent.com/storytold/effectcraft/main/docs/images/effectcraft-graph-editor.png" alt="图表编辑器显示文字动画器“范围起点”的缓动数值曲线，以及图表编辑器用于定格、线性、自动贝塞尔与 Easy Ease 的按钮栏" width="100%">
</p>

<a id="effects"></a>
## 特效

跨各个分类共 306 种内置特效，每种都有各自的参数名、顺序与默认值：模糊与锐化、通道、颜色校正（曲线、色阶、色相/饱和度、完整的调色面板……）、扭曲（变形、膨胀、湍流置换、CC Power Pin……）、生成（分形噪点、渐变斜坡、描边、书写、音频频谱……）、抠像、遮罩、噪点与颗粒、透视、**模拟**（CC Particle World、CC Rainfall、Shatter、Card Dance、Caustics、Wave World……）、风格化（辉光、CC Glass……）、**时间**（Echo、Posterize Time、Timewarp、时间置换……）、**音频**（混响、参数均衡、延迟、立体声混合……）、文字、转场、工具与表达式控制。全部九种**图层样式**（投影、内/外发光、斜角与浮雕、缎面、叠加、描边）均带全局光。预览可同步播放音频，并带有电平表与波形。

<p align="center">
  <img src="https://raw.githubusercontent.com/storytold/effectcraft/main/docs/images/effectcraft-effects.png" alt="一次 CC Particle World 爆发叠加辉光，以及列出粒子系统参数的特效控制面板" width="100%">
</p>

<a id="3d"></a>
## 3D

经典的 3D 合成：带方向与材质选项的 3D 图层，带景深的一节点与两节点**摄像机**，**灯光**（平行、聚光、点光、环境光）带柔和的光线追踪阴影，图层正确相交，轨道、平移与推拉摄像机工具，以及前、顶、左与自定义视图。

<p align="center">
  <img src="https://raw.githubusercontent.com/storytold/effectcraft/main/docs/images/effectcraft-3d.png" alt="“3D 展示”演示在自定义视图 1 中：被聚光灯照亮的相交卡片投下柔和阴影，位于网格地面之上，摄像机视锥体与灯光以线框绘制" width="100%">
</p>

<a id="export"></a>
## 导出

专用的渲染队列，带渲染设置与输出模块：**H.264** MP4 与带音频的 **ProRes** MOV（从 Proxy 到带 Alpha 的 4444 XQ）、**HEVC**（Main / Main 10）与 **AV1** MP4、**WebM**（带帧间与 Alpha 的 VP9，或 AV1；Opus 音频）、PNG、JPEG、TIFF 与 32 位 EXR 序列、动态 GIF，以及 WAV/AIFF。支持 3:2 下拉的场渲染、特效/solo/参考线/深度覆盖、裁剪、感兴趣区域与缩放、带默认值的渲染设置与输出模块模板、渲染后动作、存储溢出与渲染日志。同一队列也可从命令行运行。每个编码器都是纯 Rust（FilmCraft 的 H.264、ProRes 与 AAC；EffectCraft 自家的 VP9、AV1、HEVC 与 Opus）；内部没有任何 FFmpeg。

**Lottie** 双向支持：文件 ▸ 导出 ▸ Lottie JSON… 将一个合成（预合成、形状、纯色、图像、文字与空对象图层，缓动与空间关键帧、遮罩、轨道遮罩、混合模式、时间重映射，以及可选的表达式）写为 `.json` 或 `.lottie`，并列出 Lottie 无法表达的任何内容；文件 ▸ 导入 ▸ Lottie… 将其作为一个新合成打开。

<p align="center">
  <img src="https://raw.githubusercontent.com/storytold/effectcraft/main/docs/images/effectcraft-render-queue.png" alt="渲染队列面板，其中排队了两个合成" width="100%">
</p>

<a id="built-for-agents"></a>
## 为 AI 智能体而生

你能从菜单里做的每一件事，都是一个带 id 的命令，而智能体可以触达其中的每一个：

- **MCP 服务器：** `effectcraft-cli mcp` 通过 stdio 讲模型上下文协议，可无头运行，或桥接到正在运行的应用（`--bridge 9877`）。工具覆盖命令、项目与属性树、关键帧以及渲染帧。本仓库已附带一份可用的 [`.mcp.json`](https://github.com/storytold/effectcraft/blob/main/.mcp.json)。
- **命令行：** 带 JSON 输出的一次性调用，例如
  `effectcraft-cli set Main '#1' transform/position '[100,360]' --time 0 main.ecproj --save`
  或 `effectcraft-cli render --comp Main --out main.mp4`，或
  `effectcraft-cli exec file.exportLottie '{"comp":"Main","path":"main.json"}' main.ecproj`。
- **控制通道：** `effectcraft --control 9877` 接受 JSON 行来运行命令、按自动化 id 检查并点击任意控件，以及截图。

详见 [docs/agents.md](https://github.com/storytold/effectcraft/blob/main/docs/agents.md) 与 [docs/control-protocol.md](https://github.com/storytold/effectcraft/blob/main/docs/control-protocol.md)。

<a id="get-started"></a>
## 开始使用

各版本的安装程序位于 [Releases](https://github.com/storytold/effectcraft/releases) 页面：通用的 macOS 应用；面向 x64、x86 与 ARM64 的 Windows MSI 与便携 zip；面向 x86_64 与 aarch64 的 Linux AppImage、Flatpak、deb、rpm 与 tar.gz，外加一份 riscv64 tar.gz；以及一份 FreeBSD x86_64 tarball；还有 Web 构建。[下载](#downloads) 列出了每一个文件。Windows ARM64 构建在 Windows on ARM 上原生运行，无需 x64 模拟。CI 会在 Windows 11 ARM64 硬件上安装该 MSI，检查两个程序均为 ARM64，并在那里运行命令行工具，但尚不能在 ARM64 上原生打开应用窗口或运行测试套件，因此若有任何不同表现，请告诉我们。

在 Gentoo 上，社区 [::snakebyte overlay](https://github.com/switch87/snakebyte-overlay) 将 Linux 发行版打包为 `media-video/effectcraft-bin`（非 EffectCraft 团队维护）：

```sh
eselect repository add snakebyte git https://github.com/switch87/snakebyte-overlay.git
emaint sync -r snakebyte
echo 'media-video/effectcraft-bin ~amd64' >> /etc/portage/package.accept_keywords/effectcraft
emerge --ask media-video/effectcraft-bin
```

要自己构建，你需要 [Rust](https://rustup.rs/) 1.95 或更新版本。

```sh
git clone https://github.com/storytold/effectcraft
cd effectcraft
cargo run --release -p effectcraft          # 应用（加 `-- --demo` 打开演示项目）
cargo run --release -p effectcraft-cli -- render --out intro.mp4    # 无头渲染演示
cargo xtask web --serve 8765                # 浏览器构建，地址 http://127.0.0.1:8765/（https://github.com/storytold/effectcraft/blob/main/docs/web.md）
```

刚上手？[docs/footage.md](https://github.com/storytold/effectcraft/blob/main/docs/footage.md) 介绍了导入素材与图像序列，以及“解释素材”。

要参与开发：`cargo test --workspace`，并在每次提交前运行 `cargo xtask ci`（格式化、lint、测试、分层、资产归属与 WebAssembly 构建）。参见 [CONTRIBUTING.md](https://github.com/storytold/effectcraft/blob/main/CONTRIBUTING.md)、[docs/architecture.md](https://github.com/storytold/effectcraft/blob/main/docs/architecture.md) 与 [docs/testing.md](https://github.com/storytold/effectcraft/blob/main/docs/testing.md)。

<a id="where-it-stands"></a>
## 当前进展

EffectCraft 还很年轻：它的首个提交在 2026 年 10 月 1 日。它已具备一套全面的功能，包括 306 种特效，但“覆盖面广”不等于在每一个边界情况下都足够成熟。如今它是个尝试东西、并告诉我们哪里会出错的好地方。它尚未被推荐用于生产客户项目。具体而言：

- **原生项目格式。** 项目以 `.ecproj` 保存，即可读的带版本 JSON。不支持专有项目格式与 After Effects SDK 插件。
- **保真度仍在打磨中。** 自动化渲染测试目前只聚焦于小型合成，因此若有视觉差异或异常行为，请告诉我们。
- **macOS 是测试最充分的平台。** Linux 与 Windows 用户遇到过基础交互问题，我们正在优先修复。
- **训练模型还很新。** 旋转笔刷可使用 MobileSAM（设置 ▸ 旋转笔刷中的一项可选 40 MB 下载），人脸跟踪可使用 Google 的 MediaPipe Face Landmarker（设置 ▸ 人脸跟踪中的一项可选 3.8 MB 下载）。两者都还在积极评估与调优中。

EffectCraft 正处于 **alpha**：[docs/target-app-parity.md](https://github.com/storytold/effectcraft/blob/main/docs/target-app-parity.md) 中追踪的功能约有 91% 已实现，我们估计它大约完成了迈向成熟专业生产工作所需进度的 45%。[ROADMAP](https://github.com/storytold/effectcraft/blob/main/ROADMAP.md) 列出了计划，[docs/target-app-parity.md](https://github.com/storytold/effectcraft/blob/main/docs/target-app-parity.md) 是度量，[docs/gaps.md](https://github.com/storytold/effectcraft/blob/main/docs/gaps.md) 记录了每一个已知短板。Web 构建（[docs/web.md](https://github.com/storytold/effectcraft/blob/main/docs/web.md)）可在浏览器中运行完整应用。[Bug 报告](https://github.com/storytold/effectcraft/issues) 是目前你能发给我们最有用的东西。

<a id="how-its-made"></a>
## 如何实现

- **引擎优先。** 一摞具有严格分层的小 crate。界面（egui）位于最上层，其下层没有任何东西依赖它。
- **洁净室。** 我们只依据公开文档与可观察行为工作，绝不使用专有文件、图标、预设或代码。没有从 GPL 项目复制任何代码。完整规则见 [AGENTS.md](https://github.com/storytold/effectcraft/blob/main/AGENTS.md)。
- **默认隐私。** 没有遥测，除非你主动要求，否则没有任何网络访问。
- **同一个家族。** EffectCraft 与 FilmCraft 共享其时间模型与文字引擎设计，并从中获得视频与音频编解码器。

<a id="downloads"></a>
## 下载

**刚接触 EffectCraft？** 从 [getartcraft.com 上的 EffectCraft 页面](https://getartcraft.com/apps/effectcraft) 下载。那是最简单的安装方式。

**想要某个特定构建或格式？** 在 GitHub 上，[最新发布](https://github.com/storytold/effectcraft/releases/latest) 包含下面列出的每一个构建，[全部发布](https://github.com/storytold/effectcraft/releases) 则包含更早的版本及其说明。文件名中的 `<ver>` 是版本号，`SHA256SUMS.txt` 列出了每个文件的校验和。

### Windows

| 构建 | 安装程序 | 便携版 |
|---|---|---|
| x64（64 位 Intel/AMD） | `effectcraft-<ver>-windows-x64.msi` | `effectcraft-<ver>-windows-x64-portable.zip` |
| arm64（骁龙及其他 ARM 电脑） | `effectcraft-<ver>-windows-arm64.msi` | `effectcraft-<ver>-windows-arm64-portable.zip` |
| x86（32 位） | `effectcraft-<ver>-windows-x86.msi` | `effectcraft-<ver>-windows-x86-portable.zip` |

安装程序与可执行文件均经过代码签名。安装程序会询问 EffectCraft 的安装位置（默认为 Program Files），后续版本会安装到同一文件夹。要以静默方式安装到你选择的文件夹：`msiexec /i effectcraft-<ver>-windows-x64.msi /qn INSTALLFOLDER="D:\Apps\EffectCraft"`。

### macOS

| 构建 | 文件 | 说明 |
|---|---|---|
| 应用，通用版（Apple 芯片 + Intel） | `effectcraft-<ver>-macos-universal.dmg` | 已签名并公证 |
| 命令行工具，通用版 | `effectcraft-cli-<ver>-macos-universal.zip` | 已签名并公证 |

### Linux

| 格式 | x86_64 | aarch64（ARM64） | 说明 |
|---|---|---|---|
| AppImage | `effectcraft-<ver>-linux-x86_64.AppImage` | `effectcraft-<ver>-linux-aarch64.AppImage` | 随处可运行；通过 [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate)（`.zsync` 文件）自我更新 |
| Flatpak | `effectcraft-<ver>-linux-x86_64.flatpak` | `effectcraft-<ver>-linux-aarch64.flatpak` | 沙盒化；`flatpak install --user <file>` |
| Debian/Ubuntu | `effectcraft-<ver>-linux-x86_64.deb` | `effectcraft-<ver>-linux-aarch64.deb` | |
| Fedora/RHEL/openSUSE | `effectcraft-<ver>-linux-x86_64.rpm` | `effectcraft-<ver>-linux-aarch64.rpm` | |
| Tarball | `effectcraft-<ver>-linux-x86_64.tar.gz` | `effectcraft-<ver>-linux-aarch64.tar.gz` | 任意位置解包 |

RISC-V 64 位：`effectcraft-<ver>-linux-riscv64.tar.gz`（仅 tarball；需要 glibc 2.39+，例如 Ubuntu 24.04+ 或 Debian 13+）。

**Linux 上的文件拖放：** 当前的 eframe/winit 0.30 原生 Wayland 后端不会传递文件悬停或文件拖放事件。在 Hyprland 及其他原生 Wayland 会话中，请使用 **文件 ▸ 导入 ▸ 文件…**（可多选），或者在已安装 XWayland 且设置了 `DISPLAY` 时通过 XWayland 启动 EffectCraft：

```sh
env -u WAYLAND_DISPLAY effectcraft
```

当后端能传递事件时（X11/XWayland、Windows 与 macOS），在窗口任意位置拖入媒体即可导入，悬停时还会显示放置目标提示。在原生 Wayland 上，应用无法检测到不会产生任何事件的尝试；它会显示一个启动提示，并给出“文件 ▸ 导入”的替代方式。

### FreeBSD

| 构建 | 文件 |
|---|---|
| x86_64 | `effectcraft-<ver>-freebsd-x86_64.tar.gz` |

### Web（WebAssembly）

| 构建 | 文件 | 说明 |
|---|---|---|
| 静态站点 | `effectcraft-web-<ver>.zip` | 在现代浏览器中运行；可托管于任意静态服务器 |

<a id="the-crafting-apps"></a>
## Crafting 系列应用

EffectCraft 是 **Crafting 系列应用** 之一：来自 [ArtCraft](https://getartcraft.com/) 团队的免费、开源创意工具，每一个都用 Rust 从零编写，且都能独立运行。

| | 应用 | 用途 | 代码 | 了解更多 |
|:-:|---|---|---|---|
| <img src="https://raw.githubusercontent.com/storytold/photocraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.photocraft.png" alt="" width="32" height="32"> | **PhotoCraft** | 图像编辑：图层、遮罩、文字与真实的 PSD 文件 | [GitHub](https://github.com/storytold/photocraft) | [官网](https://getartcraft.com/apps/photocraft) |
| <img src="https://raw.githubusercontent.com/storytold/vectorcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.vectorcraft.png" alt="" width="32" height="32"> | **VectorCraft** | 矢量插画 | [GitHub](https://github.com/storytold/vectorcraft) | [官网](https://getartcraft.com/apps/vectorcraft) |
| <img src="https://raw.githubusercontent.com/storytold/filmcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.filmcraft.png" alt="" width="32" height="32"> | **FilmCraft** | 视频编辑、调色与声音 | [GitHub](https://github.com/storytold/filmcraft) | [官网](https://getartcraft.com/apps/filmcraft) |
| <img src="https://raw.githubusercontent.com/storytold/lightcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.lightcraft.png" alt="" width="32" height="32"> | **LightCraft** | 照片库与原始格式开发 | [GitHub](https://github.com/storytold/lightcraft) | [官网](https://getartcraft.com/apps/lightcraft) |
| <img src="https://raw.githubusercontent.com/storytold/pdfcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.pdfcraft.png" alt="" width="32" height="32"> | **PdfCraft** | 阅读、整理与保护 PDF | [GitHub](https://github.com/storytold/pdfcraft) | [官网](https://getartcraft.com/apps/pdfcraft) |
| <img src="https://raw.githubusercontent.com/storytold/effectcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.effectcraft.png" alt="" width="32" height="32"> | **EffectCraft** | **动态图形与视觉特效 · 你在这里** | [GitHub](https://github.com/storytold/effectcraft) | [官网](https://getartcraft.com/apps/effectcraft) |
| <img src="https://raw.githubusercontent.com/storytold/designcraft/main/assets/app-icon/hicolor/64x64/apps/ai.storyteller.designcraft.png" alt="" width="32" height="32"> | **DesignCraft** | 页面排版与出版 | [GitHub](https://github.com/storytold/designcraft) | [官网](https://getartcraft.com/apps/designcraft) |

还有 [**ArtCraft**](https://getartcraft.com/) 本身，我们为想要真正掌控权的艺术家打造的 AI 图像与视频工作室。

<br>

<p align="center">
  <a href="https://discord.gg/artcraft"><img alt="加入 ArtCraft 社区 Discord" src="https://img.shields.io/badge/Join%20us%20on%20Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" height="40"></a>
</p>

<h3 align="center">来和我们一起创造东西吧</h3>

<p align="center">
  我们的 Discord 是各类艺术家聚会的地方：画画、拍摄、绘图、剪辑、排版的人，还有那些仍在摸索自己喜欢做什么的人。分享你的作品，寻求帮助，告诉我们哪里出了问题，或者告诉我们你希望这些工具能做到什么。无论你的媒介是什么、无论你做了多久，这里都欢迎你。
</p>

<p align="center">
  <a href="https://discord.gg/artcraft"><b>discord.gg/artcraft</b></a> ·
  <a href="https://getartcraft.com/">getartcraft.com</a> ·
  <a href="https://getartcraft.com/apps">Crafting 系列应用</a> ·
  <a href="https://getartcraft.com/apps/effectcraft">EffectCraft</a>
</p>

<a id="license-and-credits"></a>
## 许可证与致谢

EffectCraft 采用双重许可，你可任选 [MIT](https://github.com/storytold/effectcraft/blob/main/LICENSE-MIT) 或 [Apache-2.0](https://github.com/storytold/effectcraft/blob/main/LICENSE-APACHE)。版权所有 (c) 2026 ArtCraft Team 与 EffectCraft 贡献者。必要的声明见 [NOTICE](https://github.com/storytold/effectcraft/blob/main/NOTICE)。

打包的字体、图标、图像及其他资产保留各自的开放许可证；每一项都随作者、来源与许可证列于 [ATTRIBUTION.md](https://github.com/storytold/effectcraft/blob/main/ATTRIBUTION.md)。

[`docs/brand/`](https://github.com/storytold/effectcraft/tree/main/docs/brand/) 中的 ArtCraft 名称、文字商标与徽标是 ArtCraft Team 的商标，不受本许可证覆盖。它们只能原样、且只能作为本仓库与 EffectCraft 的一部分使用，依据 [`docs/brand/LICENSE-brand.txt`](https://github.com/storytold/effectcraft/blob/main/docs/brand/LICENSE-brand.txt)。分支与修改版本必须移除它们。

<p align="center">
  <a href="https://getartcraft.com/"><img alt="ArtCraft" src="https://raw.githubusercontent.com/storytold/effectcraft/main/docs/brand/artcraft-mark.svg" width="28"></a><br>
  <sub>由 <a href="https://getartcraft.com/">ArtCraft</a> 团队与社区打造。</sub>
</p>

## Star 历史

[![Star History Chart](https://api.star-history.com/svg?repos=storytold/effectcraft&type=Date&legend=top-left)](https://www.star-history.com/?repos=storytold%2Feffectcraft&type=date&legend=top-left)
