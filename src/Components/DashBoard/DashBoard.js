import { Radar } from 'recharts';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, Tooltip, XAxis, YAxis } from 'recharts';
import "./DashBoard.css"



const DashBoard = () => {
    const chartData = [
        {
            month: "Mar",
            investment: 5000,
            sell: 2300,
            revenue: 10401
        },
        {

            month: "Apr",
            investment: 7000,
            sell: 1023,
            revenue: 24500
        },
        {

            month: "May",
            investment: 7000,
            sell: 5260,
            revenue: 67010
        },
        {

            month: "Jun",
            investment: 3000,
            sell: 3129,
            revenue: 40405
        },
        {

            month: "Jul",
            investment: 3500,
            sell: 4601,
            revenue: 50900
        },
        {

            month: "Aug",
            investment: 3000,
            sell: 2070,
            revenue: 61000
        }
    ]
    return (
        <section>
            <h4 className='text-center'> Product's Chart</h4>
            <div className="containe">
                <div className="row">
                    <div className="col-md-12">
                        <div className='chart'>

                            <div className="">
                                <div className='line-chart'>
                                    <LineChart width={500} height={300} data={chartData} className="line-chart">
                                        <Line type="monotone" dataKey="sell" stroke="#00FF00" />
                                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                                        <Line type="monotone" dataKey="investment" stroke="#000080" />
                                        <CartesianGrid stroke="#ccc" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                    </LineChart>
                                </div>
                            </div>

                            <div className=' bar-chart'>
                                <BarChart width={500} height={300} data={chartData} className="bar-chart">
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="sell" fill="#8884d8" />
                                    <Bar dataKey="investment" fill="#82ca9d" />
                                    <Bar dataKey="revenue" fill="#da70d6" />
                                </BarChart>
                            </div>
                            <div>
                                <PieChart width={500} height={300} data={chartData}>
                                    <Pie data={chartData} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />

                                    <Pie data={chartData} dataKey="investment" nameKey="revenue" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                                </PieChart>
                            </div>

                            <div>
                                <RadarChart outerRadius={90} width={730} height={250} data={chartData}>
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="month" />
                                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                                    <Radar name="investment" dataKey="investment" stroke="#da70d6" fill="#da70d6" fillOpacity={0.6} />
                                    <Radar name="revenue" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                                    <Legend />
                                </RadarChart>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default DashBoard;