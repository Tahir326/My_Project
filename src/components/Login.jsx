import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Use effect to check if the user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // Redirect to home if the user is already logged in
      navigate("/home");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://your-api-url.com/login", {
        email,
        password,
      });

      if (response.data.success) {
        // Save the token to localStorage (or any other storage method)
        localStorage.setItem("authToken", response.data.token);

        // Redirect to home page after successful login
        navigate("/home");
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      setError("An error occurred, please try again later.");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-lg w-96 flex  flex-col justify-center items-center "
      >
        <h2 className="text-center text-2xl mb-4">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <input
          type="email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-[35%] bg-blue-500 text-white p-2 rounded"
        >
          Login
        </button>
        <p className="text-center mt-4">
          Don&#39;t have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign up here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
