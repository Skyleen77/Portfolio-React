import React from "react";
import Timer from "./Timer";

export default function TopBar({ gameOver, setTime, mineCounter }) {
    return (
        <div
        style={{
            background: "#7BC4FF",
            padding: "10px 0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%"
        }}
        >
        <span role="img" aria-label="flag">
            {mineCounter} 🟦
        </span>
        <Timer gameOver={gameOver} sendTime={setTime} />
        </div>
    );
}