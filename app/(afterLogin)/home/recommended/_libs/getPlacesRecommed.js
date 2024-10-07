export async function getPlacesRecommend() {
  const response = await fetch("추천장소받는 서버주소", {
    next: {
      tags: ["places", "recommends"],
    },
  });

  if (!response.ok) {
    throw new Error("Failed to Fetch");
  }
  return response.json;
}
