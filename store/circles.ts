import type CirclesState from "types/circles";
import { create } from "zustand";

const useCircles = create<CirclesState>(set => ({
  isEnabled: false,
  toggleCircles: () => set(state => ({ isEnabled: !state.isEnabled })),
}));

export default useCircles;
