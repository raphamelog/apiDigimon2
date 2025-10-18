import React, { useEffect, useState } from "react";

export default function digimonList() {
  const [digimons, setDigimons] = useState([]);

  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((digimon) => ({
          name: digimon.name,
          image: digimon.img,
        }));
        setDigimons(formatted);
      })
      .catch((err) => console.error("Erro ao buscar digimons:", err));
  }, []);

  return (
    <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {digimons.map((digimon, index) => (
        <li
          key={index}
          style={{
            listStyle: "none",
            padding: "10px",
            background: "#fff",
            borderRadius: "8px",
            textAlign: "center",
            width: "150px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={digimon.image}
            alt={digimon.name}
            style={{ width: "120px", height: "120px", objectFit: "contain" }}
          />
          <p style={{ marginTop: "10px", textTransform: "capitalize" }}>
            {digimon.name}
          </p>
        </li>
      ))}
    </ul>
  );
}