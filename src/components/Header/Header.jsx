import "./Header.css";

/** @description dynamic header */
export default function Header(props = { links: [{ name: "", loc: "" }] }) {
  return (
    <header className="Header">
      <h1>Linxonix</h1>
      <nav>
        <ul>
          {props.links.map((link, i) => {
            return (
              <li key={i}>
                <a href={link.loc}>{link.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
