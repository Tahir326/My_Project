import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Card = ({ card }) => {
    return (
      <div className="bg-white p-4 rounded shadow-md hover:shadow-lg">
        <img 
          src={card.image} 
          alt={card.title} 
          className="w-full h-48 object-cover rounded mb-4" 
        />
        <h3 className="text-lg font-bold mb-2">{card.title}</h3>
        <p className="text-gray-700 mb-4">{card.description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Learn More
        </button>
      </div>
    );
  };
  

const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch cards using axios
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("/data.json"); // Fetch data from the public folder
        setCards(response.data); // Save the card data to state
        setLoading(false);
      } catch (err) {
        console.log(err)
        setError("Error fetching cards");
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Main content */}
        <div className="w-2/3 p-4">
          <h2 className="text-2xl mb-4">Cards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
