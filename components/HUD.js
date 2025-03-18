import { useState } from "react";
import useGameStore from "@/store/gameStore";
import { motion } from "framer-motion";

export default function HUD() {
  const { stats, inventory, statChanges } = useGameStore();
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Zone des compétences */}
      <div className="flex gap-4 relative">
        {["charisme", "deduction", "chance"].map((stat) => (
          <div key={stat} className="relative">

            <p>
              {stat === "charisme" ? "💬" : stat === "deduction" ? "🕵️" : "🍀"} 
              {stat.charAt(0).toUpperCase() + stat.slice(1)} : {stats[stat]}
            </p>

            {/* Animation des changements de stat */}
            {statChanges.find(change => change.stat === stat) && (
              <span 
                className={`absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-lg font-bold ${
                  statChanges.find(change => change.stat === stat)?.value > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {statChanges.find(change => change.stat === stat)?.value > 0 ? "+" : "-"}
                {Math.abs(statChanges.find(change => change.stat === stat)?.value)}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Bouton pour ouvrir/fermer l’inventaire */}
      <button 
        className="bg-blue-500 px-3 py-1 rounded-md text-white hover:bg-blue-700 transition"
        onClick={() => setIsInventoryOpen(!isInventoryOpen)}
      >
        {isInventoryOpen ? "Fermer l'inventaire" : "Inventaire"}
      </button>

      {/* Animation de l’inventaire */}
      <motion.div
        initial={{ x: "100%" }} // Position initiale
        animate={{ x: isInventoryOpen ? "0%" : "100%" }} // Animation
        transition={{ type: "spring", stiffness: 100}} 
        className="fixed top-0 right-0 w-64 h-full bg-gray-900 p-4 shadow-lg overflow-y-auto text-white"
      >
        <h2 className="text-xl font-bold mb-4">Inventaire</h2>

        {/* Bouton pour fermer l'inventaire */}
        <button
          className="absolute top-4 right-4 text-gtay-400 hover:text-white"
          onClick={() => setIsInventoryOpen(false)}
        >
          ✖️
        </button>

        {/* Liste des objets dans l'inventaire */}
        {inventory.length > 0 ? (
          <ul className="space-y-2">
            {inventory.map((item, index) => (
              <li key={index} className="bg-gray-700 px-3 py-1 rounded-md text-white">
                {item}
              </li>  
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">Aucun objet</p>
        )}
      </motion.div>
      {/* Zone de l’inventaire */}
{/*       <div className="flex gap-4">
        {inventory.length > 0 ? (
          inventory.map((item, index) => (
            <span key={index} className="bg-gray-700 px-3 py-1 rounded-md text-white">
              {item}
            </span>
          ))
        ) : (
          <p className="text-gray-400">Aucun objet</p>
        )}
      </div> */}
    </div>
  );
}
