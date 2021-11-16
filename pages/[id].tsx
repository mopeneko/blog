import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { Container, Heading, Text, Box } from '@chakra-ui/layout';
import dayjs from 'dayjs';
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

const ArticleDetail: React.FC<Props> = ({ article }) => {
  return (
    <>
      <NextSeo title={`${article.title} - もペブログ`} />

      <Header />
      <Container maxW="container.md" pt={4}>
        <article>
          <Heading>{article.title}</Heading>
          <Text>
            {dayjs(article.publishedAt).tz('Asia/Tokyo').format('YYYY/MM/DD')}
          </Text>
          <Box mt={5}>
            <HTMLRenderer html={article.content} />
          </Box>
        </article>
      </Container>
      <Footer />
    </>
  );
};

export default ArticleDetail;
