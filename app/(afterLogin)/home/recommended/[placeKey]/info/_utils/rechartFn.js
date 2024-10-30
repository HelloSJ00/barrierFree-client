// 연령별 인구 분포 데이터 추출
export function parsePopulationData(response) {
  if (!response || !response.PPLTN_RATE_LIST) {
    console.warn("PPLTN_RATE_LIST 속성이 없습니다.");
    return []; // 빈 배열 반환
  }

  const rawData = JSON.parse(response.PPLTN_RATE_LIST).data[0];
  return rawData.x.map((age, index) => ({
    age,
    population: rawData.y[index],
  }));
}

// 시간대별 예측 인구수 데이터 추출
export function parseForecastPopulationData(response) {
  if (!response || !response.FCST_PPLTN) {
    console.warn("FCST_PPLTN 속성이 없습니다.");
    return []; // 빈 배열 반환
  }

  return response.FCST_PPLTN.map((item) => ({
    time: item.FCST_TIME,
    minPopulation: parseInt(item.FCST_PPLTN_MIN, 10),
    maxPopulation: parseInt(item.FCST_PPLTN_MAX, 10),
    level: item.FCST_CONGEST_LVL,
  }));
}

// 성별 비율 데이터 추출
export function parseGenderPopulationData(response) {
  if (
    !response ||
    response.MALE_PPLTN_RATE == null ||
    response.FEMALE_PPLTN_RATE == null
  ) {
    console.warn("성별 비율 데이터가 없습니다.");
    return []; // 빈 배열 반환
  }

  return [
    { gender: "Male", rate: response.MALE_PPLTN_RATE },
    { gender: "Female", rate: response.FEMALE_PPLTN_RATE },
  ];
}
