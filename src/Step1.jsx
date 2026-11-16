import { RechartsDevtools } from '@recharts/devtools';
import { Line, LineChart } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'روز A',
    net: 400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'روز B',
    net: 300,
    pv: 4567,
    amt: 2400,
  },
  {
    name: 'روز C',
    net: 320,
    pv: 1398,
    amt: 2400,
  },
  {
    name: 'روز D',
    net: 200,
    pv: 9800,
    amt: 2400,
  },
  {
    name: 'روز E',
    net: 278,
    pv: 3908,
    amt: 2400,
  },
  {
    name: 'روز F',
    net: 189,
    pv: 4800,
    amt: 2400,
  },
];

// #endregion
export default function Step1() {
  return (
    <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }} responsive data={data}>
      <Line dataKey='net' />
      <RechartsDevtools />
    </LineChart>
  );
}
