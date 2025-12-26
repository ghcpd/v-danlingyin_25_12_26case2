import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/initiatives', label: 'Initiatives' },
  { to: '/articles', label: 'Articles' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/contact', label: 'Contact' },
];

const activeClass = 'text-leaf font-semibold';
const baseClass = 'text-dusk hover:text-leaf transition-colors';

export const Navbar = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-white/60 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container-responsive flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 text-lg font-extrabold text-dusk tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-leaf text-white font-bold">GE</span>
          <span>GreenEarth</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => clsx(baseClass, isActive && activeClass)}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className="md:hidden p-2 rounded-lg border border-white/70 bg-white/70 text-dusk"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/60 bg-white/90 backdrop-blur">
          <div className="container-responsive flex flex-col py-3 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => clsx('py-2', baseClass, isActive && activeClass)}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
