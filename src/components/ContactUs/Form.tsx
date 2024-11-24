'use client'

import React from 'react'

export default React.memo(function ContactForm() {
  return (
    <div className="flex-1">
      <h2 className="mb-4 text-3xl font-semibold">Still need help?</h2>
      <form action="#" className="grid grid-cols-2 gap-4 lg:gap-6">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="Enter your Full Name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            E-mail Address
          </label>
          <input
            type="email"
            id="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="Email Address"
            required
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            City
          </label>
          <input
            type="text"
            id="City"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="City"
            required
          />
        </div>
        <div>
          <label
            htmlFor="port"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Nearest Port
          </label>
          <input
            type="text"
            id="port"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="port"
            required
          />
        </div>
        <div>
          <label
            htmlFor="country"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="port"
            required
          />
        </div>
        <div>
          <label
            htmlFor="mobile"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Mobile No.
          </label>
          <input
            type="text"
            id="mobile"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="Mobile No."
            required
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="address"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Your Address
          </label>
          <textarea
            id="address"
            rows={2}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="address..."
          ></textarea>
        </div>
        <div className="col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={6}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="rounded-lg bg-primary-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:w-fit"
        >
          Send message
        </button>
      </form>
    </div>
  )
})
