import { ContentPasteSearchOutlined } from "@mui/icons-material";

export async function registerReview(reviewForm) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/review/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // JSON 형식으로 데이터 전송
      },
      body: JSON.stringify(reviewForm), // reviewData를 JSON 형식으로 변환하여 본문에 포함
      credentials: "include",
    }
  );

  if (response.status === 409) {
    alert("이미 작성된 리뷰가 존재합니다!");
  } else if (!response.ok) {
    console.log(response);
    throw new Error("Failed to Fetch");
  } else {
    const data = await response.json();
    console.log(data);
    alert("리뷰가 작성되었습니다!");
    return data;
  }
}
