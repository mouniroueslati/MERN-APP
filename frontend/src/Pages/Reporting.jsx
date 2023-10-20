import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import '../Styling/Reporting.css';


const Reporting = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [tableData, setTableData] = useState(null);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleShowData = () => {
    axios.get(`http://localhost:9090/scorecard/${selectedMonth}`)
      .then((response) => {
        setTableData(response.data.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  };

  useEffect(() => {
    
  }, []);

  return (
    <div>
        <Navbar/>
      <h2>Page de Reporting</h2>
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
      {tableData && (
        <table>
          <thead>
            <tr>
              <th>KPIs</th>
              <th>Réalisation N</th>
              <th>Budget</th>
              <th>Réalisation N-1</th>
              <th>R N VS B</th>
              <th>R N VS R N-1</th>
              <th>R YTD</th>
              <th>Budget YTD</th>
              <th>R YTD VS B YTD</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, rowIndex) => (
              <tr key={rowIndex}>
                <td>{rowData.col1}</td>
                <td>{rowData.col2}</td>
                <td>{rowData.col3}</td>
                <td>{rowData.col4}</td>
                <td>{rowData.col5}</td>
                <td>{rowData.col6}</td>
                <td>{rowData.col7}</td>
                <td>{rowData.col8}</td>
                <td>{rowData.col9}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      )}
      
    </div>
  );
};

export default Reporting;