
import products from "../services/Products";
import SingleProduct from "./SingleProduct";

export default function Body() {

  return (
    <>
    <div className="my-35">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-[#888888] to-[#000000] text-white">
        <h2 className="text-4xl font-extrabold mb-4">
          Discover the Latest Trends
          {/* <Link to={"/SingleProduct"}>SingleProduct</Link> */}
        </h2>
        <p className="text-lg mb-6">
          Shop the best products at unbeatable prices.
        </p>
        <button className="text-lg px-6 py-3 bg-white text-indigo-600 hover:bg-gray-100">
          Shop Now
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-8 bg-[#ffffff]">
        <h3 className="text-3xl font-bold text-center mb-12">
          Why Shop With Us?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-2">Free Shipping</h4>
            <p>On all orders over $50, enjoy fast and free delivery.</p>
          
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
            <p>We’re always here to help with any questions or concerns.</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-2">Secure Payments</h4>
            <p>All payments are protected with top-tier security measures.</p>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section id="products" className="py-16 px-8">
        <h3 className="text-3xl font-bold text-center mb-12">
          Featured Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black ">
          {products.map((curElem) => (
            <div id={curElem.id} className="border p-4 rounded shadow bg-white">
            <div className="h-60 bg-gray-200 mb-4 "><img src={curElem.image} className="h-full w-full object-cover" alt="" /></div>
            <h2 className="text-xl font-semibold mb-1">{curElem.name}</h2>
            <p className="text-gray-600 capitalize"></p>
            <p className="text-gray-600 capitalize">Color: {curElem.colors.join(" ",",")}</p>
            <p className="font-bold text-lg">$ {curElem.price}</p>
            <button className="mt-2" onClick={<SingleProduct singleProduct={curElem}/>}>Add to Cart</button>
          </div>
          ))}
        </div>
      </section>
    </div>
    
          
    </>
  );
}
