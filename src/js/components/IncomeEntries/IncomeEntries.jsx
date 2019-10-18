import React from 'react';

export default class IncomeEntries extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card border-success mb-3">
                <div className="card-header text-white bg-success">Income Entries</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="income-description">Description</label>
                            <input type="text" className="form-control" id="income-description" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="income-amount">Amount</label>
                            <div className="input-group">
                                <span className="input-group-addon">$</span>
                                <input type="text" className="form-control" id="expense-amount" />
                            </div>
                        </div>
                        <button className="btn btn-success col-12 mb-5">+ Add Income</button>
                        <table className="table table-sm table-hover">
                            <thead>
                                <th>Description</th>
                                <th style={{ width: 120 }}>Amount</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Paycheck</td>
                                    <td>$5,000.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        )
    }
}
