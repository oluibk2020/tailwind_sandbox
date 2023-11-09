import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex text-white justify-between h-24 items-center">
      <div>
        <h1 className="font-bold">
          <NavLink className="p-3 uppercase" to="/">
            Food Ninja
          </NavLink>
        </h1>
      </div>
      <ul className="w-1/2 flex justify-around">
        <li className="text-gray-700">
          <NavLink className="font-bold" to="/" activeclassname = 'active'>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname = 'active'>
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname = 'active'>
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav