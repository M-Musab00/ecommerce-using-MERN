import ProductModal from "./ProductModal";

export default function ProductDashboard() {
//   const [products, setProducts] = useState([]);

//   const [showModal, setShowModal] = useState(false);


  return (
    <div className="max-w-6xl mx-auto p-6 rounded-lg shadow mt-30">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Product Dashboard</h1>
        <button
          onClick={''}
          className="bg-green-600 px-4 py-2 rounded"
        >
          + Add Product
        </button>
      </div>

      
        <p className="">No products yet.</p>
      
        <table className="w-full table-auto border border-gray-200">
          <thead>
            <tr className="text-left">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Color</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            
              <tr key={''} className="border">
                <td className="p-2"></td>
                <td className="p-2">$</td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2">
                  <button
                    onClick={''}
                    className="text-blue-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    // onClick={() => handleDelete(prod.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
           
          </tbody>
        </table>
      
    </div>
  );
}
