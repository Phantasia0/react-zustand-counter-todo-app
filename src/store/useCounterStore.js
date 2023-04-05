import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

let counterStore = (set) => ({
  count: 1,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set((state) => ({ count: 1 })),
  setNumber: (number) => set((state) => ({ count: number })),
});

counterStore = devtools(counterStore);
counterStore = persist(counterStore, { name: "counter" });

export const useCounterStore = create(counterStore);
