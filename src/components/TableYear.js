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

export default function TableYear({ data }) {
	const rows = [
		{
			id: 1,
			year: 2014,
			sales: data['2014'].total.sales,
			profit: data['2014'].total.profit,
		},
		{
			id: 2,
			year: 2015,
			sales: data['2015'].total.sales,
			profit: data['2015'].total.profit,
		},
		{
			id: 3,
			year: 2016,
			sales: data['2016'].total.sales,
			profit: data['2016'].total.profit,
		},
		{
			id: 4,
			year: 2017,
			sales: data['2017'].total.sales,
			profit: data['2017'].total.profit,
		},
	];
	return (
		<div>
			<Typography variant='h4'>
				Table showing Year vs Sales vs Profit
			</Typography>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Year</TableCell>
							<TableCell>Sales</TableCell>
							<TableCell>Profit</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component='th' scope='row'>
									{row.year}
								</TableCell>
								<TableCell>
									{decimalPlace(row.sales, 2)}
								</TableCell>
								<TableCell>
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
