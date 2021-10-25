import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import EnhancedTable from './components/FullDataTable';
import BarChartByYear from './components/BarChartByYear';
import PieChartByYear from './components/PieChartByYear';
import LineChartByYear from './components/LineChartByYear';
import BarChartByCategory from './components/BarChartByCategory';
import PieChartByCategory from './components/PieChartByCategory';
import LineChartByCategory from './components/LineChartByCategory';
import TableYear from './components/TableYear';
import TableCategory from './components/TableCategory';

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

	const StateSalesByYear = {
		2014: { total: { sales: 0, profit: 0 } },
		2015: { total: { sales: 0, profit: 0 } },
		2016: { total: { sales: 0, profit: 0 } },
		2017: { total: { sales: 0, profit: 0 } },
		total: { sales: 0, profit: 0 },
	};
	const categorySalesByYear = {
		2014: { total: { sales: 0, profit: 0 } },
		2015: { total: { sales: 0, profit: 0 } },
		2016: { total: { sales: 0, profit: 0 } },
		2017: { total: { sales: 0, profit: 0 } },
		total: { sales: 0, profit: 0 },
	};
	const productSalesByYear = {
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
				if (!StateSalesByYear['2014'].hasOwnProperty(e['State'])) {
					StateSalesByYear['2014'][e['State']] = {};
					StateSalesByYear['2014'][e['State']].sales = sales;
					StateSalesByYear['2014'][e['State']].profit = profit;
				} else {
					StateSalesByYear['2014'][e['State']].sales += sales;
					StateSalesByYear['2014'][e['State']].profit += profit;
				}
				StateSalesByYear['2014'].total.sales += sales;
				StateSalesByYear['2014'].total.profit += profit;
				if (!categorySalesByYear['2014'].hasOwnProperty(e['Category'])) {
					categorySalesByYear['2014'][e['Category']] = {};
					categorySalesByYear['2014'][e['Category']].sales = sales;
					categorySalesByYear['2014'][e['Category']].profit = profit;
				} else {
					categorySalesByYear['2014'][e['Category']].sales = sales;
					categorySalesByYear['2014'][e['Category']].profit = profit;
				}
				if (!productSalesByYear['2014'].hasOwnProperty(e['Product Name'])) {
					productSalesByYear['2014'][e['Product Name']] = {};
					productSalesByYear['2014'][e['Product Name']].sales = sales;
					productSalesByYear['2014'][e['Product Name']].profit = profit;
				} else {
					productSalesByYear['2014'][e['Product Name']].sales = sales;
					productSalesByYear['2014'][e['Product Name']].profit = profit;
				}
			} else if (
				e['Order Date'].substring(e['Order Date'].length - 4) === '2015'
			) {
				if (!StateSalesByYear['2015'].hasOwnProperty(e['State'])) {
					StateSalesByYear['2015'][e['State']] = {};
					StateSalesByYear['2015'][e['State']].sales = sales;
					StateSalesByYear['2015'][e['State']].profit = profit;
				} else {
					StateSalesByYear['2015'][e['State']].sales += sales;
					StateSalesByYear['2015'][e['State']].profit += profit;
				}
				StateSalesByYear['2015'].total.sales += sales;
				StateSalesByYear['2015'].total.profit += profit;
				if (!categorySalesByYear['2015'].hasOwnProperty(e['Category'])) {
					categorySalesByYear['2015'][e['Category']] = {};
					categorySalesByYear['2015'][e['Category']].sales = sales;
					categorySalesByYear['2015'][e['Category']].profit = profit;
				} else {
					categorySalesByYear['2015'][e['Category']].sales = sales;
					categorySalesByYear['2015'][e['Category']].profit = profit;
				}
				if (!productSalesByYear['2015'].hasOwnProperty(e['Product Name'])) {
					productSalesByYear['2015'][e['Product Name']] = {};
					productSalesByYear['2015'][e['Product Name']].sales = sales;
					productSalesByYear['2015'][e['Product Name']].profit = profit;
				} else {
					productSalesByYear['2015'][e['Product Name']].sales = sales;
					productSalesByYear['2015'][e['Product Name']].profit = profit;
				}
			} else if (
				e['Order Date'].substring(e['Order Date'].length - 4) === '2016'
			) {
				if (!StateSalesByYear['2016'].hasOwnProperty(e['State'])) {
					StateSalesByYear['2016'][e['State']] = {};
					StateSalesByYear['2016'][e['State']].sales = sales;
					StateSalesByYear['2016'][e['State']].profit = profit;
				} else {
					StateSalesByYear['2016'][e['State']].sales += sales;
					StateSalesByYear['2016'][e['State']].profit += profit;
				}
				StateSalesByYear['2016'].total.sales += sales;
				StateSalesByYear['2016'].total.profit += profit;
				if (!categorySalesByYear['2016'].hasOwnProperty(e['Category'])) {
					categorySalesByYear['2016'][e['Category']] = {};
					categorySalesByYear['2016'][e['Category']].sales = sales;
					categorySalesByYear['2016'][e['Category']].profit = profit;
				} else {
					categorySalesByYear['2016'][e['Category']].sales = sales;
					categorySalesByYear['2016'][e['Category']].profit = profit;
				}
				if (!productSalesByYear['2016'].hasOwnProperty(e['Product Name'])) {
					productSalesByYear['2016'][e['Product Name']] = {};
					productSalesByYear['2016'][e['Product Name']].sales = sales;
					productSalesByYear['2016'][e['Product Name']].profit = profit;
				} else {
					productSalesByYear['2016'][e['Product Name']].sales = sales;
					productSalesByYear['2016'][e['Product Name']].profit = profit;
				}
			} else {
				if (!StateSalesByYear['2017'].hasOwnProperty(e['State'])) {
					StateSalesByYear['2017'][e['State']] = {};
					StateSalesByYear['2017'][e['State']].sales = sales;
					StateSalesByYear['2017'][e['State']].profit = profit;
				} else {
					StateSalesByYear['2017'][e['State']].sales += sales;
					StateSalesByYear['2017'][e['State']].profit += profit;
				}
				StateSalesByYear['2017'].total.sales += sales;
				StateSalesByYear['2017'].total.profit += profit;
			}
			StateSalesByYear.total.sales += sales;
			StateSalesByYear.total.profit += profit;
			if (!categorySalesByYear['2017'].hasOwnProperty(e['Category'])) {
				categorySalesByYear['2017'][e['Category']] = {};
				categorySalesByYear['2017'][e['Category']].sales = sales;
				categorySalesByYear['2017'][e['Category']].profit = profit;
			} else {
				categorySalesByYear['2017'][e['Category']].sales = sales;
				categorySalesByYear['2017'][e['Category']].profit = profit;
			}
			if (!productSalesByYear['2017'].hasOwnProperty(e['Product Name'])) {
				productSalesByYear['2017'][e['Product Name']] = {};
				productSalesByYear['2017'][e['Product Name']].sales = sales;
				productSalesByYear['2017'][e['Product Name']].profit = profit;
			} else {
				productSalesByYear['2017'][e['Product Name']].sales = sales;
				productSalesByYear['2017'][e['Product Name']].profit = profit;
			}
		});
	}
	return (
		<React.Fragment>
			<CssBaseline />
			<div className='container mt-md-5'>
				{data.length > 0 ? (
					<div>
						<div className='charts'>
							<div className='d-md-flex justify-content-between'>
								<div className='col-md-5'>
									<BarChartByYear data={StateSalesByYear} />
								</div>

								<div className=''>
									<TableYear data={StateSalesByYear} />
								</div>
							</div>
							<div className='d-md-flex justify-content-between align-items-center mt-md-5 mb-md-5'>
								<div className='col-md-5'>
									<PieChartByYear data={StateSalesByYear} />
								</div>
								<div className='col-md-6'>
									<LineChartByYear
										data={StateSalesByYear}
										className='col-md-5'
									/>
								</div>
							</div>

							<div className='category'>
								<div className='d-md-flex justify-content-between'>
									<div className='col-md-5'>
										<Typography variant='h4' className='mb-md-4'>
											Charts by Category
										</Typography>
										<BarChartByCategory data={categorySalesByYear} />
										<PieChartByCategory data={categorySalesByYear} />
										<LineChartByCategory data={categorySalesByYear} />
									</div>
									<div className='col-md-6'>
										<TableCategory data={categorySalesByYear} />
									</div>
								</div>
							</div>
						</div>
						<div className='tables'>
							<EnhancedTable tableData={data} />
						</div>
					</div>
				) : (
					<div
						className='d-flex justify-content-center align-items-center'
						style={{ height: '70vh' }}
					>
						<Stack spacing={1}>
							<Typography variant='h5' style={{ color: 'rgba(0, 0, 0,0.6)' }}>
								Please wait while your analyst is setting up...
							</Typography>
							<Skeleton variant='text' />
							<Skeleton variant='circular' width={40} height={40} />
							<Skeleton variant='rectangular' width={210} height={118} />
						</Stack>
					</div>
				)}
			</div>
		</React.Fragment>
	);
}

// const decimalPlace = (number, decimal) => {
// 	return Math.round(number * 10 ** decimal) / 100;
// };

export default App;
