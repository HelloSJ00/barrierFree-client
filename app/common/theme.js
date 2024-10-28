// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Pretendard-Regular', Arial, sans-serif", // 폰트 설정 변경
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Pretendard-Regular';
          src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
          font-weight: 400;
          font-style: normal;
        }
        body, * {
          font-family: 'Pretendard-Regular', Arial, sans-serif; /* 모든 요소에 폰트 적용 */
        }
      `,
    },
  },
});

export default theme;
