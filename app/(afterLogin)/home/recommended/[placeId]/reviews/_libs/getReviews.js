export async function getReviews({ queryKey }) {
  const [_1, searchParams] = queryKey;
  const response = await fetch("리뷰들 서버주소", {
    next: {
      tags: ["reviews", searchParams.placeKey],
    },
  });

  if (!response.ok) {
    throw new Error("Failed to Fetch");
  }
  return response.json;
}
