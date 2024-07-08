import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Importing the charts
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart} from '@mui/x-charts/LineChart';
import "./OverviewDashboard.css";

export default function OverviewDashboard() {

  const [usersData, setUsersData] = useState([]);
  const [disciplinesData, setDisciplinesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8887/api/users')
      .then(response => {
        setUsersData(response.data);
        calculateDisciplines(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users data:', error);
        setLoading(false);
      });
  }, []);

  const calculateDisciplines = (users) => {
    const disciplineCounts = users.reduce((acc, user) => {
      acc[user.discipline] = (acc[user.discipline] || 0) + 1;
      return acc;
    }, {});

    const formattedData = Object.keys(disciplineCounts).map((discipline, index) => ({
      id: index,
      discipline: discipline,
      userCount: disciplineCounts[discipline]
    }));

    setDisciplinesData(formattedData);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={'parentDiv'}>
      {/* Container for all the charts */}
      <div className={'chartHolder'}>
        {/* Bar Chart */}
        <div className={'chart'}>
          <h4>BarChart for User Logins</h4>
          <BarChart
            series={[
              { data: [35, 44, 24, 34] },
              { data: [51, 6, 49, 30] },
              { data: [15, 25, 30, 50] },
              { data: [60, 50, 15, 25] },
            ]}
            xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
        </div>

        {/* First Line Chart */}
        <div className={"chart"}>
          <h4>LineChart for Monthly Activity</h4>
          <LineChart
            series={[
              { data: [30, 40, 45, 50, 49, 60, 70, 91] },
            ]}
            xAxis={[{ data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'] }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
        </div>
        
        {/* Pie Chart */}
        <div className={"chart"}>
          <h4>PieChart for User Logins</h4>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: 'series A' },
                  { id: 1, value: 15, label: 'series B' },
                  { id: 2, value: 20, label: 'series C' },
                ],
              },
            ]}
          />
        </div>
        
        {/* Pie Chart */}
        <div className={"chart"}>
          <h4>PieChart for User Categories</h4>
          <PieChart
            series={[
              {
                data: disciplinesData.map((discipline) => ({
                  id: discipline.id,
                  value: discipline.userCount,
                  label: discipline.discipline
                })),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
