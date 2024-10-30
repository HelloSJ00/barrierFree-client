export async function getPlaceCoordinate({ placeKey }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/place/coordinate?placeKey=${placeKey}`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("fail fetch");
  }

  const data = await response.json(); // JSON 응답을 기다림
  console.log(data);
  return data.data; // 필요한 데이터 반환
}
