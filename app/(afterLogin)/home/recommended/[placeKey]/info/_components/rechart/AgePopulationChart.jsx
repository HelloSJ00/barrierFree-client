import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { parsePopulationData } from "../../_utils/rechartFn";

export function AgePopulationChart({ data }) {
  const agePopulationData = parsePopulationData(data);
  return (
    <ResponsiveContainer width={250} height={200}>
      <BarChart data={agePopulationData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="age" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="population" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

// 사용 예시
// const agePopulationData = parsePopulationData(apiResponse);
// <AgePopulationChart data={agePopulationData} />
