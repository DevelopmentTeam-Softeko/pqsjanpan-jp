import Image from 'next/image'
import Link from 'next/link'

interface Props {
  media: string
  link: string
  title: string
}
export default function ExternalLinkCard(props: Props) {
  return (
    <div className="relative mb-4 sm:mb-0">
      <div className="invisible absolute bottom-0 lg:visible">
        <span className="mr-1 inline-block h-8 w-0.5 bg-white" />
        <span className="inline-block h-16 w-0.5 bg-white" />
      </div>
      <Link
        href={props?.link}
        target="_blank"
        className="mx-auto flex max-w-sm flex-col items-center justify-center text-center"
      >
        <p className="mb-4 text-xs font-semibold text-white sm:text-lg">
          {props?.title}
        </p>
        <Image
          className="w-14 rounded-lg sm:w-10"
          src={props?.media}
          alt=""
          width={180}
          height={180}
        />
      </Link>
    </div>
  )
}
