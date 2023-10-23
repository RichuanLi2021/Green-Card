import React from 'react';
import './gridTest.css';

function GridTest({ drugName, drugData }) {
    if (!Array.isArray(drugData) || drugData.length === 0) {
        return <div></div>;
    }

    // Get headers and ignore "Name" and "ID"
    const headers = Object.keys(drugData[0]).filter(key => key !== "Name" && key !== "Id" && key !== "ID" && key !== "id");

    // Check for valid names in the drugData array
    const names = drugData.map(item => item.Name || "-");
    const hasValidNames = names.some(name => name !== "-");

    // Construct leftData array based on valid names
    const leftData = hasValidNames ? ['Type'].concat(names) : names;

    // Constructing rightDataArray dynamically based on the headers
    const rightDataArray = headers.map(header => {
        return {
            header: header,
            data: drugData.map(item => item[header] || "-")
        };
    });

    return (
        <div className="gridTest-container">
            {/* Conditional render for Left div */}
            {hasValidNames && (
                <div className="gridTest-left">
                    {leftData.map((item, index) => (
                        <p 
                            key={index} 
                            className={index === 0 ? "gridTest-text-title" : "gridTest-text"}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            )}

            {/* Right div */}
            <div className="gridTest-right">
                {rightDataArray.map((column, index) => (
                    <div key={index} className="gridTest-column">
                        <p className="gridTest-text-title">{column.header}</p>
                        {column.data.map((dataItem, dataIndex) => (
                            <p key={dataIndex} className="gridTest-text">{dataItem}</p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GridTest;
