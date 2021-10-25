import { Bar } from 'react-chartjs-2';

const BarChartByCategory = ({ data }) => {
	return (
		<div>
			<Bar
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
							],
							borderColor: [
								'rgba(255, 99, 132, 1)',
								'rgba(255, 99, 132, 1)',
								'rgba(255, 99, 132, 1)',
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
								'rgba(255, 206, 86, 0.2)',
								'rgba(255, 206, 86, 0.2)',
								'rgba(255, 206, 86, 0.2)',
							],
							borderColor: [
								'rgba(255, 206, 86, 1)',
								'rgba(255, 206, 86, 1)',
								'rgba(255, 206, 86, 1)',
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
								'rgba(65, 131, 215, 0.2)',
								'rgba(65, 131, 215, 0.2)',
								'rgba(65, 131, 215, 0.2)',
							],
							borderColor: [
								'rgba(65, 131, 215, 1)',
								'rgba(65, 131, 215, 1)',
								'rgba(65, 131, 215, 1)',
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
								'rgba(78, 205, 196, 0.2)',
								'rgba(78, 205, 196, 0.2)',
								'rgba(78, 205, 196, 0.2)',
							],
							borderColor: [
								'rgba(78, 205, 196, 1)',
								'rgba(78, 205, 196, 1)',
								'rgba(78, 205, 196, 1)',
							],
							borderWidth: 1,
						},
					],
				}}
				height={'400px'}
				width={'600px'}
				options={{
					maintainAspectRatio: false,
					// scales: {
					// 	x: {
					// 		stacked: true,
					// 	},
					// 	y: {
					// 		stacked: true,
					// 	},
					// },
				}}
			/>
		</div>
	);
};

export default BarChartByCategory;
