import styled from 'styled-components';
import { Tag } from './Tag';
import { useEffect, useState } from 'react';
import { ExpandButton } from './ExpandButton';
import { MultiSelect } from './MultiSelect';

type VariableSelectorType = {
    /**
   * Title of the variable
   */
    title: string,
    required: boolean,
    values: { label: string, id: number }[]
}

const Card = styled.div`
    border-radius: 12px;
    padding: 14px 20px 20px 20px;
    background-color: #F5F5F5;
`

const StyledTitle = styled.h3`
    font-size: 20px;
    line-height: 32px;
`

export const VariableSelector = ({ title, required, values }: VariableSelectorType) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    return <Card>
        <StyledTitle>{title}</StyledTitle>
        <ExpandButton isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} />
        <Tag roundedStyle="light">Valt {selectedIds.length} av {values.length}</Tag>
        {required && <Tag roundedStyle="heavy">Obligatorisk</Tag>}
        {isExpanded && <MultiSelect values={values} selectedIds={selectedIds} setSelectedIds={setSelectedIds} />}
    </Card>
}