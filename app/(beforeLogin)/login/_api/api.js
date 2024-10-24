import axios from "axios";

export const login = async (loginForm) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/login`,
      loginForm,
      {
        withCredentials: true, // 쿠키를 포함할 경우 설정
        headers: {
          "Content-Type": "application/json", // 전송할 데이터 형식이 JSON임을 명시
        },
      }
    );
    console.log(response.data);
    return response.data; // 서버 응답 반환
  } catch (error) {
    // console.error("로그인 API 호출 중 오류:", error);
    throw error; // 에러를 상위로 전달
  }
};
