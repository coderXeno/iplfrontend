import React, { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
  
  } from 'chart.js';
import axios from "axios";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
  );

export default function Runs(){

    const [years,setYears] = useState([]);
    const [extras,setExtras] = useState([]);

    var data = [];

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/data/api/iplextrarunsconceded/')
            .then((res)=>{
                console.log(res.data)
                setYears([...years,...res.data.map(obj => obj.year)])
                setExtras([...extras,...res.data.map(obj => obj.extras)])
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])

    data = {
        labels: years,
        datasets: [{
            label: 'Matches played per year from 2008-17',
            data: extras,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    return(
        <div className="runs-div">
            <Bar
                data={data}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    )
}