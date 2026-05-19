import { Routes, Route } from "react-router-dom";
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar";
import StatusPage from "./StatusPage/StatusPage";
import Users from "./Users/Users";
import Projects from "./Projects/Projects";
import TableDashboard from "../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../components/ui/FormDashboard/FormDashboard";
import Developers from "./Developers/Developers";

function Dashboard() {
  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex">
        <Sidebar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<StatusPage />} />
            <Route path="/users" element={<Users />} >
              <Route index element={<TableDashboard person="User" />} />

              <Route path="add" element={<FormDashboard />} />
            </Route>
            <Route path="/projects" element={<Projects />} >
              <Route index element={<TableDashboard person="Project" />} />

              <Route path="add" element={<FormDashboard />} />
            </Route>
            <Route path="/developers" element={<Developers />} >
              <Route index element={<TableDashboard person="Developer" />} />

              <Route path="add" element={<FormDashboard />} />
            </Route>
          </Routes>
        </main>

      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
