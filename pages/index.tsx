import { GetStaticProps } from 'next';
import { Container } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import type { Article } from 'mopeneko_blog';
import { client } from 'libs/client';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ArticleList from 'components/ArticleList';
import { useRouter } from 'next/router';
import Seo from '../components/wrapper/Seo';

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
  const router = useRouter();

  // PWA出力時、articles が undefined になるため
  if (typeof articles === 'undefined') {
    articles = [];
  }

  return (
    <>
      <Seo
        title='もぺブログ'
        url='https://blog.lem0n.cc'
        description='もぺねこのぶろぐ！'
      />

      <Header />
      <Container maxW='container.md'>
        <ArticleList articles={articles} />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
