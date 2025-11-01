export default function Header() {
  return (
    <header className="flex flex-col">
      <h1 className="text-xl">João Victor J. S.</h1>
      <p className="text-neutral-500">Itabaiana - SE</p>

      <nav className="flex flex-row py-4">
        <a href="#about" className="anchor-button">
          About
        </a>
        <a href="#projects" className="anchor-button">
          Projects
        </a>
        <a href="#github" className="anchor-button">
          Github
        </a>
      </nav>
    </header>
  );
}
