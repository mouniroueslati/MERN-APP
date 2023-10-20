import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import '../Styling/ScoreCard.css';


const ScoreCard = () => {
  const initialData = Array(9).fill().map(() => Array(9).fill(''));

  // Définissez les valeurs fixes pour la première colonne
  const fixedColumnValues = ['Production', 'Vente', 'CA', 'Charges Fixes', 'Charges Variables', 'BFR', 'FR', 'Trésorie', 'R NET'];

  fixedColumnValues.forEach((value, index) => {
    initialData[index][0] = value;
  });

  const [tableData, setTableData] = useState(initialData);
  const [selectedMonth, setSelectedMonth] = useState(''); // Initialisez avec un mois par défaut

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleInputChange = (value, rowIndex, colIndex) => {
    const updatedData = [...tableData];
    updatedData[rowIndex][colIndex] = value;
    setTableData(updatedData);
  };

  const handleSave = () => {
    // Reformatez les données dans un tableau plat avant de les envoyer
    const flatData = tableData.map((rowData) => ({
      col1: rowData[0],
      col2: parseFloat(rowData[1]),
      col3: parseFloat(rowData[2]),
      col4: parseFloat(rowData[3]),
      col5: parseFloat(rowData[4]),
      col6: parseFloat(rowData[5]),
      col7: parseFloat(rowData[6]),
      col8: parseFloat(rowData[7]),
      col9: parseFloat(rowData[8]),
    }));
  
    // Effectuez une requête POST pour enregistrer les données dans la base de données
    axios.post(`http://localhost:9090/scorecard`, {
      month: selectedMonth,
      data: flatData, // Utilisez le tableau plat
    })
      .then((response) => {
        // Traitez la réponse si nécessaire
        console.log('Données enregistrées avec succès.');
      })
      .catch((error) => {
        console.error('Erreur lors de l\'enregistrement des données :', error);
      });
  };
  

  return (
    <div className='scorecard-container'>
      <Navbar />
      <h2>Saisie et Enregistrement de Données</h2>
      <div>
        <label htmlFor="month">Mois :</label>
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
          {/* Ajoutez d'autres mois ici */}
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>KPIs</th>
            <th>Réalisation</th>
            <th>Budget</th>
            <th>N-1</th>
            <th>R VS B</th>
            <th>R VS N-1</th>
            <th>YTD</th>
            <th>B YTD</th>
            <th>R YTD VS B YTD</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {rowData.map((colData, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={colData}
                    onChange={(e) => handleInputChange(e.target.value, rowIndex, colIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <button type="button" onClick={handleSave}>
        Enregistrer les données
      </button>
    </div>
  );
};

export default ScoreCard;