import { OsIcon } from "../components/OsIcons";
import { downloadPage, platformLinks } from "../data";

export function Download() {
  return (
    <section className="section section--panel" id="download" aria-labelledby="download-title">
      <div className="wrap">
        <div className="section-head">
          <h2 className="head" id="download-title" data-reveal>
            每一个平台，
            <br />
            都有它的文件。
          </h2>
          <p className="lede" data-reveal>
            点系统标识，去下载页拿对应平台的安装程序。
          </p>
        </div>

        <table className="os-table" data-reveal>
          <tbody>
            <tr>
              {platformLinks.map((platform) => (
                <td key={platform.id}>
                  <a className="os-link" href={downloadPage}>
                    <OsIcon id={platform.id} size={56} />
                    <span className="os-name">{platform.name}</span>
                    <span className="os-note">{platform.note}</span>
                  </a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
