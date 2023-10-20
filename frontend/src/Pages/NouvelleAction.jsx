import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styling/NouvelleAction.css';


const NouvelleAction = (props) => {
  const navigate = useNavigate();
  const [newEntry, setNewEntry] = useState({
    date: '',
    probleme: '',
    responsable: '',
    action: '',
    echeance: '',
    avancement: '',
    statut: 'En attente',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const PlanAction = () => {
    navigate('/pdca'); 
  };

  const addEntry = () => {
    
    axios.post('http://localhost:9090/pdca', newEntry)
      .then((response) => {
        props.history.push('/pdca');
      })
      .catch((error) => {
        console.error('Erreur lors de l\'ajout de la ligne PDCA :', error);
      });
  };

  return (
    <div className='nouvelle-action-container'>
      <h1>Nouvelle Action</h1>
      <form>
        <label>Date:</label>
        <input type="date" name="date" value={newEntry.date} onChange={handleInputChange} />
        <label>Problème:</label>
        <input type="text" name="probleme" value={newEntry.probleme} onChange={handleInputChange} />
        <label>Responsable:</label>
        <input type="text" name="responsable" value={newEntry.responsable} onChange={handleInputChange} />
        <label>Action:</label>
        <input type="text" name="action" value={newEntry.action} onChange={handleInputChange} />
        <label>Échéance:</label>
        <input type="date" name="echeance" value={newEntry.echeance} onChange={handleInputChange} />
        <label>Avancement (%):</label>
        <input type="number" name="avancement" value={newEntry.avancement} onChange={handleInputChange} />
        <label>Statut:</label>
        <select name="statut" value={newEntry.statut} onChange={handleInputChange}>
          <option value="En attente">En attente</option>
          <option value="En cours">En cours</option>
          <option value="Terminé">Terminé</option>
        </select>
        <button type="submit" onClick={addEntry}>Ajouter</button>
        <button type="submit" onClick={PlanAction}>Terminé</button>
      </form>
    </div>
  );
};

export default NouvelleAction;