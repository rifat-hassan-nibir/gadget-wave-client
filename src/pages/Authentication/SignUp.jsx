import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container mx-auto flex justify-center px-4 lg:px-6 py-8 lg:py-12">
      <div className="w-full max-w-md p-5 sm:p-8 rounded-md shadow-lg shadow-gray-100 border bg-white">
        <h2 className="mb-3 text-3xl font-semibold text-center">Create an account</h2>
        <p className="text-sm text-center text-gray-600">
          Already have account?{" "}
          <span>
            <Link to="/sign-in" className="text-primary underline">
              Login here
            </Link>
          </span>
        </p>

        {/* Register Form */}
        <form className="space-y-8 mt-6">
          <div className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
                Name
              </label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="your name"
                className="w-full px-3 py-2 border rounded-md border-gray-700"
              />
            </div>
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-700"
              />
            </div>
            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a className="text-xs hover:underline text-gray-600">Forgot password?</a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-700"
              />
            </div>
          </div>
          <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
