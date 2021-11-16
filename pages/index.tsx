import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Box, Link, Text } from '@chakra-ui/layout';
import { Container } from '@chakra-ui/react';
import { client } from '../libs/client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleList from '../components/ArticleList';
import { Article } from '../types/article';

type Props = {
  articles: Article[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Article>({ endpoint: 'articles' });

  return {
    props: {
      articles: data.contents,
    },
  };
};

const Home: React.FC<Props> = ({ articles }: Props) => {
  return (
    <>
      <Head>
        <title>もぺブログ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <Container maxW="container.md">
        <ArticleList articles={articles} />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
