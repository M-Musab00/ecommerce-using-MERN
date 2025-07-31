import React from "react";

export default function Cart({curElem}) {
  return (
    <div>
      <div className="min-h-screen bg-gray-50 p-8 text-gray-800 mt-30">
        <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>

        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="flex items-center justify-between bg-white p-4 rounded shadow">
            <div className="flex items-center gap-4">
              <img src='' alt="" className="w-24 rounded" />
              <div>
                <h2 className="text-lg font-semibold"></h2>
                <p className="text-gray-600">$</p>
                <div className="flex items-center gap-2 mt-2">
                  <button>-</button>
                  <span></span>
                  <button>+</button>
                </div>
              </div>
            </div>
            <div>
              <button >
                Remove
              </button>
            </div>
          </div>
          
          {/* Cart Summary */}
          <div className="text-right mt-8">
            <p className="text-xl font-bold">Total:</p>
            <button className="mt-4 px-6 py-2">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
