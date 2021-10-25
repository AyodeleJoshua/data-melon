import { Line } from 'react-chartjs-2';
import Typography from '@mui/material/Typography';

const BarChartByCategory = ({ data }) => {
	return (
		<div>
			<Typography variant='h5'>Line Chart of Products Categories</Typography>
			<div className='mb-md-5'>
				<Line
					data={{
						labels: ['Furniture', 'Office Supplies', 'Technology'],
						datasets: [
							{
								label: '2014 Sales',
								data: [
									data['2014']['Furniture'].sales,
									data['2014']['Office Supplies'].sales,
									data['2014']['Technology'].sales,
								],
								backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(255, 99, 132, 0.2)',
									'rgba(255, 99, 132, 0.2)',
									// 'rgba(54, 162, 235, 0.2)',
									// 'rgba(255, 206, 86, 0.2)',
									// 'rgba(75, 192, 192, 0.2)',
								],
								borderColor: [
									// 'rgba(255, 99, 132, 1)',
									'rgba(54, 162, 235,1)',
									'rgba(54, 162, 235,1)',
									'rgba(54, 162, 235,1)',
									// 'rgba(255, 206, 86, 1)',
									// 'rgba(75, 192, 192, 1)',
								],
								borderWidth: 1,
							},
							{
								label: '2015 Sales',
								data: [
									data['2015']['Furniture'].sales,
									data['2015']['Office Supplies'].sales,
									data['2015']['Technology'].sales,
								],
								backgroundColor: [
									// 'rgba(255, 99, 132, 0.2)',
									// 'rgba(54, 162, 235, 0.2)',
									'rgba(255, 206, 86, 0.2)',
									'rgba(255, 206, 86, 0.2)',
									'rgba(255, 206, 86, 0.2)',
									// 'rgba(75, 192, 192, 0.2)',
								],
								borderColor: [
									// 'rgba(255, 99, 132, 1)',
									// 'rgba(54, 162, 235,1)',
									// 'rgba(255, 206, 86, 1)',
									'rgba(75, 192, 192, 1)',
									'rgba(75, 192, 192, 1)',
									'rgba(75, 192, 192, 1)',
								],
								borderWidth: 1,
							},
							{
								label: '2016 Sales',
								data: [
									data['2016']['Furniture'].sales,
									data['2016']['Office Supplies'].sales,
									data['2016']['Technology'].sales,
								],
								backgroundColor: [
									// 'rgba(255, 99, 132, 0.2)',
									// 'rgba(54, 162, 235, 0.2)',
									// 'rgba(255, 206, 86, 0.2)',
									// 'rgba(75, 19, 195, 0.2)',
									'rgba(255,0,0,0.2)',
									'rgba(255,0,0,0.2)',
									'rgba(255,0,0,0.2)',
								],
								borderColor: [
									'rgba(255, 99, 132, 1)',
									'rgba(54, 162, 235,1)',
									'rgba(255, 206, 86, 1)',
									'rgba(75, 192, 192, 1)',
								],
								borderWidth: 1,
							},
							{
								label: '2017 Sales',
								data: [
									data['2017']['Furniture'].sales,
									data['2017']['Office Supplies'].sales,
									data['2017']['Technology'].sales,
								],
								backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(54, 162, 235, 0.2)',
									'rgba(255, 206, 86, 0.2)',
									'rgba(75, 192, 192, 0.2)',
								],
								borderColor: [
									'rgba(255, 99, 132, 1)',
									'rgba(54, 162, 235,1)',
									'rgba(255, 206, 86, 1)',
									'rgba(75, 192, 192, 1)',
								],
								borderWidth: 1,
							},
						],
					}}
					height={'400px'}
					width={'600px'}
					options={{
						maintainAspectRatio: false,
					}}
				/>
			</div>
		</div>
	);
};

export default BarChartByCategory;
