const apiKey = 'aEicPPHzoYcUGQVDrnMniskrZNoGDOQe';

const stationData = document.querySelector('#station-data');

fetch('https://www.ncei.noaa.gov/cdo-web/api/v2/stations', {
	headers: {
		token: apiKey
	}
})
.then(response => response.json())
.then(data => {
	let stationTable = `
		<table>
			<thead>
				<tr>
					<th>Station ID</th>
					<th>Name</th>
					<th>State</th>
					<th>Latitude</th>
					<th>Longitude</th>
				</tr>
			</thead>
			<tbody>
	`;

	data.results.forEach(result => {
		stationTable += `
			<tr>
				<td>${result.id}</td>
				<td>${result.name}</td>
				<td>${result.state}</td>
				<td>${result.latitude}</td>
				<td>${result.longitude}</td>
			</tr>
		`;
	});

	stationTable += `
			</tbody>
		</table>
	`;

	stationData.innerHTML = stationTable;
})
.catch(error => console.error(error));
