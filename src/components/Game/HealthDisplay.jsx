import React from "react";
import "./GameStyles.css";

export default function HealthDisplay({ health }) {
  return (
    <div id="health">
      {Array.from({ length: health }).map((_, i) => (
        <span key={i} role="img" aria-label="heart">
          ❤️
        </span>
      ))}
    </div>
  );
}
