import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  secondary?: ReactNode;
}

export const Hero = ({ title, subtitle, ctaLabel, ctaHref, secondary }: HeroProps): JSX.Element => (
  <section className="container-responsive relative overflow-hidden">
    <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-leaf/10 blur-3xl" aria-hidden="true" />
    <div className="absolute right-0 -top-10 h-48 w-48 rounded-full bg-sky/40 blur-3xl" aria-hidden="true" />
    <div className="relative glass-card p-8 sm:p-12">
      <div className="flex flex-col gap-6 sm:max-w-3xl">
        <span className="badge w-fit">Protect the planet</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-dusk">{title}</h1>
        <p className="text-lg text-dusk/80">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <Link
            to={ctaHref}
            className="inline-flex items-center justify-center rounded-xl bg-leaf px-5 py-3 text-white font-semibold shadow-lg shadow-leaf/20 hover:bg-dusk transition-colors"
          >
            {ctaLabel}
          </Link>
          {secondary}
        </div>
      </div>
    </div>
  </section>
);
