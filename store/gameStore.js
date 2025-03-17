import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useGameStore = create(devtools((set) => ({
    step: 0,
    choices: [],
    makeChoice: (nextStep, choice) => set((state) => ({ 
        step: nextStep,
        choices: [...state.choices, choice] 
    })),
    reset: () => set({ step: 0, choices: [] })
}), { name: "GameStore" })
);

export default useGameStore;