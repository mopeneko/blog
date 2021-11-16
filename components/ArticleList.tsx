import { Link, Box, Text } from '@chakra-ui/layout';
import { Article } from '../types/article';

type Props = {
  articles: Article[];
};

const ArticleList: React.FC<Props> = ({ articles }: Props) => {
  return (
    <div>
      {articles.map((article: Article) => (
        <div key={article.id}>
          <Link to={`/${article.id}`}>
            <Box borderWidth="1px" borderRadius="lg" m={5}>
              <Text as="h2" fontSize="2xl" fontWeight="semibold" m={2}>
                {article.title}
              </Text>
            </Box>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
