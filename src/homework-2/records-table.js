import React from 'react';
import PositionRow from './position-row';
import SortButton from './sort-button';

class RecordsTable extends React.Component {
	constructor(props) {
		super(props);

		this.changeOrder = this.changeOrder.bind(this);

		this.state = {
			setColumnToSort: "none",
			setASC: true,
			setPositions: this.props.positions
		};
	}

	changeOrder(column = "position") {		
		this.setState({setColumnToSort: column});
		this.setState({setPositions: this.sortData(this.state.setPositions, column, this.state.setASC)});
	}
	
	sortData(array, prop, orderASC = true) {
		let sortedArray;
		
		sortedArray = [...array].sort((a, b) => {
			if (a[prop] < b[prop]) return -1;
			if (a[prop] > b[prop]) return 1;
			return 0;
		});
		this.setState({setASC: false});

		if (!orderASC) {
			sortedArray.reverse();
			this.setState({setASC: true});
		}

		return sortedArray;
	}

    render() {
        let positionRows = this.state.setPositions.map(({position, currency, salary, office, extensionNumber, id}) => {
            return <PositionRow position={position} salary={salary + " " + currency} office={office} extensionNumber={extensionNumber} key={id} />
        });

        return (
            <table>
                <thead>
                    <tr>
						<th><SortButton text={"Position"} callBack={this.changeOrder} column={"position"} /></th>
						<th><SortButton text={"Salary"} callBack={this.changeOrder} column={"salary"} /></th>
                        <th>Office</th>
                        <th>Extn.</th>
                    </tr>
                </thead>
                <tbody>
                    {positionRows}
                </tbody>
            </table>
        );
    }
}

export default RecordsTable;