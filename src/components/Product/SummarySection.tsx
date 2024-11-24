import React from 'react'

interface Props {
  mileage: string
  year: string
  engine: string
  trans: string
  fuel: string
  grade?: string
  color?: string
  steering?: string
  drivetrain?: string
  chassisCode?: string
}
export default React.memo(function SummarySection(props: Props) {
  const items = [
    { key: 'Mileage', value: props?.mileage },
    { key: 'Year', value: props?.year },
    { key: 'Engine', value: props?.engine },
    { key: 'Trans.', value: props?.trans },
    { key: 'Fuel', value: props?.fuel },
    { key: 'Grade', value: props?.grade },
    { key: 'Color', value: props?.color },
    { key: 'Steering', value: props?.steering },
    { key: 'Drivetrain', value: props?.drivetrain },
    { key: 'Chassis Code', value: props?.chassisCode },
  ]?.filter((i) => i?.value !== undefined)
  return (
    <section className="relative z-10 grid w-full grid-cols-5 items-center justify-center">
      {items.map((item, index) => (
        <div
          key={index}
          className={`border-r border-solid border-gray-400 p-1 text-center sm:p-2 lg:px-4 ${
            index === items.length - 1 || index === items.length / 2 - 1
              ? 'border-r-0'
              : ''
          }`}
        >
          <h3 className="text-xs text-primary-600 sm:text-lg">{item.key}</h3>
          <p className="text-xs sm:text-lg sm:font-semibold">{item.value}</p>
        </div>
      ))}
    </section>
  )
})
