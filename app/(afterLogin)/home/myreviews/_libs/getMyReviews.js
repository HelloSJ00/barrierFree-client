export async function getMyReviews(page = 0) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/review/getMyallPaging?page=${page}`,
    {
      method: "GET", // GET 요청
      credentials: "include", // 쿠키를 포함하여 요청
      headers: {
        "Content-Type": "application/json", // 필요에 따라 Content-Type 헤더 추가
      },
      next: {
        tags: ["MyReviews"],
      },
    }
  );

  // 응답이 성공적인지 확인
  if (!response.ok) {
    throw new Error("Failed to Fetch");
  }

  // 응답 본문을 JSON 형식으로 변환하여 반환
  const data = await response.json(); // 데이터를 추출하는 부분

  return {
    reviews: data.data.content, // 북마크된 장소 목록
    hasMore: !data.data.last, // 마지막 페이지인지 여부
  };
}
