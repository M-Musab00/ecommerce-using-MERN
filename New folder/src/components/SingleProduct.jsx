import React from 'react'

export default function SingleProduct() {
  return (
    <div>
            <div className="min-h-screen bg-gray-50 p-8 text-gray-800">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img
            src=''
            alt=''
            className="w-full rounded shadow"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4"></h1>
          <p className="text-gray-600 mb-4"></p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Color:</span>
          </p>
          <p className="text-2xl font-bold mb-6"></p>
          <button className="px-6 py-2">Add to Cart</button>
        </div>
      </div>
    </div>
    </div>
  )
}
