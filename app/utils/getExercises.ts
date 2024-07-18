export const getExercises = async () => {
  const baseURL = "https://api.api-ninjas.com/v1";
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (!apiKey) {
    throw new Error("API Key Not Found");
  }

  const res = await fetch(`${baseURL}/exercises?muscle=biceps`, {
    headers: {
      "X-Api-Key": apiKey,
    },
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error(`Error fetching exercises`);
  }

  return res.json();
};
