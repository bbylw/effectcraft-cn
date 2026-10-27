import { useState } from "react";
import { commandDefault, commandExamples } from "../data";

type Row = { label: string; value: string };

function parse(raw: string): Row[] {
  const tokens = raw.trim().split(/\s+/);
  const rows: Row[] = [];
  const flags: [string, string][] = [];
  const positional: string[] = [];
  const head = tokens[0] === "effectcraft-cli" || tokens[0] === "effectcraft";
  const sub = head ? (tokens[1] ?? "") : "";

  if (head) rows.push({ label: "命令", value: sub });

  for (let i = head ? 2 : 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    if (token.startsWith("--")) {
      const next = tokens[i + 1];
      if (next && !next.startsWith("--")) {
        flags.push([token.slice(2), next]);
        i += 1;
      } else {
        flags.push([token.slice(2), "true"]);
      }
    } else {
      positional.push(token);
    }
  }

  if (sub === "set") {
    const [comp, layer, property, value] = positional;
    if (comp) rows.push({ label: "合成", value: comp });
    if (layer) rows.push({ label: "图层", value: layer });
    if (property) rows.push({ label: "属性", value: property });
    if (value) rows.push({ label: "值", value: value });
  } else if (sub === "exec") {
    const [method, payload, file] = positional;
    if (method) rows.push({ label: "方法", value: method });
    if (payload) rows.push({ label: "参数", value: payload });
    if (file) rows.push({ label: "项目文件", value: file });
  } else {
    positional.forEach((token, index) => {
      if (token.endsWith(".ecproj")) rows.push({ label: "项目文件", value: token });
      else if (index === 0) rows.push({ label: "目标", value: token });
    });
  }

  for (const [key, value] of flags) rows.push({ label: `--${key}`, value });
  if (!rows.length) rows.push({ label: "命令", value: "（空）" });
  return rows;
}

export function CommandBox() {
  const [command, setCommand] = useState(commandDefault);
  const rows = parse(command);
  const tokens = command.trim().split(/\s+/);
  const head = tokens[0] === "effectcraft-cli" || tokens[0] === "effectcraft";
  const json = JSON.stringify({
    ok: true,
    command: head ? (tokens[1] ?? null) : null,
    flags: Object.fromEntries(
      rows
        .filter((row) => row.label.startsWith("--"))
        .map((row) => [row.label.slice(2), row.value]),
    ),
  });

  return (
    <div className="cmd-box">
      <label className="sr-only" htmlFor="cmd-input">
        输入一条 effectcraft-cli 命令
      </label>
      <code style={{ display: "block" }}>
        <input
          id="cmd-input"
          className="cmd-input"
          value={command}
          spellCheck={false}
          autoComplete="off"
          onChange={(event) => setCommand(event.target.value)}
        />
      </code>
      <div className="cmd-out">
        <dl>
          {rows.map((row) => (
            <div key={row.label} style={{ display: "contents" }}>
              <dt>{row.label}</dt>
              <dd>
                <code>{row.value}</code>
              </dd>
            </div>
          ))}
        </dl>
        <p
          className="cmd-json"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <code>{json}</code>
        </p>
      </div>
      <div className="cmd-examples">
        {commandExamples.map((example) => (
          <button key={example} type="button" onClick={() => setCommand(example)}>
            {example.length > 46 ? `${example.slice(0, 46)}…` : example}
          </button>
        ))}
      </div>
    </div>
  );
}
