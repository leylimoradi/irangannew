import React from 'react';
import {connect} from 'react-redux';
import RecordsTable from './records-table';

const EmployeesTable = (props) => {
	const {category, positions} = props;

	return (
		<main>
			<h2>{category}</h2>
			<RecordsTable positions={positions} />
		</main>
	);
};

function mapStateToProps(state) {
	const {employees} = state.homeworkData;

	return {
		category: employees.category,
		positions: employees.positions
	};
}
function mapDispatchToProps() {
	return {
		init() {
			const init = {
				type: "INIT_HOMEWORK"
			};

			dispatch(init);
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesTable);