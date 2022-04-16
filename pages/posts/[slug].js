import { GraphQLClient } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";
import moment from "moment";
import Image from "next/image";

export async function getServerSideProps({ query }) {
  const graphcms = new GraphQLClient(process.env.ENDPOINT);
  const { article } = await graphcms.request(
    `query MyQuery($slug:String!) {
    article(where: {slug: $slug}) {
      id
      createdAt
      title
      slug
      content {
        json
      }
      image {
        url
        width
        height
      }
    }
  }`,
    { slug: query.slug }
  );

  if (article) {
    return {
      props: { article },
    };
  }
  return {
    notFound: true,
  };
}
export default function post({ article }) {
  return (
    <div className="post">
      <h3>{article.title}</h3>
      <p>{moment(article.createdAt).fromNow()}</p>
      {article.image ? (
        <Image
          src={article.image.url}
          width={article.image.width}
          height={article.image.height}
        />
      ) : null}
      <RichText content={article.content.json} />
    </div>
  );
}
