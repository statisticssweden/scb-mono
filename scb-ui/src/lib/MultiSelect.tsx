import { useState } from "react"

type MultiSelectType = {
    values: { label: string, id: number }[],
    selectedIds: number[],
    setSelectedIds: (ids: number[]) => void
}

export const MultiSelect = ({ values, selectedIds, setSelectedIds }: MultiSelectType) => {

    

    const toggleById = (id: number) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    }

    const toggleAll = () => {
        if (selectedIds.length === values.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(values.map(value => value.id));
        }
    }

    const isChecked = (id: number) => {
        return selectedIds.includes(id);
    }

    return (
        <>
            <div><input id="all" onClick={() => toggleAll()} checked={selectedIds.length === values.length} type="checkbox"></input><label htmlFor="all">Välj alla</label></div>
            {
                values.map((value) => (
                    <div>
                        <input onClick={() => toggleById(value.id)} checked={isChecked(value.id)} id={`c_${value.id}`} type="checkbox"></input><label htmlFor={`c_${value.id}`}>{value.label}</label>
                    </div>
                ))
            }
        </>
    )
}