export async function getUserInfo() {
  const response = await fetch("유저정보받는 서버주소", {
    next: {
      tags: ["userInfo"],
    },
  });

  if (!response.ok) {
    throw new Error("Failed to Fetch");
  }
  return response.json;
}
