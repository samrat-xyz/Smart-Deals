import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/loading/Loading";

function RootLayout() {
  
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
