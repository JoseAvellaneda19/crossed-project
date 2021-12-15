import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";


const ReduxProvider = ({children}: {children: ReactNode}) => (
  <Provider store={store}>{children}</Provider>
)


export default ReduxProvider
