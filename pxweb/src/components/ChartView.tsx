import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MyDataType } from './DataView';

export const ChartView = ({ data }: { data?: MyDataType }) => {
    if (!data?.data) {
        return <p>No data</p>
    }
    const chartData = data?.data.map(dataRow => ({ name: dataRow.key.join(" "), value: dataRow.values[0] }));
    return (
        <BarChart width={600} height={600} data={chartData}>
            <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
    )
}