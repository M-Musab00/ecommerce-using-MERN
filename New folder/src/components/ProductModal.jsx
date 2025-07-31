// import { useState, useEffect } from "react";

export default function ProductModal() {


  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">
          
        </h2>
        <form onSubmit={''} className="space-y-4">
          <input
            name="name"
            placeholder="Product Name"
            value={''}
            onChange={''}
            className="w-full border p-2 rounded"
          />
          <input
            name="price"
            placeholder="Price"
            type="number"
            value={''}
            onChange={''}
            className="w-full border p-2 rounded"
          />
          <input
            name="category"
            placeholder="Category"
            value={''}
            onChange={'handleChange'}
            className="w-full border p-2 rounded"
          />
          <input
            name="color"
            placeholder="Color"
            value={''}
            onChange={''}
            className="w-full border p-2 rounded"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={''}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {/* {initialData ? "Update" : "Save"} */}Update | Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
