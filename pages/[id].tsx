import { GetStaticProps } from 'next';
import { Container, Heading, Text, Code, Link } from '@chakra-ui/layout';
import parse, {
  DOMNode,
  domToReact,
  Element,
  HTMLReactParserOptions,
} from 'html-react-parser';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { client } from '../libs/client';
import { Article } from '../types/article';
import HTMLRenderer from '../components/HTMLRenderer';

type Props = {
  article: Article;
};

type Params = {
  id: string;
};

export const getStaticPaths = async () => {
  const data = await client.getList({ endpoint: 'articles' });

  const paths = data.contents.map((content: Article) => `/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const id = params?.id ?? '';
  const article = await client.get({ endpoint: 'articles', contentId: id });

  return {
    props: {
      article,
    },
  };
};

const ArticleDetail: React.FC<Props> = ({ article }: Props) => {
  return (
    <>
      <Header />
      <Container maxW="container.md" pt={4}>
        <article>
          <Heading>{article.title}</Heading>
          <HTMLRenderer html={article.content} />
        </article>
      </Container>
      <Footer />
    </>
  );
};

export default ArticleDetail;
