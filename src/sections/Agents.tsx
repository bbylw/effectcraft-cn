import { CommandBox } from "../components/CommandBox";
import { agentMethods, buildCommand, links } from "../data";

export function Agents() {
  return (
    <section className="section section--panel" id="agents" aria-labelledby="agents-title">
      <div className="wrap">
        <div className="section-head">
          <h2 className="head" id="agents-title" data-reveal>
            每一个菜单项，
            <br />
            都是一个命令。
          </h2>
          <p className="lede" data-reveal>
            你能从菜单里做的每一件事都带 id；智能体可以触达其中的每一个。
            在下面输入一条命令，看它被解析成什么。
          </p>
        </div>

        <div className="agents-grid">
          <div data-reveal>
            <CommandBox />
            <ul className="note-list">
              <li>
                完整命令清单与智能体接入见{" "}
                <a href={links.agentsDoc}>docs/agents.md</a>。
              </li>
              <li>
                控制协议（检查并点击任意控件、截图）见{" "}
                <a href={links.controlDoc}>docs/control-protocol.md</a>。
              </li>
            </ul>
          </div>

          <div>
            <table className="table" data-reveal>
              <tbody>
                {agentMethods.map((method) => (
                  <tr key={method.name}>
                    <th scope="row">
                      {method.name}
                      <span className="note" style={{ display: "block" }}>
                        {method.tag}
                      </span>
                    </th>
                    <td className="dim">
                      {method.body}{" "}
                      <a
                        href={method.href}
                        aria-label={`${method.name} 文档`}
                      >
                        文档
                      </a>
                    </td>
                  </tr>
                ))}
                <tr>
                  <th scope="row">
                    自己构建
                    <span className="note" style={{ display: "block" }}>
                      Rust 1.95+
                    </span>
                  </th>
                  <td>
                    <pre className="code-block">
                      <code>{buildCommand}</code>
                    </pre>
                  </td>
                </tr>
                <tr>
                  <th scope="row">MCP 配置</th>
                  <td className="dim">
                    仓库附带一份可用的{" "}
                    <a href={links.mcpConfig}>
                      .mcp.json
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
