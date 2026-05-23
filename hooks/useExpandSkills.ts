import { create } from 'zustand';

interface ExpandSkillsStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useExpandSkills = create<ExpandSkillsStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useExpandSkills;