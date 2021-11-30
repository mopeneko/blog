import { Article } from 'mopeneko_blog';

function createSchema(article: Article): Object {
  return {
    '@context': 'http://schema.org/',
    '@type': 'Article',
    datePublished: article.publishedAt,
    dateModified: article.revisedAt,
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
