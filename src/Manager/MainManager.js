import React from "react";
import Manager from "./Manager";

export default function MainManager() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundColor: "#343a40",
          width: "12%",
          textAlign: "center",
          height: "100vh",
          color: "white",
          padding: 10,
        }}
      >
        <a href="/" style={{ cursor: "pointer", color: 'white' }}>
          <h1>Go home</h1>
        </a>
        <hr />
        <h1
          style={{
            fontWeight: 100,
            fontSize: 20,
            background: "#0a58ca",
            padding: 5,
            borderRadius: 5,
          }}
        >
          Manager
        </h1>
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: 10,
            fontSize: 12,
          }}
        >
          <h1
            style={{
              fontWeight: 400,
            }}
          >
            Manager
          </h1>
        </div>
      </div>
      <div style={{ width: "80%" }}>
        <Manager />
      </div>
    </div>
  );
}
