import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const dropdownChangeMthHandler = (event) => {
        props.onChangeMthFilter(event.target.value);
    };

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filters</label>
                <div>
                    <select value={props.selectedMth} onChange={dropdownChangeMthHandler}>
                        <option value='-'>-</option>
                        {props.mthLabels.map(mth => (
                            <option key={mth.id} value={mth.id}>{mth.label}</option>
                        ))}
                    </select>
                    <select value={props.selected} onChange={dropdownChangeHandler}>
                        <option value='-'>-</option>
                        {props.yearsData.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ExpensesFilter;