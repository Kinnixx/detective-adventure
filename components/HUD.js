import useGameStore from "@/store/gameStore";

export default function HUD() {
  const { stats, inventory, statChanges } = useGameStore();

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between">
      {/* Zone des compétences */}
      <div className="flex gap-4 relative">
        {["charisme", "deduction", "chance"].map((stat) => (
          <div key={stat} className="relative">

            <p>
              {/* Affichage des caractéristiques avec une majuscule au début */}
              {stat === "charisme" ? "💬" : stat === "deduction" ? "🕵️" : "🍀"} {stat.charAt(0).toUpperCase() + stat.slice(1)} : {stats[stat]}
            </p>

            {/* Animation des changements de stat */}
            {statChanges.find(change => change.stat === stat) && (
              <span 
                className={`absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-lg font-bold ${
                  statChanges.find(change => change.stat === stat)?.value > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {statChanges.find(change => change.stat === stat)?.value > 0 ? "+" : "-"}
                {Math.abs(statChanges.find(change => change.stat === stat)?.value)} { /* Toujours afficher un nombre positif */ }
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Zone de l’inventaire */}
      <div className="flex gap-4">
        {inventory.length > 0 ? (
          inventory.map((item, index) => (
            <span key={index} className="bg-gray-700 px-3 py-1 rounded-md text-white">
              {item}
            </span>
          ))
        ) : (
          <p className="text-gray-400">Aucun objet</p>
        )}
      </div>
    </div>
  );
}
