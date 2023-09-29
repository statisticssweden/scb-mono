import { useRouter } from "next/router";
import { SuccesResponse, getTableMetaData } from "../../api/getTableMetadata";
import { useEffect, useState, useContext } from "react";
import { VariableSelector } from "@scb-mono/scb-ui";
import { components } from '../../api/schema';
import { AppContext } from "../../context/AppContext";
import styled from "styled-components";
import { TableView } from "../../components/TableView";

type RegularVariable = components["schemas"]["RegularVariable"];

const VariableSelectorBox = styled.div`
    max-width: 320px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const PageWrapper = styled.div`
    display: flex;
    gap: 20px;
`

const TablePage = () => {
    const { query } = useRouter();
    const { setTheme } = useContext(AppContext);

    const [metadata, setMetadata] = useState<SuccesResponse>()

    useEffect(() => {

        const loadMetaData = async () => {
            if (query.id) {
                const idAsString = Array.isArray(query.id) ? query.id[0] : query.id;
                const { data, error } = await getTableMetaData(idAsString)
                setMetadata(data as SuccesResponse);
            }
        }
        loadMetaData();
    }, [query.id])

    return <>
        {/* <button onClick={() => setTheme('dark')}>Dark</button>
        <button onClick={() => setTheme('light')}>Light</button> */}
        <PageWrapper>
            <VariableSelectorBox>
                {metadata?.variables.map(variable => {
                    const regularVariable = variable as unknown as RegularVariable;
                    return (
                        <VariableSelector
                            key={regularVariable.id}
                            title={regularVariable.label}
                            required={!regularVariable.elimination}
                            values={
                                regularVariable.values.map(value => ({ label: value.label, code: value.code }))
                            } />
                    )
                })}
            </VariableSelectorBox>
            <div>
                <h1>{metadata?.label}</h1>
                <TableView id={query.id && Array.isArray(query.id) ? query.id[0] : query.id} />
            </div>
        </PageWrapper>
    </>
}
export default TablePage;