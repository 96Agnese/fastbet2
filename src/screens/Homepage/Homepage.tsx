import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <img
        style={{
          display: "flex",
          borderRadius: 20,
          width: "100%",
          marginTop: 80,
          marginBottom: 80,
          placeItems: "center",
        }}
        src="/src/assets/banner.png"
        alt=""
      />
    </div>
  );
};

export default HomePage;
