import React from "react";
import { ConfigProvider } from "antd";
import Router from "./core/router";

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#b0241c",
        },
      }}
    >
      <Router />
    </ConfigProvider>
  );
};

export default App;
