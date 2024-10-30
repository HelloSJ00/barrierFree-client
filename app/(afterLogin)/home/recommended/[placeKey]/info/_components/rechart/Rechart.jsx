import React from "react";
import { AgePopulationChart } from "./AgePopulationChart";
import { ForecastPopulationChart } from "./ForecastPopulationChart";
import { GenderPopulationChart } from "./GenderPopulationChart";
import { Typography, Box, Paper, Divider } from "@mui/material";

const Rechart = ({ apiResponse }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 800,
        mx: "auto",
        p: 3,
      }}
    >
      {/* 상단 박스 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          mb: 3,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: 300,
            p: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            혼잡도: {apiResponse.AREA_CONGEST_LVL}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {apiResponse.AREA_CONGEST_MSG}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="subtitle1">
            자외선 지수: {apiResponse.UV_INDEX_LVL}
          </Typography>
          <Typography variant="subtitle1">
            대기환경지수: {apiResponse.AIR_IDX_MVL}
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ width: 250, p: 2, textAlign: "center" }}>
          <GenderPopulationChart data={apiResponse} />
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{ mt: 1, display: "block" }}
          >
            실시간 인구 성비
          </Typography>
        </Paper>
      </Box>

      {/* 그래프 박스 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Paper elevation={3} sx={{ width: 300, p: 2, textAlign: "center" }}>
          <AgePopulationChart data={apiResponse} />
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{ mt: 1, display: "block" }}
          >
            실시간 연령 분포
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ width: 300, p: 2, textAlign: "center" }}>
          <ForecastPopulationChart data={apiResponse} />
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{ mt: 1, display: "block" }}
          >
            시간대별 예측 인구
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Rechart;
