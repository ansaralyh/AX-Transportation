import { useMutation } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { login } from "../../services/outhServices";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// ✅ Schema Validation using Zod
const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Please enter email")
    .email("Invalid email format")
    .max(30, "Email should not be greater than 30 characters."),
  password: z
    .string()
    .min(1, "Please enter password")
    .max(15, "Password should not be greater than 15 characters."),
});

// ✅ Infer TypeScript Type
type SignInFormData = z.infer<typeof signInSchema>;

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  // ✅ React Hook Form Setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  // ✅ TanStack Query Mutation for Login
  const { mutate, isPending } = useMutation({
    mutationFn: (data: { email: string; password: string }) => login(data),
  });

  // ✅ Handle Form Submission
  const onSubmit = (data: SignInFormData) => {
    setError(null);
    mutate(data, {
      onSuccess: () => {
        navigate("/admin-dashboard/");
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (err: any) => {
        const errorMessage =
          err.response?.data?.message || "Login failed. Please try again.";
        setError(errorMessage);
      },
    });
  };

  return (
    <div className="flex flex-col h-screen md:flex-row-reverse bg-gray-200">
      {/* Right Section - Image */}
      <div className="w-full h-64 md:w-1/2 md:h-full">
        <img
          src="/assets/truck.jpg"
          alt="Truck"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left Section - SignIn Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6 md:p-10">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-2xl">
          <div className="flex justify-center mb-6">
            <img src="/assets/image 54.png" alt="Logo" className="h-10" />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
          <p className="text-gray-600 text-center mb-6">
            Enter details to login to your account
          </p>

          {/* ✅ Form with handleSubmit */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Input */}
            <input
              type="text"
              placeholder="E-mail"
              {...register("email")}
              className="w-full px-4 py-2 mb-2 bg-gray-100 rounded focus:bg-gray-200 focus:outline-none hover:bg-gray-200 transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full px-4 py-2 mb-2 bg-gray-100 rounded focus:bg-gray-200 focus:outline-none hover:bg-gray-200 transition"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-orange-500 text-white py-2 rounded mt-4 hover:bg-orange-600 transition"
            >
              {isPending ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Social Sign In Buttons */}
          <div className="flex flex-col md:flex-row justify-between mt-4 gap-2">
            <button className="flex items-center justify-center px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 transition w-full">
              Sign in with Google
            </button>
            <button className="flex items-center justify-center px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 transition w-full">
              Sign in with Facebook
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-orange-500 hover:underline">
              Sign up
            </Link>
          </p>

          {/* Register Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <Link to="/driver-form">
              <button className="bg-orange-200 text-black py-2 px-4 rounded flex items-center justify-center gap-2 shadow-md hover:bg-orange-300 transition w-full">
                <FaUser className="text-black" /> Driver Register
              </button>
            </Link>
            <Link to="/">
              <button className="bg-orange-200 text-black py-2 px-4 rounded flex items-center justify-center gap-2 shadow-md hover:bg-orange-300 transition w-full">
                <FaUser className="text-black" /> Admin Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
