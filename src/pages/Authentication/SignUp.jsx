import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-6">
          <div className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
              <label className="block text-sm">Name</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md border-gray-700" {...register("name", { required: true })} />
              {errors.name && <span className="text-red-600">This field is required</span>}
            </div>
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="w-full px-3 py-2 border rounded-md border-gray-700"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-600">This field is required</span>}
            </div>
            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm">Password</label>
                <a className="text-xs hover:underline text-gray-600">Forgot password?</a>
              </div>
              <input
                type="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-700"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && <span className="text-red-600">Password should be at least 6 digit long</span>}
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
