import Link from '@components/Link';

const IndexPage = () => (
  <div title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link to="/about">
        About
      </Link>
    </p>
  </div>
);

export default IndexPage;
