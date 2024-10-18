export async function getInfoDetails({ placeId }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/place/details?placeId=${placeId}`,
    {
      method: "GET",
      crudential: true,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to Fetch");
  }

  const data = response.json();
  return data.data;
}
