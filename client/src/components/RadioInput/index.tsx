import React from 'react';
import { StyledRadio } from 'components/ui/StyledInput';
import idGenerator from 'util/idGenerator';

interface IProps {
    items: { label: string; value: any }[];
    changed: (value: any) => void;
    value: string;
};

const RadioInput: React.FC<IProps> = ({ items, changed, value }) => {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        changed(inputValue);
    };

    return (
        <StyledRadio>
            {items.map((item) => (
                <label key={idGenerator()}>
                    <input
                        type="radio"
                        name="group"
                        value={item.value}
                        checked={value === item.value}
                        onChange={changeHandler}
                    />
                    <span className="radio-pulse" />
                    <span className="radio-button">
                        <span className="radio-button-inner" />
                    </span>
                    <span className="radio-label">{item.label}</span>
                </label>
            ))}
        </StyledRadio>
    );
};

export default React.memo(RadioInput);
