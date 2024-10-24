export async function deleteReview(placeKey) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/review/delete?placeKey=${placeKey}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("리뷰 삭제 실패");
  }

  return response.json().data;
}
