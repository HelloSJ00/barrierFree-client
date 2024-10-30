import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { parseForecastPopulationData } from "../../_utils/rechartFn";

export function ForecastPopulationChart({ data }) {
  const forecastPopulationData = parseForecastPopulationData(data);
  return (
    <ResponsiveContainer width={250} height={200}>
      <LineChart data={forecastPopulationData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="minPopulation" stroke="#82ca9d" />
        <Line
          type="monotone"
          dataKey="maxPopulation"
          stroke="#8884d8"
          fillOpacity={0.3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

// 사용 예시
// const forecastPopulationData = parseForecastPopulationData(apiResponse);
// <ForecastPopulationChart data={forecastPopulationData} />
