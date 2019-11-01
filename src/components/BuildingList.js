import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText } = this.props;//these props for use here and elsewhere

		const buildingList = data.filter(name => {//must use to lowercase only for code so it works fully
			return name.name.indexOf(filterText) >= 0
		}).map(directory => {
			return (//on click to capture id
				<tr key={directory.id} onClick={() => this.props.selectedUpdate(directory.id)}>
					<td>{directory.code} </td> 
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
