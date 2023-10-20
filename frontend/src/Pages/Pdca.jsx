import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import '../Styling/PdcaStyle.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const Pdca = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);


  const navigateToNouvelleAction = () => {
    navigate('/nouvelleaction'); 
  };



  useEffect(() => {
    
    axios.get('http://localhost:9090/pdca')
      .then((response) => {
        setTableData(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données PDCA :', error);
      });
  }, []);

 

  const deleteRow = (id) => {
    
    axios.delete(`http://localhost:9090/pdca/${id}`)
      .then(() => {
        setTableData(tableData.filter((row) => row._id !== id));
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression de la ligne PDCA :', error);
      });
  };

  const handleInputChange = (event, rowIndex, columnName) => {
    const updatedTableData = [...tableData];
    updatedTableData[rowIndex][columnName] = event.target.value;
    setTableData(updatedTableData);
  };



  return (
    <div className='pdca-container'>
      <Navbar/>
      <h1 className='pdca-title'>Tableau PDCA</h1>
      <button className='pdca-add-button' onClick={navigateToNouvelleAction}>Ajouter une ligne</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Problème</th>
            <th>Responsable</th>
            <th>Action</th>
            <th>Échéance</th>
            <th>Avancement (%)</th>
            <th>Statut</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={row._id}>
              <td><input type="date" value={moment(row.date).format('YYYY-MM-DD')} onChange={(e) => handleInputChange(e, rowIndex, "date")} /></td>
              <td><input className='probleme' type="text" value={row.probleme} onChange={(e) => handleInputChange(e, rowIndex, "probleme")} /></td>
              <td><input type="text" value={row.responsable} onChange={(e) => handleInputChange(e, rowIndex, "responsable")} /></td>
              <td><input className='action' type="text" value={row.action} onChange={(e) => handleInputChange(e, rowIndex, "action")} /></td>
              <td><input type="date" value={moment(row.echeance).format('YYYY-MM-DD')} onChange={(e) => handleInputChange(e, rowIndex, "echeance")} /></td>
              <td><input type="number" value={row.avancement} onChange={(e) => handleInputChange(e, rowIndex, "avancement")} /></td>
              <td>
                <select value={row.statut} onChange={(e) => handleInputChange(e, rowIndex, "statut")}>
                  <option value="En attente">En attente</option>
                  <option value="En cours">En cours</option>
                  <option value="Terminé">Terminé</option>
                </select>
              </td>
              <td>
                <button className='pdca-delete-button' onClick={() => deleteRow(row._id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pdca;