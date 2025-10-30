// src/store/formStore.js
import { create } from 'zustand';

const useFormStore = create((set) => ({
  formData: {
    name: '',
    email: '',
    age: '',
    address: ''
  },
  setFormData: (data) => set({ formData: data }),
}));

export default useFormStore;
