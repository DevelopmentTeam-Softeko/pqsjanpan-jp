import YotpoWidget from '@/components/Common/YotpoWidget'

export default function Testimonials() {
  return (
    <section className="container mx-auto mb-20 w-full px-6">
      <div className="mb-10 text-center">
        <p className="text-center font-bold text-pink-600">Reviews</p>
        <h3 className="mb-4 text-center text-3xl font-semibold">
          Customer Reviews
        </h3>
        <p className="mx-auto w-full text-center text-xs text-slate-600 md:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
          inventore assumenda doloremque voluptas obcaecati omnis, ipsum quasi
          consectetur ipsam beatae?
        </p>
      </div>
      <YotpoWidget />
    </section>
  )
}
