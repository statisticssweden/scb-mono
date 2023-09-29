import Link from "next/link";
import { Button } from "@scb-mono/scb-ui";
import { getTables, SuccesResponse } from '../api/getTables';
import { useState, useEffect } from "react";

const Index = () => {

    const [tableData, setTableData] = useState<SuccesResponse>();

    useEffect(() => {
        const loadTables = async () => {
            const { data } = await getTables({
                lang: "sv"
            });
            //const { data, error } = await getTables({ lang: "sv", pastDays: 30 });
            setTableData(data);
        }
        loadTables();
    }, [])

    return (
        <>
            <h1>Hej</h1>
            <p>{tableData?.language}</p>
            <ul>
                {tableData?.tables.map(table => <li key={table.id}>{table.label}</li>)}
            </ul>
            <Button variant="primary">Klicka här</Button>
            <Button variant="secondary">Klick</Button>
            <Link href="/about">About</Link>
        </>
    )
}

export default Index;