import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { useScrollToTop } from './hooks/useScrollToTop';

const Home = lazy(async () => import('./pages/Home').then((m) => ({ default: m.Home })));
const About = lazy(async () => import('./pages/About').then((m) => ({ default: m.About })));
const Initiatives = lazy(async () => import('./pages/Initiatives').then((m) => ({ default: m.Initiatives })));
const Articles = lazy(async () => import('./pages/Articles').then((m) => ({ default: m.Articles })));
const ArticleDetail = lazy(async () => import('./pages/ArticleDetail').then((m) => ({ default: m.ArticleDetail })));
const GetInvolved = lazy(async () => import('./pages/GetInvolved').then((m) => ({ default: m.GetInvolved })));
const Contact = lazy(async () => import('./pages/Contact').then((m) => ({ default: m.Contact })));

const Fallback = (): JSX.Element => (
  <div className="container-responsive py-10 text-dusk">Loading...</div>
);

const App = (): JSX.Element => {
  useScrollToTop();

  return (
    <Layout>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Fallback />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
