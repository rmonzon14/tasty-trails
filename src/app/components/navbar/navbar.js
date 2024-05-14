import NavLink from "./nav-link";
import Search from "./search";

export default function Navbar() {
  return (
    <nav>
      <div>
        <p>Tasty Trails</p>
      </div>

      <div>
        <Search />
      </div>

      <div>
        <ul>
          <li>
            <NavLink href="/home">Home</NavLink>
          </li>
          <li>
            <NavLink href="/recipes">Recipes</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
