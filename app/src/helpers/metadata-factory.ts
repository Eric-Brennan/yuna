import { MetaOptions } from "quasar/dist/types/meta";
import MetaData from "../types/general/meta-data";

function getMetadata(data: MetaData) {
  const {
    title, description, keywords, ogUrl, isSearchable,
  } = data;
  return {
    title: `${title} | Arkhaven Therapy`,
    meta: {
      description: { name: 'description', content: `${description}` },
      keywords: { name: 'keywords', content: `${keywords}` },
      equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
      ogTitle: {
        property: 'og:title',
        content: `${title}`,
      },
      ogDescription: {
        property: 'og:description',
        content: `${description}`,
      },
      ogType: {
        property: 'og:type',
        content: 'website',
      },
      ogUrl: {
        property: 'og:url',
        content: `${ogUrl}`,
      },
      ogImage: {
        property: 'og:image',
        content: 'https://gh.solutions/icon.png',
      },
      ogSiteName: {
        property: 'og:site_name',
        content: 'Ground Handling Solutions',
      },
      ogLocale: {
        property: 'og:locale',
        content: 'en_GB',
      },
      //twitterCard: {
      //  name: 'twitter:card',
      //  content: 'summary_large_image',
      //},
      //twitterSite: {
      //  name: 'twitter:site',
      //  content: '@CarFinance247',
      //},
      //twitterTitle: {
      //  name: 'twitter:title',
      //  content: `${title}`,
      //},
      //twitterDescription: {
      //  name: 'twitter:description',
      //  content: `${description}`,
      //},
      //twitterCreator: {
      //  name: 'twitter:creator',
      //  content: '@CarFinance247',
      //},
      //twitterImage: {
      //  name: 'twitter:image',
      //  content: 'https://www.carfinance247.co.uk/logo_wlhlbc.png',
      //},
      //twitterDomain: {
      //  name: 'twitter:domain',
      //  content: 'prod-carfinance247.dotcmscloud.com',
      //},
      robots: {
        name: 'robots',
        content: isSearchable ? 'index, follow' : 'noindex, nofollow',
      },
    },
  } as MetaOptions;
}

export {
  getMetadata
};
