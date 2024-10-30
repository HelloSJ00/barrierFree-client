export async function getRecommendPlaces() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AI_URL}/recommendation/38741`,
    {
      method: "GET",
      credentials: "include",
      next: {
        tags: ["places", "recommends"], // 캐시 태그 지정
      },
    }
  );

  if (!response.ok) {
    throw new Error("fail fetch");
  }

  const data = response.json();
  console.log(data);
  return data;
}
/*
  interface recommendPlaces = [{ 장소 이름, 장소 키, 위도, 경도, 북마크 여부}]
*/
