import type { JSX } from "react";
import { useNavigate } from "react-router-dom";
import { SEO } from "../components/common";
const NotFound = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b0b0f] text-white px-6 text-center">
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist or has been moved."
        keywords="404, not found, page missing"
      />
      {/* BIG 404 */}
      <h1 className="text-8xl font-extrabold text-warmpink">404</h1>

      {/* MESSAGE */}
      <p className="text-2xl mt-4 font-semibold">Page Not Found</p>

      <p className="text-gray-400 mt-2 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>

      {/* BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-3 bg-warmpink hover:bg-pink-500 transition rounded-2xl font-semibold shadow-lg"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
