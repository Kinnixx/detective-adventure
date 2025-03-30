import { useState } from "react";
import useGameStore from "@/store/gameStore";
import { motion } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function HUD() {
  const { stats, inventory, statChanges, useItem } = useGameStore();
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isDialogInfosOpen, setIsDialogInfosOpen] = useState(false);
  const [currentInfosData, setCurrentInfosData] = useState("");

  const handleItemUse = (item) => {
    if(item.type === 'affectStats') {
      useItem(item);
    } else if(item.type === 'infos') {
      setCurrentInfosData(item)
      setIsDialogInfosOpen(true);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center">
      
      {/* Zone des compétences */}
      <div className="flex gap-4 relative max-w-full sm:max-w-[80%]">
        <Tooltip.Provider delayDuration={300}>
          {["charisme", "déduction", "chance"].map((stat) => (
            <div key={stat} className="relative">
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <p>{stat === "charisme" ? "💬" : stat === "déduction" ? "🕵️" : "🍀"} {stats[stat]}</p>
                </Tooltip.Trigger>
                <Tooltip.Content className="TooltipContent bg-gray-800 rounded px-2 py-1 text-white border border-gray-600 shadow-md text-sm" sideOffset={8}>
                  { stat.charAt(0).toUpperCase() + stat.slice(1) }
                </Tooltip.Content>
              </Tooltip.Root>

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
        </Tooltip.Provider>
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
        className="fixed top-0 right-0 h-full w-full sm:w-64 bg-gray-900 p-4 shadow-lg overflow-y-auto text-white"
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
              <li key={index} className={`bg-gray-700 px-3 py-1 rounded-md ${item.type ? "text-emerald-200" : "text-white"}`}>
                {item.type !== "affectChoices" && (
                  <button onClick={() => handleItemUse(item)}>
                    {item.type === 'affectStats' ? "✋" : item.type === 'infos' ? "🔍" : ""} 
                  </button>
                )}
                <span>{item.object}</span> 
              </li>  
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">Aucun objet</p>
        )}
      </motion.div>

      {isDialogInfosOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" role="dialog" aria-modal="true">
          <div className="bg-gray-800 p-6 rounded shadow-md max-w-md w-full">
            <h3 className="text-lg font-bold mb-2">{currentInfosData.object}</h3>
            <p className="text-white">{currentInfosData.content}</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => setIsDialogInfosOpen(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}

    </div>

  );
}
