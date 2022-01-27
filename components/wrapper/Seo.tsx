import { NextSeo } from 'next-seo';

type SeoProps = {
  title: string;
  url: string;
  description: string;
};

const SEO = (props: SeoProps) => {
  const twitterId = '@_m_vt';
  return (
    <NextSeo
      title={props.title}
      description={props.description}
      canonical={props.url}
      openGraph={{
        url: props.url,
        title: props.title,
        description: props.description,
        // TODO: maskableなアイコンを用意する
        images: [
          {
            url: `${props.url}/maskable_icon_x384.png`,
            width: 384,
            height: 384,
            alt: props.title,
            type: 'image/png',
          },
          {
            url: `${props.url}/maskable_icon_x512.png`,
            width: 512,
            height: 512,
            alt: props.title,
            type: 'image/png',
          },
          { url: `${props.url}/maskable_icon_x512.png` },
        ],
        site_name: props.title,
      }}
      twitter={{
        handle: twitterId,
        site: twitterId,
        cardType: 'summary_large_image',
      }}
      // TODO: facebook対応する場合appIdの取得が必要なので検討
      //   facebook={{
      //     appId: '',
      //   }}
    />
  );
};

export default SEO;
