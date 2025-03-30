import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useGameStore = create(devtools((set) => ({
    step: 1,
    choices: [],
    stats: {
        charisme: 1,
        déduction: 1,
        chance: 1
    },
    inventory: [],
    statChanges: [],

    makeChoice: (nextStep, choice) => {
        set((state) => ({ 
            step: nextStep,
            choices: [...state.choices, choice] 
        }));

        // Appliquer les effets des choix (si présents)
        if(choice.effects) {
            choice.effects.forEach(effect => {
                useGameStore.getState().updateStats(effect.stat, effect.value);
            });
        }

        // Ajoute les objets à l'inventaire (si présents)
        if(choice.items) {
            choice.items.forEach(item => {
                useGameStore.getState().addItem(item);
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
        inventory: state.inventory.some(i => i.object === item.object)
            ? state.inventory
            : [...state.inventory, item]
    })),

    useItem: (item) => set((state) => {
        useGameStore.getState().updateStats(item.use.stat, item.use.value);

        return {
            // On retire l'objet de l'inventaire
            inventory: state.inventory.filter(i => i.object !== item.object)
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