import { GetStaticProps } from 'next';
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
      <Header />
      <Container maxW="container.md">
        <ArticleList articles={articles} />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
