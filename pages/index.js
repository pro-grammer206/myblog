import Head from "next/head";
import Image from "next/image";
import { GraphQLClient } from "graphql-request";
import Link from "next/link";
import moment from "moment";

export async function getServerSideProps() {
  const graphcms = new GraphQLClient(process.env.ENDPOINT);
  const { articles } = await graphcms.request(
    `{
     articles(orderBy: publishedAt_DESC) {
    content {
      text
    }
    createdAt
    id
    slug
    title
  }
}
    `
  );
  return {
    props: {
      articles,
    },
  };
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="wall">
        {articles.map((a) => (
          <div className="card" key={a.id}>
            <Link href={`/posts/${a.slug}`}>
              <a>
                <section>
                  <p>{a.title}</p>
                  <span>{moment(a.createdAt).fromNow()}</span>
                </section>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
