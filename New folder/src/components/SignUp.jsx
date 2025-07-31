import { NavLink } from "react-router-dom";

export const SignUp = () => {
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-40">
      <form
        onSubmit={''}
        className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Create Your Account
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={''}
            onChange={''}
            className="w-full p-3 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )} */}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={''}
            onChange={''}
            className="w-full p-3 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )} */}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={''}
            onChange={''}
            className="w-full p-3 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )} */}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <NavLink to={"/login"} className="text-blue-600 hover:underline">Log in here</NavLink>
        </p>
      </form>
    </div>
  );
};
