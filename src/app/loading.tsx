export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div
      className={`container mx-auto my-8 w-full rounded-lg bg-white p-8 shadow-xl`}
    >
      {/* Shadow on the top */}
      <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-gray-100 via-transparent to-transparent"></div>
      {/* Shadow on the left */}
      <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-gray-100 via-transparent to-transparent"></div>
      {/* Shadow on the right */}
      <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-gray-100 via-transparent to-transparent"></div>

      {/* Content Loader */}
      <div
        className={`mx-auto mb-10 h-24 w-24 animate-spin rounded-full border-t-4 border-solid border-primary-700`}
      ></div>
      <div className="animate-pulse">
        {Array(6)
          .fill(1)
          .map(() => (
            <>
              <div className="mb-4 h-4 w-full rounded bg-gray-300"></div>
              <div className="mb-10 h-10 w-full rounded bg-gray-300"></div>
              <div className="mb-4 h-4 w-full rounded bg-gray-300"></div>
            </>
          ))}
      </div>
    </div>
  )
}
