import { Article } from 'mopeneko_blog';

function createSchema(article: Article): Object {
  return {
    '@context': 'http://schema.org/',
    '@type': 'Article',
    headline: article.title,
    datePublished: article.publishedAt,
    dateModified: article.revisedAt,
    author: {
      '@type': 'Person',
      name: 'mopeneko',
    },
  };
}

export function createSchemaElement(article: Article): JSX.Element {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(createSchema(article)),
      }}
    ></script>
  );
}
