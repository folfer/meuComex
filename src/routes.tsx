/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register/";
import Dashboard from "./pages/Dashboard";
import Importation from "./pages/Importation";
import History from "./pages/History";

import CommonStructurePage from "./pages/CommonStructurePage";
import Exportation from "./pages/Exportation";
import Alerts from "./pages/Alerts";
import About from "./pages/About";
import Proseftur from "./pages/Proseftur";
import Price from "./pages/Price";
import NewImportation from "./pages/NewImportation";
import Contributors from "./pages/Contributors";
import NewExportation from "./pages/NewExportation";
import importDetails from "./pages/ImportDetails";
import ExportDetails from "./pages/ExportDetails";

const PrivateRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) =>
    localStorage.getItem("@MeuComex:token") ? (
      React.createElement(component, props)
    ) : (
      <Redirect
        to={{
          pathname: "/",
          state: {
            from: props.location,
          },
        }}
      />
    );

  return (
    <CommonStructurePage>
      <Route {...rest} render={routeComponent} />
    </CommonStructurePage>
  );
};

const Routes: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/importation" component={Importation} />
      <PrivateRoute exact path="/history" component={History} />
      <PrivateRoute exact path="/exportation" component={Exportation} />
      <PrivateRoute exact path="/alerts" component={Alerts} />
      <PrivateRoute exact path="/new-importation" component={NewImportation} />
      <PrivateRoute
        exact
        path="/import-details/:id"
        component={importDetails}
      />
      <PrivateRoute
        exact
        path="/export-details/:id"
        component={ExportDetails}
      />
      <PrivateRoute exact path="/contributors" component={Contributors} />
      <PrivateRoute exact path="/new-exportation" component={NewExportation} />
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/about" component={About} />
      <Route exact path="/proseftur" component={Proseftur} />
      <Route exact path="/price" component={Price} />
    </Switch>
  );
};

export default Routes;
