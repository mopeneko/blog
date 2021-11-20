import NextLink from 'next/link';
import { Link, Box, Text } from '@chakra-ui/layout';
import dayjs from 'dayjs';
import type { Article } from 'mopeneko_blog';

type Props = {
  articles: Article[];
};

const ArticleList: React.FC<Props> = ({ articles }) => {
  return (
    <div>
      {articles.map((article: Article) => (
        <div key={article.id}>
          <NextLink href={`/${article.id}`}>
            <Link href={`/${article.id}`}>
              <Box borderWidth='1px' borderRadius='lg' m={5}>
                <Text as='h2' fontSize='2xl' fontWeight='semibold' m={2}>
                  {article.title}
                </Text>
                <Text ml={2}>
                  {dayjs(article.publishedAt)
                    .tz('Asia/Tokyo')
                    .format('YYYY/MM/DD')}
                </Text>
              </Box>
            </Link>
          </NextLink>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
