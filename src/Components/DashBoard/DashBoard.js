import React, { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import Chart from '../Chart/Chart';


const DashBoard = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetch('chartData.json')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])

    return (
        <section>
            <h4 className='text-center'> Product's Chart</h4>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            {
                                chartData.map(chart => <Chart
                                    key={chart.id}
                                    chart={chart}
                                ></Chart>)
                            }

                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;