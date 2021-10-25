import { Pie } from 'react-chartjs-2';

const BarChartByCategory = ({ data }) => {
	return (
		<div>
			<Pie
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
								'rgb(255, 99, 132)',
								'rgb(255, 206, 86)',
								'rgb(65, 131, 215)',
							],
							hoverOffset: 4,
						},
						{
							label: '2015 Sales',
							data: [
								data['2015']['Furniture'].sales,
								data['2015']['Office Supplies'].sales,
								data['2015']['Technology'].sales,
							],
							backgroundColor: [
								'rgba(255, 99, 132,0.6)',
								'rgba(255, 206, 86,0.6)',
								'rgba(65, 131, 215,0.6)',
							],
							borderColor: [
								'rgb(255, 99, 132)',
								'rgb(255, 206, 86)',
								'rgb(65, 131, 215)',
							],
							borderWidth: 2,
							hoverOffset: 4,
						},
						{
							label: '2016 Sales',
							data: [
								data['2014']['Furniture'].sales,
								data['2014']['Office Supplies'].sales,
								data['2014']['Technology'].sales,
							],
							backgroundColor: [
								'rgb(255, 99, 132)',
								'rgb(255, 206, 86)',
								'rgb(65, 131, 215)',
							],
							hoverOffset: 4,
						},
						{
							label: '2017 Sales',
							data: [
								data['2017']['Furniture'].sales,
								data['2017']['Office Supplies'].sales,
								data['2017']['Technology'].sales,
							],
							backgroundColor: [
								'rgba(255, 99, 132,0.6)',
								'rgba(255, 206, 86,0.6)',
								'rgba(65, 131, 215,0.6)',
							],
							borderColor: [
								'rgb(255, 99, 132)',
								'rgb(255, 206, 86)',
								'rgb(65, 131, 215)',
							],
							borderWidth: 2,
							hoverOffset: 4,
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
	);
};

export default BarChartByCategory;
