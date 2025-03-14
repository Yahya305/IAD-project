import { create } from 'zustand';

const useSectionStore = create((set) => ({
  currentSection: 'A', // Default to section A
  setCurrentSection: (section) => set({ currentSection: section }),
}));

export default useSectionStore;


// import useSectionStore from '../store/sectionStore';

// function YourComponent() {
//   const { currentSection, setCurrentSection } = useSectionStore();

//   return (
//     <div>
//       <h1>Current Section: {currentSection}</h1>
//       <button onClick={() => setCurrentSection('A')}>View Section A</button>
//       <button onClick={() => setCurrentSection('B')}>View Section B</button>
//     </div>
//   );
// }