import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult("");
  };

  const handleSubmit = async () => {
    if (!image) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData);
      setResult(response.data.prediction);
    } catch (error) {
      console.error("Error sending image:", error);
      setResult("Feil ved sending av bilde.");
    }
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f9f9f9",
      padding: "2rem",
      fontFamily: "Arial, sans-serif",
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>🫁 Chest X-ray Predictor</h1>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", width: "100%", maxWidth: "500px" }}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ fontSize: "1rem" }}
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "0.5rem", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
          />
        )}

        <button
          onClick={handleSubmit}
          disabled={!image || loading}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            fontSize: "1rem",
            fontWeight: "bold",
            border: "none",
            cursor: !image || loading ? "not-allowed" : "pointer",
            opacity: !image || loading ? 0.6 : 1,
          }}
        >
          {loading ? "Analyserer..." : "Last opp og prediker"}
        </button>

        {result && (
          <p style={{ fontSize: "1.25rem", marginTop: "1rem", fontWeight: "600" }}>
            Resultat:{" "}
            <span style={{
              color:
                result === "Positive"
                  ? "#dc2626"
                  : result === "Feil ved sending av bilde."
                  ? "#f59e0b"
                  : "#16a34a",
            }}>
              {result}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
