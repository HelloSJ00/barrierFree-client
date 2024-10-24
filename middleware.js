import { NextResponse } from "next/server";

export async function middleware(req) {
  // JSESSIONID 쿠키를 가져옴
  const jsessionId = req.cookies.get("JSESSIONID");
  console.log("JSESSIONID:", jsessionId); // 로그로 확인

  // JSESSIONID가 없으면 로그인 페이지로 리다이렉트
  if (!jsessionId) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 서버에 세션 검증 요청 (JSESSIONID를 함께 전송)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/sessionCheck`,
    {
      headers: {
        Cookie: `JSESSIONID=${jsessionId.value}`, // 쿠키를 수동으로 설정
      },
    }
  );

  console.log("Session check response:", res.status); // 응답 코드 확인

  // 응답 바디도 확인해보세요
  const data = await res.text();
  console.log("Session check response body:", data);

  // 세션이 유효하지 않으면 로그인 페이지로 리다이렉트
  if (res.status !== 200) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 세션이 유효하면 다음 단계로 넘어감
  return NextResponse.next();
}

// 특정 경로에 대해 미들웨어 적용
export const config = {
  matcher: ["/home/:path*"], // /home 이하의 모든 경로에 대해 미들웨어 적용
};
