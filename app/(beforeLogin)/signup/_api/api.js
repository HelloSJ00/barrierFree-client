import axios from "axios";

export const checkEmailAvailability = async (email) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/emailcheck`,
      { email }
    );
    return response.data; // 서버에서 온 응답 데이터 반환
  } catch (error) {
    console.error("Error checking email availability:", error);
    throw error;
  }
};

export const signup = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/register`,
      formData, // formData를 서버로 전달
      {
        headers: {
          "Content-Type": "application/json", // 전송할 데이터 형식이 JSON임을 명시
        },
      }
    );
    return response.data; // 서버 응답 반환
  } catch (error) {
    console.error("회원가입 API 호출 중 오류:", error);
    throw error; // 에러를 상위 함수로 전달
  }
};
