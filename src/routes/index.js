import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Spinner from "components/common/Spinner";
import { useScrollTop } from "hooks/useScrollTop.js";
import { Box } from "@material-ui/core";
import { commonRoutes } from "./commonRoutes";
import { privateRoutes } from "./privateRoutes";
import PrivateRoute from "hocs/PrivateRoute";

const Routes = () => {
  return (
    <Suspense
      fallback={
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={"100vh"}
        >
          <Spinner />
        </Box>
      }
    >
      <Switch>
        {useScrollTop()}
        {[
          ...privateRoutes,
          ...commonRoutes,
        ]?.map((route, index) => {
          if (route?.isAdminAuth) {
            return <PrivateRoute
              {...route}
              key={`r_${index}_${route.path}`}
            />;
          }

          return <Route
            {...route}
            key={`r_${index}_${route.path}`}
          />;
        })}
      </Switch>
    </Suspense>
  );
};

export default Routes;