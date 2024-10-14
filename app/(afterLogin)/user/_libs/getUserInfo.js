export async function getUserInfo() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/findUser`,
    {
      method: "GET",
      credentials: "include", // 세션 쿠키 등을 포함해야 하는 경우
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json(); // 응답 데이터를 JSON으로 파싱
  console.log(data);
  return data;
}
