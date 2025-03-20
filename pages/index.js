import useGameStore from "@/store/gameStore";
import story from "@/data/story";
import HUD from "@/components/HUD";

export default function Home() { 
  const { step, makeChoice, stats } = useGameStore();
  const scene = story[step]; // récupération de la scène actuelle

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <HUD />
      <h1 className="text-2xl font-bold mt-4 sm:text-4xl lg:text-5xl leading-tight">Detective Quest 🕵️</h1>
      <p className="mt-4 p-4 text-lg leading-relaxed sm:text-xl">{scene.text}</p>

      <div className="mt-6 flex flex-col gap-4">
        { scene.choices.map((choice, index) => {
          const isDisabled = choice.requiredStat && stats[choice.requiredStat.stat] < choice.requiredStat.value;
         
          return (
            <div>
              <button key={index} 
                className={`px-4 py-3 text-sm sm:text-base w-full sm:w-auto rounded text-white ${isDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"}`} 
                onClick={() => {
                  makeChoice(choice.next, choice);
                }}
                disabled={isDisabled}
              >
                {choice.text} {isDisabled && `(Requis: ${choice.requiredStat.stat} ${choice.requiredStat.value}+)`}
              </button>
            </div>
          );

        })}
      </div>
    </div>
  );
}