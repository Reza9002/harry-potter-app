import React, { useState, useEffect } from 'react';
import Character from './Character'; // Importiere die Character-Komponente

export default function FetchExample() {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [viewOption, setViewOption] = useState('all');
  const [selectedCount, setSelectedCount] = useState(5);

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const filteredData = () => {
    let result = data;

    // اصلاح باگ حروف کوچک و بزرگ در فیلتر نام
    if (viewOption === 'name' && nameFilter) {
      result = data.filter((item) =>
        item.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    // Anzahl der anzuzeigenden Charaktere basierend auf der Auswahl des Dropdowns
    return result.slice(0, selectedCount);
  };

  return (
    <div className="fetch-container">
      <h1 className="title">Harry Potter Character Wähler</h1>

      {/* Radio-Buttons zur Auswahl der Filteroption */}
      <div className="filter-options">
        <label>
          <input
            type="radio"
            name="viewOption"
            value="all"
            checked={viewOption === 'all'}
            onChange={() => setViewOption('all')}
          />
          Alle Charaktere anzeigen
        </label>
        <label>
          <input
            type="radio"
            name="viewOption"
            value="name"
            checked={viewOption === 'name'}
            onChange={() => setViewOption('name')}
          />
          Nach Name filtern
        </label>
      </div>

      {/* Eingabefeld für Name-Filter */}
      {viewOption === 'name' && (
        <input
          type="text"
          placeholder="Namen eingeben..."
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="input-field"
        />
      )}

      {/* Dropdown für die Auswahl der Anzahl anzuzeigender Charaktere */}
      <div>
        <label> Anzahl der Charaktere: </label>
        <select
          value={selectedCount}
          onChange={(e) => setSelectedCount(Number(e.target.value))}
          className="select-dropdown"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={data.length}>Alle</option>
        </select>
      </div>

      {/* Anzeige der gefilterten Charaktere */}
      <div className="character-list">
        {/* اصلاح اصلی: اضافه شدن پرانتز () به filteredData */}
        {filteredData().map((item) => (
          <Character
            key={item.id || item.name}
            name={item.name}
            image={item.image}
            gender={item.gender}
            house={item.house}
            dateOfBirth={item.dateOfBirth}
            eyeColour={item.eyeColour}
          />
        ))}
      </div>
    </div>
  );
}