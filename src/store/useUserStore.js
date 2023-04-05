import { create } from "zustand";

let userStore = (set) => ({
  user: {},

  fetch: async (id) => {
    const path = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(path);
    set({ user: await response.json() });
  },
});

export const useUserStore = create(userStore);
