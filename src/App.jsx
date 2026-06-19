import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ApiDetails from "./components/ApiDetails";

function App() {
  const [selectedApi, setSelectedApi] = useState(null);

  return (
    <div className="flex h-screen">
      {/* LEFT SIDEBAR */}
      <Sidebar onSelectApi={setSelectedApi} />

      {/* RIGHT CONTENT */}
      <div className="flex-1 overflow-y-auto">
        <ApiDetails api={selectedApi} />
      </div>
    </div>
  );
}

export default App;
