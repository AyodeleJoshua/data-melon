import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Skeleton from '@mui/material/Skeleton';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import EnhancedTable from './components/EnhancedTable';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';

const URL = 'https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub';

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios({
			method: 'post',
			url: URL,
			data: {
				angular_test: 'angular-developer',
			},
		}).then(({ data }) => {
			setData(data);
		});
	}, []);

	const salesByYear = {
		2014: { total: { sales: 0, profit: 0 } },
		2015: { total: { sales: 0, profit: 0 } },
		2016: { total: { sales: 0, profit: 0 } },
		2017: { total: { sales: 0, profit: 0 } },
		total: { sales: 0, profit: 0 },
	};
	
	if (data.length > 0) {
		data.forEach((e) => {
			const sales = Math.round(parseFloat(e['Sales']) * 100) / 100;
			const profit = Math.round(parseFloat(e['Profit']) * 100) / 100;
			if (e['Order Date'].substring(e['Order Date'].length - 4) === '2014') {
				if (!salesByYear['2014'].hasOwnProperty(e['State'])) {
					salesByYear['2014'][e['State']] = {};
					salesByYear['2014'][e['State']].sales = sales;
					salesByYear['2014'][e['State']].profit = profit;
				} else {
					salesByYear['2014'][e['State']].sales += sales;
					salesByYear['2014'][e['State']].profit += profit;
				}
				salesByYear['2014'].total.sales += sales;
				salesByYear['2014'].total.profit += profit;
			} else if (
				e['Order Date'].substring(e['Order Date'].length - 4) === '2015'
			) {
				if (!salesByYear['2015'].hasOwnProperty(e['State'])) {
					salesByYear['2015'][e['State']] = {};
					salesByYear['2015'][e['State']].sales = sales;
					salesByYear['2015'][e['State']].profit = profit;
				} else {
					salesByYear['2015'][e['State']].sales += sales;
					salesByYear['2015'][e['State']].profit += profit;
				}
				salesByYear['2015'].total.sales += sales;
				salesByYear['2015'].total.profit += profit;
			} else if (
				e['Order Date'].substring(e['Order Date'].length - 4) === '2016'
			) {
				if (!salesByYear['2016'].hasOwnProperty(e['State'])) {
					salesByYear['2016'][e['State']] = {};
					salesByYear['2016'][e['State']].sales = sales;
					salesByYear['2016'][e['State']].profit = profit;
				} else {
					salesByYear['2016'][e['State']].sales += sales;
					salesByYear['2016'][e['State']].profit += profit;
				}
				salesByYear['2016'].total.sales += sales;
				salesByYear['2016'].total.profit += profit;
			} else {
				if (!salesByYear['2017'].hasOwnProperty(e['State'])) {
					salesByYear['2017'][e['State']] = {};
					salesByYear['2017'][e['State']].sales = sales;
					salesByYear['2017'][e['State']].profit = profit;
				} else {
					salesByYear['2017'][e['State']].sales += sales;
					salesByYear['2017'][e['State']].profit += profit;
				}
				salesByYear['2017'].total.sales += sales;
				salesByYear['2017'].total.profit += profit;
			}
			salesByYear.total.sales += sales;
			salesByYear.total.profit += profit;
		});
	}
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth='lg'>
				<BarChart data={salesByYear} />
				<PieChart data={salesByYear} />
				<LineChart data={salesByYear} />
				<EnhancedTable tableData={data} />
			</Container>
		</React.Fragment>
	);
}

// const decimalPlace = (number, decimal) => {
// 	return Math.round(number * 10 ** decimal) / 100;
// };

export default App;
