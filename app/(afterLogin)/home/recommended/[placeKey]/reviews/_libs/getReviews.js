export async function getReviews({ queryKey, pageParam = 0 }) {
  const [_1, placeKey] = queryKey; // queryKey에서 placeKey 추출
  console.log(`placeKey: ${placeKey}, page: ${pageParam}`);

  // placeKey와 page 쿼리 파라미터를 URL에 추가
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/review/getPlaceAllPaging?placeKey=${placeKey}&page=${pageParam}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["reviews", placeKey],
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to Fetch");
  }

  const data = await response.json();

  return {
    reviews: data.data.content, // 리뷰 목록
    hasMore: !data.data.last, // 마지막 페이지 여부
  };
}
