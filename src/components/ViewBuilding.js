import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { selectedBuilding, data } = this.propss;//props to be used (in App.js)
		const selectBuild = data.find(function (element){return element.id === selectedBuilding});//attaching ids to buildings
		var display;
		var buildingArray = [];//an array to hold the building lats and longs for display

		if (selectedBuilding === undefined) {//need to have undefined to avoid errors
			return (		
				<div>
					<p>
					{' '}
					<i>Click on a name to view more information...</i>;
					</p>
				</div>
			);
		}
		
		Object.keys(selectBuild).map((key) => {
			if (key === "coordinates") {
				buildingArray.push(<p><text>latitude: </text><text>{selectBuild[key].latitude}</text></p>);//put lat in array
				buildingArray.push(<p><text>latitude: </text><text>{selectBuild[key].longitude}</text></p>);//put long in array
			}
			else {
				
				buildingArray.push(<p><text>{key}</text><text>: </text><text>{selectBuild[key]}</text></p>)//put key in array
			}
			return buildingArray;
		}); 
		display = buildingArray;//is used for return portion 
		
		return (//will display what is being looked up		
			<div>
				<p>
				{display}		
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
