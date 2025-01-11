import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";
export default function NavBar({ children }) {
  return (
    <div>
      <nav className="navbar">
        <Logo />
        <Search />
        {children}
      </nav>
    </div>
  );
}
