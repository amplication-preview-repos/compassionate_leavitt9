import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AuthenticationList } from "./authentication/AuthenticationList";
import { AuthenticationCreate } from "./authentication/AuthenticationCreate";
import { AuthenticationEdit } from "./authentication/AuthenticationEdit";
import { AuthenticationShow } from "./authentication/AuthenticationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"SetupReadService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Authentication"
          list={AuthenticationList}
          edit={AuthenticationEdit}
          create={AuthenticationCreate}
          show={AuthenticationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
