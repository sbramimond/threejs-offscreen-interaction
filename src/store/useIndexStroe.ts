import {create} from 'zustand';

interface State {
    count: number;
    increment: () => void;
}

export default create<State>((set) => ({
    count: 1,
    increment: () => set((state) => ({count: state.count + 1})),
}));
