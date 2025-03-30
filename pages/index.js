import useGameStore from "@/store/gameStore";
import HUD from "@/components/HUD";
import { useEffect, useState } from "react";
import { fetchFullScene } from "@/lib/queries";

export default function Home() { 
  const { step, makeChoice, stats, inventory } = useGameStore();
  const [scene, setScene] = useState(null);

  useEffect(() => {
    const loadScene = async () => {
      const scene = await (fetchFullScene(step));
      if(scene) {
        setScene(scene);
      }
    };

    loadScene();
  }, [step]);

  // Un choix peut être impossible à choisir si le joueur n'a pas la stat ou l'objet requis
  const isChoiceDisabled = (choice) => {
    const statName = choice.stat?.name?.toLowerCase();
    const itemName = choice.item?.name?.toLowerCase();
  
    const lacksStat = statName && (stats[statName] ?? 0) < choice.required_stat_value;
    const lacksObject = itemName && !inventory.some(item => item.name.toLowerCase() === itemName);
  
    return lacksStat || lacksObject;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <HUD />
      <h1 className="text-2xl font-bold mt-4 sm:text-4xl lg:text-5xl leading-tight">Detective Quest 🕵️</h1>

      {scene ? (
        <>
        <p className="mt-4 p-4 text-lg leading-relaxed sm:text-xl">{scene.text}</p>

        <div className="mt-6 flex flex-col gap-4">
          { scene.choices.map((choice, index) => {
            const isDisabled = isChoiceDisabled(choice);

            return (
              <div>
                <button key={index} 
                  className={`px-4 py-3 text-sm sm:text-base w-full sm:w-auto rounded text-white ${isDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"}`} 
                  onClick={() => {
                    makeChoice(choice.next_scene_id, choice);
                  }}
                  disabled={isDisabled}
                >
                  {choice.text}
                  

                  {/* Affichage des éléments requis */}
                  {choice.stat && (
                    <span className={`text-sm ${isDisabled ? "text-red-400" : "text-green-400"} ml-2`}>
                    (Requis : {choice.stat.name} {choice.required_stat_value}+)
                  </span>                  
                  )}
                  {choice.item && (
                    <span className={`text-sm ${isDisabled ? "text-red-400" : "text-green-400"} ml-2`}>
                    (Requis : {choice.item.name})
                  </span>                  
                  )}
                </button>
              </div>
            );

          })}
        </div>
        </>
        ) : (
          <p>Chargement...</p>
      )}
    </div>
  );
}