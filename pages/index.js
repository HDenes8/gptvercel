/* Structure Overview:
- /frontend: Next.js app with Tailwind and Framer Motion
- /backend: API routes to interact with Neon DB
- /database: SQL schema to create tables in Neon */

// 1. Frontend - Next.js (pages/index.js)
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/api/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <motion.h1 className="text-3xl font-bold text-center mb-6" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
        Car Rental Service
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cars.map((car) => (
          <motion.div key={car.id} className="bg-white p-4 rounded-lg shadow-md" whileHover={{ scale: 1.05 }}>
            <h2 className="text-xl font-semibold">{car.model}</h2>
            <p className="text-gray-600">{car.brand}</p>
            <Link href={`/car/${car.id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
