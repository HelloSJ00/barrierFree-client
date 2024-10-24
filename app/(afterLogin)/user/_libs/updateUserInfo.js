export async function updateUserInfo(updateForm) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/userUpdate`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // 서버에 JSON 데이터임을 알리기 위해 Content-Type 헤더 설정
      },
      credentials: "include", // 세션 쿠키 등을 포함해야 하는 경우
      body: JSON.stringify(updateForm), // updateForm을 JSON 문자열로 변환하여 요청 본문에 포함
    }
  );

  console.log(updateForm);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch: ${response.status} ${response.statusText}`
    );
  }
  return response;
}
