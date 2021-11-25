import { GetStaticProps } from 'next';
import { Container } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { client } from '../libs/client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleList from '../components/ArticleList';
import type { Article } from 'mopeneko_blog';

type Props = {
  articles: Article[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Article>({ endpoint: 'articles' });

  return {
    props: {
      articles: data.contents,
    },
    revalidate: 60,
  };
};

const Home: React.FC<Props> = ({ articles }) => {
  return (
    <>
      <NextSeo title='もぺブログ' />

      <Header />
      <Container maxW='container.md'>
        <ArticleList articles={articles} />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
