import { useEffect, useState } from "react"
import { getData } from "../api/getData"

type MyDataType = {
    columns: Column[];
    comments: Comment[];
    data: Datum[];
}

type Column = {
    code: string;
    text: string;
    comment?: string;
    type: string;
}

type Comment = {
    variable: string;
    value: string;
    comment: string;
}

type Datum = {
    key: string[];
    values: string[];
}

type TableViewProps = {
    id?: string,
    valueCodes: { [key: string]: string[]; }
}

export const TableView = ({ id, valueCodes }: TableViewProps) => {

    const [data, setData] = useState<MyDataType>()

    useEffect(() => {
        const loadData = async () => {
            if (id) {
                const data = await getData(id, valueCodes);
                setData(data as unknown as MyDataType);
            }
        }

        loadData();
    }, [id, valueCodes])



    return <table>
        <thead>
            <tr>
                {data?.columns?.map((column: Column) => <th key={column.code}>{column.text}</th>)}
            </tr>
        </thead>
        <tbody>
            {data?.data?.map((row, index) => <tr key={index}>
                {row.key.map((keyItem, index) => <td key={index}>{keyItem}</td>)}
                {row.values.map((keyItem, index) => <td key={index}>{keyItem}</td>)}
            </tr>)}
        </tbody>
    </table>

}