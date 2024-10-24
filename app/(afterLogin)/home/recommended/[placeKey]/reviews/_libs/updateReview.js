export async function deleteReview({ updateReviewForm }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/review/update`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json", // 서버에 JSON 데이터를 보낸다고 명시
      },
      body: JSON.stringify(updateReviewForm), // updateReviewForm을 JSON으로 변환하여 body에 넣음
    }
  );

  if (!response.ok) {
    throw new Error("리뷰 업데이트 실패");
  }

  return response.json().data;
}
