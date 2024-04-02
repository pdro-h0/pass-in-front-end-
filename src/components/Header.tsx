import nlwUniteIcon from "../assets/nlw-unite-icon.svg";

const Header = () => {
  return (
    <div className="flex gap-5 items-center py-2">
      <img src={nlwUniteIcon} alt="icone do nlw unite" />

      <nav className="flex gap-5 items-center">
        <a href="" className="font-medium text-sm text-zinc-300">
          Eventos
        </a>
        <a href="" className="font-medium text-sm">
          Participantes
        </a>
      </nav>
    </div>
  );
};

export default Header;
