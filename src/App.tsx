// App.tsx
import React from "react";
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
      <AnimatedRoutes />
    </ConfigProvider>
  );
};

export default App;
