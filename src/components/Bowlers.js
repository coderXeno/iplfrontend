import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
  
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
  );

export default function Bowlers(){

    const [year,setYear] = useState([]);
    const [bowlers,setBowlers] = useState([]);
    const [economy,setEconomy] = useState([]);

    var data = {};

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/data/api/ipltopeconomicalbowlers/')
            .then((res)=>{
                setBowlers([...bowlers,...res.data.map(obj => obj.topeconomybowler)])
                setEconomy([...economy,...res.data.map(obj => obj.economy)])
                setYear([...year,...res.data.map(obj => obj.year)])
            })
            .catch((err)=>{
                console.log(err)
            })
    },[]);

    data = {
        labels: bowlers,
        datasets: [{
            label: 'Matches played per year from 2008-17',
            data: economy,
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
        <div className="topbowlers">
            <Bar
                data={data}
                height={600}
                width={1000}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                          position: 'top',
                        },
                        title: {
                          display: true,
                          text: 'Top Economical Bowlers from 2008-15'
                        }
                      }
                }}
            />
        </div>
    )
}