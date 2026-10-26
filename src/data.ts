export const links = {
  site: "https://getartcraft.com/apps/effectcraft",
  artcraft: "https://getartcraft.com/",
  apps: "https://getartcraft.com/apps",
  github: "https://github.com/storytold/effectcraft",
  releases: "https://github.com/storytold/effectcraft/releases/latest",
  allReleases: "https://github.com/storytold/effectcraft/releases",
  issues: "https://github.com/storytold/effectcraft/issues",
  discord: "https://discord.gg/artcraft",
  agentsDoc: "https://github.com/storytold/effectcraft/blob/main/docs/agents.md",
  controlDoc:
    "https://github.com/storytold/effectcraft/blob/main/docs/control-protocol.md",
  parity:
    "https://github.com/storytold/effectcraft/blob/main/docs/target-app-parity.md",
  gaps: "https://github.com/storytold/effectcraft/blob/main/docs/gaps.md",
  roadmap: "https://github.com/storytold/effectcraft/blob/main/ROADMAP.md",
  licenseMit:
    "https://github.com/storytold/effectcraft/blob/main/LICENSE-MIT",
  licenseApache:
    "https://github.com/storytold/effectcraft/blob/main/LICENSE-APACHE",
  attribution:
    "https://github.com/storytold/effectcraft/blob/main/ATTRIBUTION.md",
  mcpConfig: "https://github.com/storytold/effectcraft/blob/main/.mcp.json",
} as const;

export const navItems = [
  { label: "工作台", href: "#workbench" },
  { label: "动画", href: "#animation" },
  { label: "特效", href: "#effects" },
  { label: "导出", href: "#export" },
  { label: "智能体", href: "#agents" },
  { label: "下载", href: "#download" },
];

export const heroSpecs = [
  { value: "306", label: "种内置特效" },
  { value: "38", label: "种混合模式" },
  { value: "9", label: "种图层样式" },
  { value: "29.97", label: "fps 逐帧精确" },
  { value: "0", label: "个 FFmpeg" },
  { value: "MIT", label: "或 Apache-2.0" },
];

export const panels = [
  "项目",
  "合成",
  "时间轴",
  "图层",
  "素材",
  "特效控制",
  "工具",
  "预览",
  "特效与预设",
  "音频",
  "信息",
  "段落",
  "字符",
  "对齐",
  "进度",
  "渲染队列",
];

export const shortcuts = ["A", "P", "S", "R", "T", "M", "F", "E", "L", "U", "F9"];

export const animationRows = [
  {
    name: "图层",
    body: "纯色、形状、文字、素材、嵌套合成、空对象、调整图层、摄像机与灯光；父子关系、轨道遮罩、运动模糊。",
  },
  {
    name: "关键帧",
    body: "线性、贝塞尔、定格、自动与连续贝塞尔、游走关键帧；Easy Ease 在 F9，速度与插值有对话框。",
  },
  {
    name: "图表编辑器",
    body: "数值图与速度图，可拖拽控制柄。曲线怎么弯，画面就怎么动。",
  },
  {
    name: "时间",
    body: "重映射、伸缩、反转、冻结帧、工作区与标记；包括 29.97 掉帧在内逐帧精确。",
  },
  {
    name: "形状与遮罩",
    body: "修剪路径、重复器、圆角、zig zag、合并路径与渐变描边；钢笔遮罩可羽化、扩展、编辑顶点。",
  },
  {
    name: "文字",
    body: "点文字与段落文字，本机任意字体真实成型；字符与段落面板，带范围选择器的文字动画器。",
  },
  {
    name: "表达式",
    body: "标准动态表达式模型的 JavaScript：wiggle、loopOut、thisComp.layer(…)；内联编辑器与拾取鞭。",
  },
  {
    name: "木偶工具",
    body: "位置、高级、弯曲、僵硬与重叠图钉；实时录制，头发与布料的自然跟随。",
  },
];

export const effectCategories = [
  "模糊与锐化",
  "通道",
  "颜色校正",
  "扭曲",
  "生成",
  "抠像",
  "遮罩",
  "噪点与颗粒",
  "透视",
  "模拟",
  "风格化",
  "时间",
  "音频",
  "文字",
  "转场",
  "工具与表达式控制",
];

export const threeDSpecs = [
  { label: "摄像机", value: "一节点与两节点 · 景深" },
  { label: "灯光", value: "平行 · 聚光 · 点光 · 环境光" },
  { label: "阴影", value: "柔和光线追踪" },
  { label: "视图", value: "前 / 顶 / 左 / 自定义" },
];

export const exportFormats = [
  { group: "视频", name: "H.264", detail: "MP4 视频" },
  { group: "视频", name: "ProRes", detail: "MOV 带音频；Proxy 到 4444 XQ Alpha" },
  { group: "视频", name: "HEVC", detail: "Main / Main 10，MP4" },
  { group: "视频", name: "AV1", detail: "MP4" },
  { group: "视频", name: "WebM", detail: "VP9 帧间与 Alpha，或 AV1；Opus 音频" },
  { group: "视频", name: "GIF", detail: "动态 GIF" },
  { group: "图像", name: "PNG / JPEG / TIFF", detail: "单帧与序列" },
  { group: "图像", name: "EXR", detail: "32 位序列" },
  { group: "音频", name: "WAV / AIFF", detail: "音频导出" },
  { group: "交换", name: "Lottie", detail: ".json 或 .lottie；导入与导出，双向" },
];

