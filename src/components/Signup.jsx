import { useState} from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  // const [emailExists, setEmailExists] = useState(false);
  const navigate = useNavigate();

  // // Check if the email already exists in the system
  // useEffect(() => {
  //   const checkEmail = async () => {
  //     if (email) {
  //       try {
  //         const response = await axios.get(`https://your-api-url.com/check-email?email=${email}`);
  //         setEmailExists(response.data.exists);
  //       } catch (error) {
  //         console.error("Error checking email", error);
  //         setEmailExists(false);
  //       }
  //     }
  //   };

  //   checkEmail();
  // }, [email]); // Only run when the email changes

  const handleSignup = async (e) => {
    e.preventDefault();

    // // Check if passwords match
    // if (password !== confirmPassword) {
    //   setError("Passwords do not match");
    //   return;
    // // }

    // if (emailExists) {
    //   setError("Email is already in use");
    //   return;
    // }

    try {
      // Make API request to register user
      const response = await axios.post("https://your-api-url.com/signup", {
        name,
        email,
        password,
      });

      if (response.data.success) {
        // Redirect to login page after successful signup
        navigate("/");
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred, please try again later.");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-center text-2xl mb-4">Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Name Input */}
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email Input */}
        <input
          type="email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* {emailExists && <p className="text-red-500">Email is already taken</p>} */}

        {/* Password Input */}
        <input
          type="password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Sign Up
        </button>

        {/* Login Link */}
        <p className="text-center mt-4">
          Already have an account?{" "}

          <Link to = "/login" className="text-green-800">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
