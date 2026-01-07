import React from 'react';


export default function Character({ name, image, gender, house, dateOfBirth ,eyeColour}) {
  // Fallback-Bild, wenn kein Bild vorhanden ist
  //const fallbackImage = 'https://via.placeholder.com/150';  // Ein Standardbild als Fallback
  const fallbackImage = '/ersatz_foto.jpg';  // Ein Standardbild als Fallback

  return (
    <article className="character-card">
      {/* Zeigt das Bild nur, wenn ein Bild vorhanden ist, sonst das Fallback-Bild */}
      <img
        src={image || fallbackImage} // Wenn 'image' nicht vorhanden ist, wird das Fallback-Bild verwendet
        alt={name}
        className="character-image" // Hier kannst du eine Klasse angeben, wenn du weitere Styles zuweisen möchtest
      />
      <h3 className="character-name">{name}</h3>
      <p><span>Gender:</span> {gender}</p>
      <p><span>House:</span> {house || 'Unknown'}</p>
      <p><span>Date of Birth:</span> {dateOfBirth || 'N/A'}</p>
      <p><span>eyeColour:</span> {eyeColour || 'N/A'}</p>
    </article>
  );
}
