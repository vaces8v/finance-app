import { create, StateCreator } from "zustand";
import { persist } from 'zustand/middleware'


interface stateName {
	userName: string;
}

interface actionName {
	addName: (value: string) => void;
	removeName: () => void;
}

const sliceName: StateCreator<stateName & actionName, [['zustand/persist', unknown]]> = (set) => ({
	userName: '',
	addName: (value: string) => {
		set({userName: value})
	},
	removeName: () => {
		set({userName: ''})
	}
})

export const useNameStore = create<stateName & actionName, [['zustand/persist', unknown]]>(
	persist(
		sliceName,
		{name: 'userName'}
	)
)