export async function getInfoDetails() {
  const [_1, placeKey] = queryKey; // queryKey에서 placeId 추출

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/place/details?placeKey=${placeKey}`,
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
