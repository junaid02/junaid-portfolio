"use client";
import React from "react";
import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div style={styles.preloaderContainer}>
      <Circles height="80" width="80" color="#4fa94d" ariaLabel="loading" />
    </div>
  );
};

const styles = {
  preloaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0", // optional, to provide a background color while loading
  },
};

export default Loading;
