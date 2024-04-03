import nlwUniteIcon from "../assets/nlw-unite-icon.svg";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <div className="flex gap-5 items-center py-2">
      <img src={nlwUniteIcon} alt="icone do nlw unite" />

      <nav className="flex gap-5 items-center">
        <NavLink href="/eventos">
          Eventos
        </NavLink>

        <NavLink href="/participantes">
          Participantes
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
