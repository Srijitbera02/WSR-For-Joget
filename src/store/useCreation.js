import { create } from 'zustand';

const useCreation = create((set) => ({
  creationData: [], 

  addMonthData: (month, projects) => set((state) => {
    const newEntry = { month, projects };
    const updatedData = [ ...state.creationData,newEntry];

    // Keep only the last 10 entries
    const trimmedData = updatedData.slice(0, 10);

    return { creationData: trimmedData };
  }),

  clearCreationData: () => set({ creationData: [] })
}));

export default useCreation;