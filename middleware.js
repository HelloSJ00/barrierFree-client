import { NextResponse } from "next/server";

export async function middleware(req) {
  const sessionToken = req.cookies.get("session_token"); // 세션 토큰을 쿠키에서 가져옴

  // 세션 토큰이 없으면 로그인 페이지로 리다이렉트
  if (!sessionToken) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 쿠키를 수동으로 설정해서 fetch 요청 보내기
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/user/sessionCheck`,
    {
      headers: {
        Cookie: `session_token=${sessionToken}`, // 수동으로 쿠키 설정
      },
    }
  );

  if (res.status !== 200) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home/:path*"], // /home 이하의 모든 경로를 매칭
};
