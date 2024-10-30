import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import { parseGenderPopulationData } from "../../_utils/rechartFn";

const COLORS = ["#0088FE", "#FF8042"];

export function GenderPopulationChart({ data }) {
  // 데이터가 올바르게 파싱되었는지 확인
  const genderPopulationData = parseGenderPopulationData(data);
  if (
    !Array.isArray(genderPopulationData) ||
    genderPopulationData.length === 0
  ) {
    return <p>데이터가 없습니다.</p>;
  }

  // Custom label function for displaying text inside each pie slice
  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const gender = genderPopulationData[index].gender;
    const rate = (percent * 100).toFixed(1); // Convert fraction to percentage

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${gender}: ${rate}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width={200} height={200}>
      <PieChart>
        <Tooltip formatter={(value, name) => `${name}: ${value}%`} />
        <Pie
          data={genderPopulationData}
          dataKey="rate"
          nameKey="gender"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          labelLine={false}
          label={renderCustomLabel} // Custom label added here
        >
          {genderPopulationData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
