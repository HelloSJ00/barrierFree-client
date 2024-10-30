export async function getInfoDetails({ queryKey }) {
  const [_1, placeKey] = queryKey; // queryKey에서 placeId 추출
  console.log("getInfoDetails", placeKey);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SECOND_AI_URL}/place_detail/${placeKey}`,
    {
      method: "GET",
      crudential: true,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to Fetch");
  }
  // console.log(response);

  const data = await response.json();
  console.log(data);
  return data;
}
