"use client";

import { Dispatch, SetStateAction, ReactNode } from "react";
import { createContext, useContext, useState } from "react";

import { getExercises } from "../utils/getExercises";

type SelectedMuscle = {
  name: string;
};

interface SelectedMuscleContextType {
  selectedMuscle: SelectedMuscle | null;
  setSelectedMuscle: Dispatch<SetStateAction<SelectedMuscle | null>>;
  exercises: string;
  onClick: () => void;
  name: string;
}

const SelectedMuscleContext = createContext<SelectedMuscleContextType | null>(null);

export const useSelectedMuscleContext = () => {
  return useContext(SelectedMuscleContext) as SelectedMuscleContextType;
};

export const SelectedMuscleProvider = async ({
  children,
}: {
  children: ReactNode;
}) => {
  const exercises = await getExercises();
  const [selectedMuscle, setSelectedMuscle] = useState<SelectedMuscle | null>(null);

  if (!selectedMuscle) return;

  const onClick = (muscle: string) => {
    setSelectedMuscle(muscle.name);
  };

  return (
    <SelectedMuscleContext.Provider
      value={{ selectedMuscle, setSelectedMuscle, exercises, onClick }}>
      {children}
    </SelectedMuscleContext.Provider>
  );
};
