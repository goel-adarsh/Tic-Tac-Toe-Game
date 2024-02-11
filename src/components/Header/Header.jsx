import headerImage from "/game-logo.png";
import "./Header.css"

function Header() {
  return (
    <header>
      <img src={headerImage} alt="Tic-Tac-Toe" />
      <h1>Tic-Tac-Toe</h1>
    </header>
  );
}

export default Header;
