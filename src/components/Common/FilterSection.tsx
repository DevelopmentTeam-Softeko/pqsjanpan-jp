'use client'

import { ArrowPathIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
// import classNames from 'classnames'
import { useEffect, useMemo, useState } from 'react'

// import { modelData } from '@/api/data'
import { useGetModelList } from '@/api/useApi'
import ScrollToTop from '@/components/Common/ScrollToTop'
import FilterItem from '@/components/Home/FilterItem'
import useYearList from '@/hooks/useYearList'

interface Props {
  searchParams: any
  makerData: any
  bodyTypeData: any
  isThirdParty: boolean
  fobPriceRangeData?: any
  maxMinMileage?: any
  maxMinEngineCC?: any
}
export default function FilterSection(props: Props) {
  const params = props?.searchParams
  const makerData = props?.makerData ?? []
  const bodyTypeData = props?.bodyTypeData ?? []
  const fobPriceRangeData = props?.fobPriceRangeData ?? []
  const maxMinMileage = props?.maxMinMileage ?? []
  const maxMinEngineCC = props?.maxMinEngineCC ?? []
  const makeParam = Number(params?.make) || -1
  const modelParam = Number(params?.model) || -1
  const bodyParam = Number(params?.body) || -1
  const fromYearParam = Number(params?.fromYear) || -1
  const toYearParam = Number(params?.toYear) || -1

  const fromPriceParam = Number(params?.fromPrice) || -1
  const toPriceParam = Number(params?.toPrice) || -1
  const chassisNoParam = params?.chassisNo ?? ''
  const fuelParam = Number(params?.fuel) || -1
  const steeringParam = Number(params?.steering) || -1
  const transmissionParam = Number(params?.transmission) || -1
  const minMileageParam = Number(params?.fromMileage) || -1
  const maxMileageParam = Number(params?.toMileage) || -1
  const minEngCCParam = Number(params?.fromEngCC) || -1
  const maxEngCCParam = Number(params?.toEngCC) || -1

  const [make, setMake] = useState(makeParam)
  const [model, setModel] = useState(modelParam)
  const [body, setBody] = useState(bodyParam)
  const [fromYear, setFromYear] = useState(fromYearParam)
  const [toYear, setToYear] = useState(toYearParam)

  const [fromPrice, setFromPrice] = useState(fromPriceParam)
  const [toPrice, setToPrice] = useState(toPriceParam)
  const [chassisNo, setChassisNo] = useState(chassisNoParam)
  const [fuel, setFuel] = useState(fuelParam)
  const [steering, setSteering] = useState(steeringParam)
  const [transmission, setTransmission] = useState(transmissionParam)
  const [minMileage, setMinMileage] = useState(minMileageParam)
  const [maxMileage, setMaxMileage] = useState(maxMileageParam)
  const [minEngCC, setMinEngCC] = useState(minEngCCParam)
  const [maxEngCC, setMaxEngCC] = useState(maxEngCCParam)
  const [isThirdParty, setIsThirdParty] = useState(props.isThirdParty)

  const { data: modelData } = useGetModelList(make, isThirdParty)
  let years = useYearList()
  years = [...years].reverse()

  const targetPath = isThirdParty ? '/all-stock' : '/stock-list'
  const hasAppliedFilter =
    makeParam > -1 ||
    modelParam > -1 ||
    bodyParam > -1 ||
    fromYearParam > -1 ||
    toYearParam > -1 ||
    fromPriceParam > -1 ||
    toPriceParam > -1 ||
    !!chassisNoParam
  const href = useMemo(() => {
    const queryParams = []
    if (make > 0) {
      queryParams.push(`make=${make}`)
    }

    if (model > 0) {
      queryParams.push(`model=${model}`)
    }

    if (body > 0) {
      queryParams.push(`body=${body}`)
    }

    if (fromYear > 0) {
      queryParams.push(`fromYear=${fromYear}`)
    }

    if (toYear > 0) {
      queryParams.push(`toYear=${toYear}`)
    }

    if (fromPrice > 0) {
      queryParams.push(`fromPrice=${fromPrice}`)
    }

    if (toPrice > 0) {
      queryParams.push(`toPrice=${toPrice}`)
    }
    if (fuel > 0) {
      queryParams.push(`fuel=${fuel}`)
    }
    if (steering > 0) {
      queryParams.push(`steering=${steering}`)
    }
    if (transmission > 0) {
      queryParams.push(`transmission=${transmission}`)
    }

    if (minMileage > 0) {
      queryParams.push(`fromMileage=${minMileage}`)
    }
    if (maxMileage > 0) {
      queryParams.push(`toMileage=${maxMileage}`)
    }

    if (minEngCC > 0) {
      queryParams.push(`fromEngCC=${minEngCC}`)
    }
    if (maxEngCC > 0) {
      queryParams.push(`toEngCC=${maxEngCC}`)
    }

    if (chassisNo) {
      queryParams.push(`chassisNo=${chassisNo}`)
    }

    const queryString = queryParams.join('&')
    return `${targetPath}${queryString ? `?${queryString}` : ''}`
  }, [
    make,
    model,
    body,
    fromYear,
    toYear,
    targetPath,
    fromPrice,
    toPrice,
    chassisNo,
    minEngCC,
    maxEngCC,
    minMileage,
    maxMileage,
  ])

  useEffect(() => {
    setModel(-1)
  }, [make])

  useEffect(() => {
    if (makeParam > 0) {
      setMake(makeParam)
    } else {
      setMake(-1)
    }
    if (modelParam > 0) {
      setModel(modelParam)
    } else {
      setModel(-1)
    }
    if (bodyParam > 0) {
      setBody(bodyParam)
    } else {
      setBody(-1)
    }
    if (fromYearParam > 0) {
      setFromYear(fromYearParam)
    } else {
      setFromYear(-1)
    }
    if (toYearParam > 0) {
      setToYear(toYearParam)
    } else {
      setToYear(-1)
    }

    if (fromPriceParam > 0) {
      setFromPrice(fromPriceParam)
    } else {
      setFromPrice(-1)
    }
    if (toPriceParam > 0) {
      setToPrice(toPriceParam)
    } else {
      setToPrice(-1)
    }

    if (minEngCC > 0) {
      setMinEngCC(minEngCC)
    } else {
      setMinEngCC(-1)
    }

    if (maxEngCC > 0) {
      setMaxEngCC(maxEngCC)
    } else {
      setMaxEngCC(-1)
    }

    if (minMileage > 0) {
      setMinMileage(minMileage)
    } else {
      setMinMileage(-1)
    }

    if (maxMileage > 0) {
      setMaxMileage(maxMileage)
    } else {
      setMaxMileage(-1)
    }

    if (chassisNoParam) {
      setChassisNo(chassisNoParam)
    }
  }, [params])
  const fuels = [
    { label: 'Petrol', value: 1 },
    { label: 'Diesel', value: 2 },
    { label: 'Gasoline', value: 3 },
    { label: 'Octane', value: 4 },
  ]
  const steerings = [
    { label: 'Right', value: 1 },
    { label: 'Left', value: 2 },
    { label: 'Center', value: 3 },
  ]
  const transmissions = [
    { label: 'Auto', value: 1 },
    { label: 'Manual', value: 2 },
    { label: 'Semi-Auto', value: 3 },
  ]

  return (
    <>
      <ScrollToTop />
      <div className="container mx-auto gap-6 px-6 lg:px-8">
        <div className="mx-auto grid w-full grid-cols-1 items-center justify-items-stretch gap-4 rounded-2xl bg-white p-6 md:grid-cols-2 md:p-8 lg:grid-cols-4">
          <div className="col-span-1 flex">
            <FilterItem
              placeholder="Select Make"
              data={makerData}
              value={make}
              setValue={setMake}
              showCount={true}
            />
          </div>
          <div className="col-span-1 flex">
            <FilterItem
              placeholder="Select Model"
              data={modelData}
              value={model}
              setValue={setModel}
              showCount={true}
            />
          </div>
          <div className="col-span-1 flex">
            <FilterItem
              placeholder="Select Body"
              data={bodyTypeData}
              value={body}
              setValue={setBody}
            />
          </div>
          <div className="col-span-1 flex">
            <FilterItem
              placeholder="Fuel"
              data={fuels}
              value={fuel}
              setValue={setFuel}
            />
          </div>

          {/* start min & max price  */}
          <div className="col-span-1 flex">
            <FilterItem
              placeholder="Min Price"
              data={fobPriceRangeData}
              value={fromPrice}
              setValue={setFromPrice}
            />
          </div>
          <div className="col-span-1 flex">
            <FilterItem
              placeholder="Max Price"
              data={fobPriceRangeData}
              value={toPrice}
              setValue={setToPrice}
            />
          </div>

          {/* end min & max price  */}

          <div className="col-span-1 flex">
            <input
              type="text"
              id="chassis_no"
              className="block w-full rounded-md border border-gray-300 bg-gray-100 p-2.5 text-sm text-black outline-0 placeholder:text-black focus:ring-primary-500"
              placeholder="Chassis Code"
              required
              value={chassisNo}
              onChange={(event) => setChassisNo(event.target.value)}
            />
          </div>
          <div className="col-span-1 flex">
            <FilterItem
              placeholder="Steering"
              data={steerings}
              value={steering}
              setValue={setSteering}
            />
          </div>
          <div className="col-span-1 flex">
            <FilterItem
              placeholder="Transmission"
              data={transmissions}
              value={transmission}
              setValue={setTransmission}
            />
          </div>

          {/* Start Year  */}

          <div className="col-span-1 flex">
            <FilterItem
              placeholder="From Year"
              data={years}
              value={fromYear}
              setValue={setFromYear}
            />
          </div>

          <div className="col-span-1 flex">
            <FilterItem
              placeholder="To Year"
              data={years}
              value={toYear}
              setValue={setToYear}
            />
          </div>

          {/* end year  */}

          <div className="col-span-1 flex">
            <FilterItem
              placeholder="Min Mileage"
              data={maxMinMileage}
              value={minMileage}
              setValue={setMinMileage}
            />
          </div>

          <div className="col-span-1 flex">
            <FilterItem
              placeholder="Max Mileage"
              data={maxMinMileage}
              value={maxMileage}
              setValue={setMaxMileage}
            />
          </div>

          <div className="col-span-1 flex">
            <FilterItem
              placeholder="Min Eng CC"
              data={maxMinEngineCC}
              value={minEngCC}
              setValue={setMinEngCC}
            />
          </div>
          <div className="col-span-1 flex">
            <FilterItem
              placeholder="Max Eng CC"
              data={maxMinEngineCC}
              value={maxEngCC}
              setValue={setMaxEngCC}
            />
          </div>
          <div className="col-span-1 flex items-center">
            <input
              type="checkbox"
              id="thirdParty"
              className="mr-2"
              checked={isThirdParty}
              onChange={() => setIsThirdParty(!isThirdParty)}
            />
            <label htmlFor="thirdParty" className="font-bold text-primary-700">
              3rd Party
            </label>
          </div>
        </div>
        <div className="col-span-full mt-5 flex justify-center">
          <button
            className="flex items-center justify-center rounded bg-primary-700 px-4 py-2 text-center font-bold text-white hover:bg-pink-900"
            onClick={() => {
              window.location.href = href
            }}
          >
            <MagnifyingGlassIcon className="mr-2 h-5 w-5" />
            <span>Search</span>
          </button>
          {hasAppliedFilter && (
            <button
              className="ml-2 flex items-center justify-center rounded bg-gray-400 px-4 py-2 text-center font-bold text-gray-600 hover:bg-gray-800 hover:text-white"
              onClick={() => {
                window.location.href = targetPath
              }}
            >
              <ArrowPathIcon className="mr-2 h-5 w-5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>
    </>
  )
}
