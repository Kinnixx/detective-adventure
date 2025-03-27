import useGameStore from "@/store/gameStore";
import story from "@/data/story";
import HUD from "@/components/HUD";
import { useEffect } from "react";
import supabase from "@/lib/supabase";

export default function Home() { 
  const { step, makeChoice, stats, inventory } = useGameStore();
  const scene = story[step]; // récupération de la scène actuelle

  useEffect(() => {
    const fetchScenes = async () => {
      const { data, error } = await supabase.from("scenes").select("*");
      if(error) {
        console.log("Erreur :", error);
      } else {
        console.log("Scènes récupérées :", data);
      }
    };

    fetchScenes();
  }, []);

  // Un choix peut être impossible à choisir si le joueur n'a pas la stat ou l'objet requis
  const isChoiceDisabled = (choice) => {
    const lacksStat = choice.requiredStat && stats[choice.requiredStat.stat] < choice.requiredStat.value;
    const lacksObject = choice.requiredObject && !inventory.some(item => item.object.toLowerCase() === choice.requiredObject.toLowerCase());

    return lacksStat || lacksObject;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <HUD />
      <h1 className="text-2xl font-bold mt-4 sm:text-4xl lg:text-5xl leading-tight">Detective Quest 🕵️</h1>
      <p className="mt-4 p-4 text-lg leading-relaxed sm:text-xl">{scene.text}</p>

      <div className="mt-6 flex flex-col gap-4">
        { scene.choices.map((choice, index) => {
          const isDisabled = isChoiceDisabled(choice);

          return (
            <div>
              <button key={index} 
                className={`px-4 py-3 text-sm sm:text-base w-full sm:w-auto rounded text-white ${isDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"}`} 
                onClick={() => {
                  makeChoice(choice.next, choice);
                }}
                disabled={isDisabled}
              >
                {choice.text}

                {/* Affichage des éléments requis */}
                {choice.requiredStat && (
                  <span className={`text-sm ${isDisabled ? "text-red-400" : "text-green-400"} ml-2`}>
                  (Requis : {choice.requiredStat.stat} {choice.requiredStat.value}+)
                </span>                  
                )}
                {choice.requiredObject && (
                  <span className={`text-sm ${isDisabled ? "text-red-400" : "text-green-400"} ml-2`}>
                  (Requis : {choice.requiredObject})
                </span>                  
                )}
              </button>
            </div>
          );

        })}
      </div>
    </div>
  );
}