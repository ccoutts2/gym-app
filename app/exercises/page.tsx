import PageHeader from "../components/PageHeader/PageHeader";

const getData = async () => {
  const baseURL = "https://api.api-ninjas.com/v1";
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
};

export default function Page() {
  return (
    <section>
      <PageHeader header="Exercises" />
    </section>
  );
}
