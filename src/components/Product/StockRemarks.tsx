import React from 'react'

const StockRemarks = () => {
  return (
    <div className="mt-5 rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-bold">3rd Party Stock Remarks</h2>
      <ul className="list-inside list-disc space-y-2">
        <li>Look up the Import Regulation of your country for this vehicle.</li>
        <li>Dimension, M3, and Weight may differ from the mentioned size.</li>
        <li>
          Chassis No. is provided by the 3rd Party Supplier. The chassis number
          might be a temporary number so the chassis number can be changed
          before shipment.
        </li>
      </ul>
      <p className="mt-4 text-sm italic text-gray-600">
        In that case, the accurate chassis number will be updated on official
        documents. PQS JAPAN does not warrant the authenticity of the
        information.
      </p>
    </div>
  )
}

export default StockRemarks
