import type { Metadata } from 'next'

const SITE_NAME = 'PQSJAPAN.JP'
const TITLE = `${SITE_NAME} | Japanese exporter of auto parts and used vehicle`
const DESCRIPTION = `${SITE_NAME} is the best Japanese Used Cars Dealer & one of the most trusted Company for buying Japanese Cars Online. JTM is also member of all major Auction Halls in Japan.`

export interface OGImage {
  url: string | URL
  secureUrl?: string | URL
  alt?: string
  type?: string
  width?: string | number
  height?: string | number
}

const uiHostName = process?.env?.UI_HOSTNAME as string
export const NEXT_SEO_DEFAULT: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(uiHostName),
  icons: [{ rel: 'icon', url: `${uiHostName}/favicon.ico` }],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: uiHostName,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: `${uiHostName}/pqs-japan.png`,
        width: 800,
        height: 600,
        alt: TITLE,
        type: 'image/png',
        secureUrl: `${uiHostName}/pqs-japan.png`,
      },
    ],
    siteName: 'PQSJAPAN.JP',
  },
}

export const generateSEOMeta = (
  title?: string,
  description?: string,
  urlPath?: string,
  image?: OGImage,
) => {
  const finalTitle = title ? `${title} | ${SITE_NAME}` : TITLE
  // @ts-ignore
  const defaultOGImage: OpenGraphMedia =
    // @ts-ignore
    NEXT_SEO_DEFAULT.openGraph?.images[0] || {}
  return {
    ...NEXT_SEO_DEFAULT,
    title: finalTitle,
    description: description || DESCRIPTION,
    openGraph: {
      ...NEXT_SEO_DEFAULT.openGraph,
      url: urlPath
        ? `${process?.env?.UI_HOSTNAME}${urlPath}`
        : NEXT_SEO_DEFAULT?.openGraph?.url,
      title: finalTitle,
      description: description || DESCRIPTION,
      ...(image
        ? {
            images: [
              {
                url: image?.url || defaultOGImage?.url,
                width: image?.width || defaultOGImage?.width,
                height: image?.height || defaultOGImage?.height,
                alt: finalTitle || defaultOGImage?.alt,
                type: image?.type || defaultOGImage?.type,
                secureUrl: image?.secureUrl || defaultOGImage?.secureUrl,
              },
            ],
          }
        : {
            images: [{ ...defaultOGImage }],
          }),
    },
  }
}
