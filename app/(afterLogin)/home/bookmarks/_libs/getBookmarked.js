export async function getBookmarked() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/bookmark/getall`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to Fetch");
  }
  // 응답 본문을 JSON 형식으로 변환하여 반환
  const data = await response.json(); // 데이터를 추출하는 부분

  return data.data; // 추출된 데이터를 반환
}
