import { GetStaticProps } from 'next';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Container, Heading, Text, Box } from '@chakra-ui/layout';
import { Article } from 'mopeneko_blog';
import dayjs from 'dayjs';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { client } from 'libs/client';
import { createSchemaElement } from 'libs/schema';
import HTMLRenderer from 'components/HTMLRenderer';

type Props = {
  article: Article;
};

type Params = {
  id: string;
};

export const getStaticPaths = async () => {
  const data = await client.getList({ endpoint: 'articles' });

  const paths = data.contents.map((content: Article) => `/${content.id}`);
  return { paths, fallback: 'blocking' };
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
    revalidate: 60,
  };
};

const ArticleDetail: React.FC<Props> = ({ article }) => {
  return (
    <>
      <Head>{createSchemaElement(article)}</Head>

      <NextSeo title={`${article.title} - もペブログ`} />

      <div style={{ minHeight: '100vh' }}>
        <Header />
        <Container maxW='container.md' pt={4}>
          <article>
            <Heading>{article.title}</Heading>
            <Text>
              {dayjs(article.publishedAt).tz('Asia/Tokyo').format('YYYY/MM/DD')}
            </Text>
            <Box my={5}>
              <HTMLRenderer html={article.content} />
            </Box>
          </article>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default ArticleDetail;
