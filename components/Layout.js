import Link from 'next/link';
import Layout from '../components/Layout';

const PostLink = (props) => {
  return (
    <li>
            <a>{props.title}</a>
    </li>
);}

export default () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink title="Hello next.js" />
            <PostLink title="next.js is awesome" />
            <PostLink title="Deploy apps with Zeit" />
        </ul>
    </Layout>
);