import { create } from 'zustand';

type EditState = {
	edit: boolean;
	toggle: () => void;
};

export const useEdit = create<EditState>((set) => ({
	edit: false,
	toggle: () => set((state) => ({ edit: !state.edit })),
}));
