import styled from 'styled-components';
import { Tag } from './Tag';
import { useState } from 'react';
import { ExpandButton } from './ExpandButton';
import { MultiSelect } from './MultiSelect';
import { AnimatePresence, motion } from 'framer-motion';

type VariableSelectorType = {
    /**
   * Title of the variable
   */
    title: string,
    required: boolean,
    values: { label: string, code: string }[]
}

const Card = styled.div`
    border-radius: 12px;
    padding: 14px 20px 20px 20px;
    background-color: #F5F5F5;
`

const StyledTitle = styled.h3`
    font-size: 20px;
    line-height: 32px;
    margin: 0;
`

const TitleRow = styled.div`
    display: flex;
`

export const VariableSelector = ({ title, required, values }: VariableSelectorType) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    return <Card>
        <TitleRow>
            <StyledTitle>{title}</StyledTitle>
            <ExpandButton isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} />
        </TitleRow>
        <Tag roundedStyle="light">Valt {selectedIds.length} av {values.length}</Tag>
        {required && <Tag roundedStyle="heavy">Obligatorisk</Tag>}
        <AnimatePresence>
            {isExpanded && <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <MultiSelect values={values} selectedIds={selectedIds} setSelectedIds={setSelectedIds} /></motion.div>}
        </AnimatePresence>
    </Card>
}