// App.tsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import AnimatedRoutes from "./core/animated-route";

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#b0241c",
          // Alias Token
        },
        components: {},
      }}
    >
      <Router>
        <AnimatedRoutes />
      </Router>
    </ConfigProvider>
  );
};

export default App;
