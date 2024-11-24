'use client'

import Image from 'next/image'
import Link from 'next/link'

const BestCar = () => {
  return (
    <section className="mt-8 bg-black lg:mt-52">
      <div className="container mx-auto grid grid-cols-1 items-center justify-center gap-6 px-6 md:grid-cols-2">
        <div className="relative py-20">
          <div className="mr-0 lg:mr-6">
            <p className="uppercase text-red-600">Recommended Car</p>
            <h3 className="text-2xl font-bold text-white">
              Not Sure Which Car is Best?
            </h3>
          </div>
          <div className="invisible absolute -right-14 bottom-0 lg:visible">
            <Image
              src="/person.png"
              width={250}
              height={200}
              alt="Not Sure Which Car is Best"
            />
          </div>
        </div>
        <div className="flex flex-col items-end py-12">
          <div className="w-full lg:w-1/2">
            <p className="mb-4 text-white">
              A car that is dependable and has a low risk of breakdowns is
              highly desirable
            </p>
            <Link
              href="/stock-list"
              className="flex items-center justify-center rounded bg-primary-700 px-3 py-2 text-center text-white hover:bg-pink-900"
            >
              Show Me Best Car
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestCar
