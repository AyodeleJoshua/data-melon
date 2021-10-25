import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const decimalPlace = (number, decimal) => {
	return Math.round(number * 10 ** decimal) / 100;
};

export default function TableCategory({ data }) {
	const rows2014 = [
		{
			id: 1,
			sales: data['2014']['Furniture'].sales,
			profit: data['2014']['Furniture'].profit,
		},
		{
			id: 2,
			sales: data['2014']['Technology'].sales,
			profit: data['2014']['Technology'].profit,
		},
		{
			id: 3,
			sales: data['2014']['Office Supplies'].sales,
			profit: data['2014']['Office Supplies'].profit,
		},
	];
	const rows2015 = [
		{
			id: 1,
			sales: data['2015']['Furniture'].sales,
			profit: data['2015']['Furniture'].profit,
		},
		{
			id: 2,
			sales: data['2015']['Technology'].sales,
			profit: data['2015']['Technology'].profit,
		},
		{
			id: 3,
			sales: data['2015']['Office Supplies'].sales,
			profit: data['2015']['Office Supplies'].profit,
		},
	];
	const rows2016 = [
		{
			id: 1,
			sales: data['2016']['Furniture'].sales,
			profit: data['2016']['Furniture'].profit,
		},
		{
			id: 2,
			sales: data['2016']['Technology'].sales,
			profit: data['2016']['Technology'].profit,
		},
		{
			id: 3,
			sales: data['2016']['Office Supplies'].sales,
			profit: data['2016']['Office Supplies'].profit,
		},
	];
	const rows2017 = [
		{
			id: 1,
			sales: data['2017']['Furniture'].sales,
			profit: data['2017']['Furniture'].profit,
		},
		{
			id: 2,
			sales: data['2017']['Technology'].sales,
			profit: data['2017']['Technology'].profit,
		},
		{
			id: 3,
			sales: data['2017']['Office Supplies'].sales,
			profit: data['2017']['Office Supplies'].profit,
		},
	];
	// console.log(data);
	return (
		<div>
			<Typography variant='h4'> Category vs year </Typography>
			<Typography variant='h6'> 2014 </Typography>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell align='right'>Sales</TableCell>
							<TableCell align='right'>Profit</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows2014.map((row) => (
							<TableRow
								key={row.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell align='right'>
									{decimalPlace(row.sales, 2)}
								</TableCell>
								<TableCell align='right'>
									{decimalPlace(row.profit, 2)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			
			<Typography variant='h6'> 2015 </Typography>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell align='right'>Sales</TableCell>
							<TableCell align='right'>Profit</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows2015.map((row) => (
							<TableRow
								key={row.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell align='right'>
									{decimalPlace(row.sales, 2)}
								</TableCell>
								<TableCell align='right'>
									{decimalPlace(row.profit, 2)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<Typography variant='h6'> 2016 </Typography>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell align='right'>Sales</TableCell>
							<TableCell align='right'>Profit</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows2016.map((row) => (
							<TableRow
								key={row.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell align='right'>
									{decimalPlace(row.sales, 2)}
								</TableCell>
								<TableCell align='right'>
									{decimalPlace(row.profit, 2)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<Typography variant='h6'> 2017 </Typography>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell align='right'>Sales</TableCell>
							<TableCell align='right'>Profit</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows2017.map((row) => (
							<TableRow
								key={row.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell align='right'>
									{decimalPlace(row.sales, 2)}
								</TableCell>
								<TableCell align='right'>
									{decimalPlace(row.profit, 2)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

		</div>
	);
}
