import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky/40 via-sand to-white">
    <Navbar />
    <main className="flex-1 py-10 sm:py-14">{children}</main>
    <Footer />
  </div>
);
