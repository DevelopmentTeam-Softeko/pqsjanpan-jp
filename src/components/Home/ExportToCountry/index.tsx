import CountryCard from '@/components/Home/ExportToCountry/CountryCard'

import COUNTRY_DATA from './countryData.json'

export default function ExportToCountry() {
  return (
    <div className="container mx-auto my-20">
      <div className="mb-10 text-center">
        <h3 className="text-xl font-bold">We Export To</h3>
      </div>
      <div className="grid w-full grid-cols-3 gap-2 px-6 md:grid-cols-6 lg:grid-cols-8 lg:px-8">
        {COUNTRY_DATA?.map((country) => (
          <CountryCard
            key={country?.name}
            name={country?.name}
            code={country?.code}
          />
        ))}
      </div>
    </div>
  )
}
