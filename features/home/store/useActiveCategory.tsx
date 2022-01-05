import create from "zustand";

interface IActiveCategoryStore {
	categories: string[];
	activeCategory: string;
	setActiveCategory: (category: string) => void;
}

const useActiveCategory = create<IActiveCategoryStore>((set) => ({
	categories: [],
	activeCategory: "",
	setActiveCategory: (activeCategory) =>
		set((state) => ({ ...state, activeCategory })),
}));

export default useActiveCategory;