export const exportNotes = [
  "3:2 下拉的场渲染",
  "特效、solo、参考线、深度覆盖",
  "裁剪、感兴趣区域与缩放",
  "渲染设置与输出模块模板",
  "渲染后动作、存储溢出与渲染日志",
  "同一队列可从命令行运行",
];

export const agentMethods = [
  {
    name: "MCP 服务器",
    tag: "stdio · --bridge 9877",
    body: "通过 stdio 讲模型上下文协议；可无头运行，或桥接到正在运行的应用。工具覆盖命令、项目与属性树、关键帧与渲染帧。",
    code: "effectcraft-cli mcp --bridge 9877",
    href: "https://github.com/storytold/effectcraft/blob/main/docs/agents.md",
  },
  {
    name: "命令行",
    tag: "一次性调用 · JSON 输出",
    body: "同一个命令注册表；适合脚本、CI 与批量渲染。",
    code: "effectcraft-cli render --comp Main --out main.mp4",
    href: "https://github.com/storytold/effectcraft/blob/main/docs/agents.md",
  },
  {
    name: "控制通道",
    tag: "effectcraft --control 9877",
    body: "接受 JSON 行：运行命令、按自动化 id 检查并点击任意控件、截图。",
    code: "effectcraft --control 9877",
    href: "https://github.com/storytold/effectcraft/blob/main/docs/control-protocol.md",
  },
];

export const commandDefault =
  "effectcraft-cli set Main '#1' transform/position '[100,360]' --time 0 main.ecproj --save";

export const commandExamples = [
  "effectcraft-cli mcp --bridge 9877",
  "effectcraft-cli render --comp Main --out main.mp4",
  "effectcraft-cli exec file.exportLottie '{\"comp\":\"Main\",\"path\":\"main.json\"}' main.ecproj",
];

export const statusFigures = [
  { value: "91", unit: "％", label: "目标功能对齐", href: links.parity },
  { value: "45", unit: "％", label: "迈向成熟生产的估计", href: links.parity },
  { value: "2026-10-01", unit: "", label: "首个提交" },
  { value: "1.95", unit: "+", label: "所需 Rust 版本" },
];

export const statusGaps = [
  "原生项目格式：.ecproj 是可读的带版本 JSON；不读取专有格式，也不支持 After Effects SDK 插件。",
  "保真度仍在打磨：自动化渲染测试目前只聚焦小型合成，若有视觉差异请告诉我们。",
  "macOS 测试最充分：Linux 与 Windows 的基础交互问题正在优先修复。",
  "训练模型还很新：旋转笔刷与人脸跟踪的可选下载仍在评估与调优。",
];

export const platformLinks = [
  { id: "windows", name: "Windows", note: "x64 · arm64 · x86" },
  { id: "macos", name: "macOS", note: "通用二进制" },
  { id: "linux", name: "Linux", note: "AppImage · Flatpak · deb · rpm · tar" },
  { id: "freebsd", name: "FreeBSD", note: "x86_64" },
  { id: "web", name: "Web", note: "WebAssembly" },
];

export const downloadPage = "https://getartcraft.com/download";

export const buildCommand = `git clone https://github.com/storytold/effectcraft
cd effectcraft
cargo run --release -p effectcraft -- --demo`;

export const familyApps = [
  { name: "PhotoCraft", use: "图像编辑", icon: "/images/apps/photocraft.png", href: "https://getartcraft.com/apps/photocraft" },
  { name: "VectorCraft", use: "矢量插画", icon: "/images/apps/vectorcraft.png", href: "https://getartcraft.com/apps/vectorcraft" },
  { name: "FilmCraft", use: "视频 · 调色 · 声音", icon: "/images/apps/filmcraft.png", href: "https://getartcraft.com/apps/filmcraft" },
  { name: "LightCraft", use: "照片库与 RAW", icon: "/images/apps/lightcraft.png", href: "https://getartcraft.com/apps/lightcraft" },
  { name: "PdfCraft", use: "PDF 阅读与保护", icon: "/images/apps/pdfcraft.png", href: "https://getartcraft.com/apps/pdfcraft" },
  { name: "EffectCraft", use: "动态图形与视觉特效", icon: "/images/apps/effectcraft.png", href: links.site, current: true },
  { name: "DesignCraft", use: "页面排版与出版", icon: "/images/apps/designcraft.png", href: "https://getartcraft.com/apps/designcraft" },
];

export const footerLinks = [
  { label: "GitHub", href: links.github },
  { label: "最新发布", href: links.releases },
  { label: "Bug 报告", href: links.issues },
  { label: "路线图", href: links.roadmap },
  { label: "许可证与致谢", href: links.attribution },
];
