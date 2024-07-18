import { useSelectedMuscleContext } from "@/app/contexts";

import ExerciseList from "../components/ExerciceList/ExerciseList";
import PageHeader from "../components/PageHeader/PageHeader";

export default async function Page() {
  const SelectedMuscleProvider = useSelectedMuscleContext();
  return (
    <section className="p-4">
      <SelectedMuscleProvider>
        <PageHeader header="Exercises" />
        <ExerciseList />
      </SelectedMuscleProvider>
    </section>
  );
}
