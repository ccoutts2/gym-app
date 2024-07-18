import { SelectedMuscleProvider, useSelectedMuscleContext } from "@/app/contexts";

interface ExerciseNameProps {
  name: string;
}

enum MuscleGroup {
  ABDOMINALS = "abdominals",
  ABDUCTORS = "abductors",
  BICEPS = "biceps",
  CALVES = "calves",
  CHEST = "chest",
  FOREARMS = "forearms",
  GLUTES = "glutes",
  HAMSTRINGS = "hamstrings",
  LATS = "lats",
  NECK = "neck",
  QUADRICEPS = "quadriceps",
  TRAPS = "traps",
  TRICEPS = "triceps",
}

const exerciseName: ExerciseNameProps[] = [
  { name: "abdominals" },
  { name: "abductors" },
  { name: "biceps" },
  { name: "calves" },
  { name: "chest" },
  { name: "forearms" },
  { name: "glutes" },
  { name: "hamstrings" },
  { name: "lats" },
  { name: "neck" },
  { name: "quadriceps" },
  { name: "traps" },
  { name: "triceps" },
];

interface ExerciseProps {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
}

const ExerciseList = () => {
  const { selectedMuscle, setSelectedMuscle, exercises } =
    useSelectedMuscleContext();

  return (
    <div className="flex flex-wrap w-full gap-4 py-4">
      <h2 className="text-lg w-full">Select a muscle group:</h2>
      {exerciseName.map((exercise, index) => (
        <ArticleWrapper onClick={() => exercise.name} key={index}>
          {exercise.name}
        </ArticleWrapper>
      ))}
      {exercises.map((exercise: string, index) => (
        <ArticleWrapper key={index}>{exercise.name}</ArticleWrapper>
      ))}
    </div>
  );
};

export default ExerciseList;

interface ArticleWrapperProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const ArticleWrapper = ({ children }: ArticleWrapperProps) => {
  const { onClick } = useSelectedMuscleContext();
  return (
    <article
      onClick={() => onClick}
      className="border text-sm bg-[#f6f6f6] py-2 px-4 rounded-xl shadow-md flex-3 capitalize">
      {children}
    </article>
  );
};
