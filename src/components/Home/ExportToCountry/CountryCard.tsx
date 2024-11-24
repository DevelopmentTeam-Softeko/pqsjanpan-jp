import Image from 'next/image'

interface Props {
  name: string
  code: string
}

export default function CountryCard(props: Props) {
  return (
    <div className="flex items-center rounded">
      <Image
        className="mr-2 rounded"
        src={`https://flagsapi.com/${props?.code}/flat/32.png`}
        alt={props?.name}
        width={32}
        height={32}
      />
      <span>{props?.name}</span>
    </div>
  )
}
