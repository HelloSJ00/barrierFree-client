// 모델 학습 서버로 리뷰를 보내는 함수
export async function registerReviewAI(reviewForm) {
  console.log(JSON.stringify(reviewForm));
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AI_URL}/review/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // JSON 형식으로 데이터 전송
      },
      body: JSON.stringify(reviewForm),
    }
  );

  if (!response.ok) {
    console.log(response);
    throw new Error("Failed to send data to AI server");
  } else {
    const data = await response.json();
    console.log(data);
    alert("모델 학습을 위한 리뷰 전송이 완료되었습니다!");
    return data;
  }
}

// 서버에 리뷰를 저장하는 함수
export async function registerReview(reviewForm) {
  console.log(JSON.stringify(reviewForm));
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/review/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // JSON 형식으로 데이터 전송
      },
      body: JSON.stringify(reviewForm),
      credentials: "include",
    }
  );

  if (response.status === 409) {
    alert("이미 작성된 리뷰가 존재합니다!");
  } else if (!response.ok) {
    console.log(response);
    throw new Error("Failed to save review on the server");
  } else {
    const data = await response.json();
    console.log(data);
    alert("리뷰가 작성되었습니다!");

    // 서버에 리뷰 저장 성공 후 모델 학습 서버로 데이터 전송
    // await registerReviewAI(reviewForm);

    return data;
  }
}
