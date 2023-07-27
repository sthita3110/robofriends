import "./Header.css";
import SearchBox from "./SearchBox";
const Header = () => {
  return (
    <>
      <header className="text-center">
        <p>RoboFriends</p>
        <SearchBox />
      </header>
    </>
  );
};

export default Header;
