import React from "react";
import { withLDProvider } from "launchdarkly-react-client-sdk";
import Pokemon from "./Pokemon";

function App() {
  return (
    <>
      <Pokemon />
    </>
  );
}

export default withLDProvider({
  clientSideID: import.meta.env
    .VITE_LD_CLIENT_KEY,
  user: {
    key: "user_key",
    name: "User Name",
    email: "User@email.com",
  },
})(App);
