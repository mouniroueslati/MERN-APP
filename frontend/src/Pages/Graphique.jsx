import React, { useState } from 'react';
import axios from 'axios';
import { Bar, Doughnut } from 'react-chartjs-2'; 
import "../Styling/graphique.css";
import Navbar from '../Components/Navbar';
import Chart from 'chart.js/auto';

const Graphique = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [graphData, setGraphData] = useState(null);
  const [pieChartData, setPieChartData] = useState(null);

  let myChart = null; 

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleShowData = () => {
    if (myChart) {
      myChart.destroy(); 
    }

    axios
      .get(`http://localhost:9090/scorecard/${selectedMonth}`)
      .then((response) => {
        const dataForGraph = {
          labels: ['Réalisation N', 'Budget', 'Réalisation N-1'],
          datasets: [
            {
              label: 'Production',
              data: [
                response.data.data[0].col2,
                response.data.data[0].col3,
                response.data.data[0].col4,
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 206, 86, 0.5)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 1,
            },
          ],
        };

        const data = {
          labels: ['Charges Fixes', 'Charges Variables'],
          datasets: [
            {
              data: [response.data.data[3].col2, response.data.data[4].col2],
              backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(75, 192, 192, 0.5)'],
              borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
              borderWidth: 1,
            },
          ],
        };
  
        setGraphData(dataForGraph);
        setPieChartData(data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  };

  return (
    <div>
      <Navbar />
      <h2>Graphique</h2>
      <div>
        <label htmlFor="month">Sélectionnez le mois :</label>
        <select
          name="month"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          <option value="Janvier">Janvier</option>
          <option value="Février">Février</option>
          <option value="Mars">Mars</option>
          <option value="Avril">Avril</option>
          <option value="Mai">Mai</option>
          <option value="Juin">Juin</option>
          <option value="Juillet">Juillet</option>
          <option value="Aout">Aout</option>
          <option value="Septembre">Septembre</option>
          <option value="Octobre">Octobre</option>
          <option value="Novembre">Novembre</option>
          <option value="Decembre">Decembre</option>
        </select>
        <button onClick={handleShowData}>Afficher</button>
      </div>
      <div className="chart-container"> 
        <div className="bar-chart-container"> 
          {graphData && (
            <Bar
              data={graphData}
              options={{
                scales: {
                  x: {
                    type: 'category',
                  },
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          )}
        </div>
        <div className="pie-chart-container">
          {pieChartData && (
            <Doughnut
              data={pieChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Graphique;