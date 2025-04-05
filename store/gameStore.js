import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useGameStore = create(devtools((set) => ({
    step: 1,
    choices: [],
    stats: {
        charisme: 1,
        deduction: 1,
        chance: 1
    },
    inventory: [],
    statChanges: [],

    makeChoice: (nextStep, choice) => {
        set((state) => ({ 
            step: nextStep,
            choices: [...state.choices, choice] 
        }));

        if (choice.effects) {
            choice.effects.forEach(effect => {
              // Appliquer l'effet sur les stats
              const statName = effect.stat?.name?.toLowerCase();
              if (statName && typeof effect.stat_value === "number") {
                useGameStore.getState().updateStats(statName, effect.stat_value);
              }
          
              // Ajouter un objet si présent
              if (effect.item) {
                useGameStore.getState().addItem(effect.item);
              }
            });
        }
    },

    updateStats: (stat, value) => {
        set((state) => {
            let newStats = {...state.stats};
            // Les stats ne peuvent pas être négatives
            newStats[stat] = Math.max(0, newStats[stat] + value);

            return {
                stats: newStats,
                statChanges: [...state.statChanges, { stat, value }]
            };
        });

        // On retire l'animation du changement de stats après 1 seconde
        setTimeout(() => {
            set((state) => ({ 
                statChanges: state.statChanges.filter(change => change.stat !== stat) 
            }));
        }, 1000)
    },

    addItem: (item) => set((state) => ({
        inventory: state.inventory.some(i => i.id === item.id)
            ? state.inventory
            : [...state.inventory, item]
    })),

    useItem: (item) => set((state) => {
        useGameStore.getState().updateStats(item.affected_stat, item.affected_stat_value);

        return {
            // On retire l'objet de l'inventaire
            inventory: state.inventory.filter(i => i.id !== item.id)
        };
    }),    

    reset: () => set({ 
        step: 0, 
        choices: [] ,
        stats: { charisme: 1, deduction: 1, chance: 1 },
        inventory: []
    })

}), { name: "GameStore" })
);

export default useGameStore;