export async function getBookmarked(page = 0) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/favoritePlace/list?page=${page}`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to Fetch");
  }

  const data = await response.json();
  console.log(data);

  return {
    REC_LIST: data.data.content, // 북마크된 장소 목록
    hasMore: !data.data.last, // 마지막 페이지인지 여부
  };
}
