import { Pie } from 'react-chartjs-2';
import Typography from '@mui/material/Typography';

const PieChart = ({ data }) => {
	return (
		<div>
			<Typography variant='h4'> Pie Chart showing Year vs Sales </Typography>
			<div>
				<Pie
					data={{
						labels: ['2014', '2015', '2016', '2017'],
						datasets: [
							{
								label: 'Sales Per Year',
								data: [
									data['2014'].total.sales,
									data['2015'].total.sales,
									data['2016'].total.sales,
									data['2017'].total.sales,
								],
								backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(54, 162, 235, 0.2)',
									'rgba(255, 206, 86, 0.2)',
									'rgba(75, 192, 20, 0.2)',
								],
								borderColor: [
									'rgba(255, 99, 132, 1)',
									'rgba(54, 162, 235,1)',
									'rgba(255, 206, 86, 1)',
									'rgba(75, 192, 20, 1)',
								],
								borderWidth: 1,
							},
						],
					}}
					height={'400px'}
					width={'600px'}
					options={{ maintainAspectRatio: false }}
				/>
			</div>
		</div>
	);
};

export default PieChart;
