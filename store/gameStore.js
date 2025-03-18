import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useGameStore = create(devtools((set) => ({
    step: 0,
    choices: [],
    stats: {
        charisme: 1,
        deduction: 1,
        chance: 1
    },
    inventory: [],
    statChanges: [],

    makeChoice: (nextStep, choice) => set((state) => ({ 
        step: nextStep,
        choices: [...state.choices, choice] 
    })),

    updateStats: (stat, value) => {
        set((state) => ({
        stats: {...state.stats, [stat]: state.stats[stat] + value },
        statChanges: [...state.statChanges, { stat, value }]
        }));

        // On retire l'animation du changement de stats après 1 seconde
        setTimeout(() => {
            set((state) => ({ 
                statChanges: state.statChanges.filter(change => change.stat !== stat) 
            }));
        }, 1000)
    },

    addItem: (item) => set((state) => ({
        inventory: [...state.inventory, item]
    })),

    reset: () => set({ 
        step: 0, 
        choices: [] ,
        stats: { charisme: 1, deduction: 1, chance: 1 },
        inventory: []
    })

}), { name: "GameStore" })
);

export default useGameStore;