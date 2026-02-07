import * as S from "./Styles";
import logo from "../../../assets/logo-black.png";
import { Link } from "react-router";

export const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.LogoContainer>
          <Link to="/">
            <S.HeaderLogo src={logo} alt="Rick and Morty" />
          </Link>
        </S.LogoContainer>

        <S.Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/episodes">Episodes</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
          </ul>
        </S.Nav>
      </S.HeaderContainer>
    </S.Header>
  );
};
