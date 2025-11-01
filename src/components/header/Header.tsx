export default function Header() {
  return (
    <header className="flex flex-col">
      <h1 className="text-xl">João Victor J. S.</h1>
      <p className="text-neutral-500">Itabaiana - SE</p>

      <nav className="flex flex-row py-4">
        <a href="#about" className="anchor-button">
          Sobre
        </a>
        <a href="#projects" className="anchor-button">
          Projetos
        </a>
        <a href="https://github.com/joaovictorjs" className="anchor-button">
          Github
        </a>
      </nav>
    </header>
  );
}
