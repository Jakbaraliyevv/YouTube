import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import Dashboard from "../pages/dashboard";
import Group from "../components/groups";
import Student from "../components/students";
import Sub from "../components/sub";
import You from "../components/you";
import History from "../components/hostory";
import Explor from "../components/explor";
import Libery from "../components/libery";

function Root() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Group />} />
          <Route path="students" element={<Student />} />
          <Route path="sub" element={<Sub />} />
          <Route path="you" element={<You />} />
          <Route path="history" element={<History />} />
          <Route path="explor" element={<Explor />} />
          <Route path="libery" element={<Libery />} />
        </Route>
      </Routes>
    </>
  );
}

export default Root;
