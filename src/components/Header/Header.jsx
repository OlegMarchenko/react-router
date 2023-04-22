import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {


  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => isActive ? "active" : null}>
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink to='contact'>Contact Page</NavLink>
          </li>
          <li>
            <NavLink to='about'>About Page</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;