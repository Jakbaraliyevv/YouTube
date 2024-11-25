import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Group from "../components/groups";
import Student from "../components/students";
import Sub from "../components/sub";
import You from "../components/you";
import History from "../components/hostory";
import Explor from "../components/explor";
import Libery from "../components/libery";
import Dashboard from "../pages/dashboard";

const root = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <Group /> },
      { path: "groups", element: <Group /> },
      { path: "students", element: <Student /> },
      { path: "sub", element: <Sub /> },
      { path: "you", element: <You /> },
      { path: "history", element: <History /> },
      { path: "explor", element: <Explor /> },
      { path: "libery", element: <Libery /> },
    ],
  },
]);

export default root;

// function Root() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />}>
//           <Route index element={<Group />} />
//           <Route path="students" element={<Student />} />
//           <Route path="sub" element={<Sub />} />
//           <Route path="you" element={<You />} />
//           <Route path="history" element={<History />} />
//           <Route path="explor" element={<Explor />} />
//           <Route path="libery" element={<Libery />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default Root;
