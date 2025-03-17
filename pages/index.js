import useGameStore from "@/store/gameStore";
import story from "@/data/story";

export default function Home() { 
  const { step, makeChoice } = useGameStore();
  const scene = story[step]; // récupération de la scène actuelle

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Detective Quest 🕵️</h1>
      <p className="mt-4 text-lg">{scene.text}</p>

      <div className="mt-6 flex flex-col gap-4">
        { scene.choices.map((choice, index) => (
          <button key={index} 
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded text-white" 
            onClick={() => makeChoice(choice.next, index)}
          >
            {choice.text}
          </button>
        )) }
      </div>
    </div>
  );
}