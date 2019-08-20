import React from "react";
import { tableHeader, rowData } from '../mockData/TableData';

const Table = () => {
    return (
        <div className="card-block pb-0">
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            {tableHeader.map((title) => (<th>{title}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {rowData.map((data) => (
                            <tr>
                                <td><h6 className="mb-1"><b>{data.step}</b></h6></td>
                                <td><h6 className="mb-1">{data.template}</h6></td>
                                <td><h6 className="m-b-0">{data.delivers}</h6></td>
                                <td><h6 className="m-b-0">{data.opens}</h6></td>
                                <td><h6 className="m-b-0">{data.replies}</h6></td>
                                <td><h6 className="m-b-0">{data.interested}</h6></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;