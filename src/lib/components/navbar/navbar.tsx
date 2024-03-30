import { Link, NavLink } from 'react-router-dom';
import classes from './navbar.module.scss';
import hamIcon from '/icons/ham.svg';
import { useState } from 'react';
import { Home } from 'lucide-react';

export interface Props {
  title: string;
  menuItems?: string[];
  children?: React.ReactNode;
}

function Navbar({ title, menuItems, children }: Props) {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={classes.navbar}>
      <h1 data-testid="navbar">
        <Link to="/" className={classes.home}>
          <Home size={24} />
        </Link>
        {title}
        <a
          href="https://github.com/sadanandpai/algo-visualizers"
          target="blank"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github repo"
            className={classes.github}
          />
        </a>
      </h1>

      {children}

      {menuItems ? (
        <>
          <button
            onClick={() => setToggle(!toggle)}
            className={classes.hamButton}
          >
            <img src={hamIcon} alt="hamburger" />
          </button>
          <ul data-toggle={toggle}>
            {menuItems.map((item) => (
              <li key={item}>
                <NavLink
                  to={`/sorting-visualizer/${item}`}
                  className={({ isActive }) => (isActive ? classes.active : '')}
                  onClick={() => setToggle(false)}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </nav>
  );
}

export default Navbar;
