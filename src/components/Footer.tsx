import { Link } from 'react-router-dom';

export const Footer = (): JSX.Element => (
  <footer className="border-t border-white/70 bg-white/70 backdrop-blur py-8 mt-16">
    <div className="container-responsive flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-dusk/80">
      <div className="flex items-center gap-2 font-semibold text-dusk">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-leaf text-white font-bold">GE</span>
        <span>GreenEarth</span>
      </div>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-leaf">Home</Link>
        <Link to="/about" className="hover:text-leaf">About</Link>
        <Link to="/contact" className="hover:text-leaf">Contact</Link>
      </div>
      <p className="text-xs">© {new Date().getFullYear()} GreenEarth. All rights reserved.</p>
    </div>
  </footer>
);
