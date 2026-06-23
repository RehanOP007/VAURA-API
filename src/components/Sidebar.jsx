import { useState } from "react";
import apiData from "../data/allApis";

function Sidebar({ onSelectApi, selectedApiId }) {
  const [openCategory, setOpenCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleCategory = (name) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  const methodColors = {
    GET: "bg-emerald-50 text-emerald-700 border-emerald-200",
    POST: "bg-blue-50 text-blue-700 border-blue-200",
    PUT: "bg-amber-50 text-amber-700 border-amber-200",
    PATCH: "bg-purple-50 text-purple-700 border-purple-200",
    DELETE: "bg-rose-50 text-rose-700 border-rose-200",
  };

  const filteredData = apiData
  .map((category) => {
    // Category with submodules (Employee)
    if (category.subModules) {
      const filteredSubModules = category.subModules
        .map((subModule) => ({
          ...subModule,
          apis: subModule.apis.filter(
            (api) =>
              api.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
              api.endpoint?.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        }))
        .filter((subModule) => subModule.apis.length > 0);

      return {
        ...category,
        subModules: filteredSubModules,
      };
    }

    // Normal category
    const filteredApis = category.apis.filter(
      (api) =>
        api.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        api.endpoint?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      ...category,
      apis: filteredApis,
    };
  })
  .filter((category) => {
    if (category.subModules) {
      return category.subModules.length > 0;
    }

    return category.apis.length > 0;
  });

  const [openSubModules, setOpenSubModules] = useState({});
  const toggleSubModule = (name) => {
  setOpenSubModules((prev) => ({
    ...prev,
    [name]: !prev[name],
  }));
};

  return (
    <div className="w-80 h-screen border-r border-slate-800 bg-slate-900 text-slate-300 flex flex-col font-sans">
      <div className="p-5 border-b border-slate-800">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
          <h2 className="text-sm font-semibold tracking-wider text-slate-400">
            VAura API Documentation
          </h2>
        </div>
        <p className="text-xs text-slate-500">Developer Documentation</p>

        {/*Search*/}
        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Search endpoints..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-800 text-sm text-slate-200 pl-3 pr-8 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-500"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-2.5 top-2.5 text-xs text-slate-500 hover:text-slate-300"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
        {filteredData.map((category) => {
          const isCurrentOpen =
            openCategory === category.category || searchTerm !== "";

          return (
            <div key={category.category} className="space-y-1">
              {/*Category Header BTN*/}
              <button
                onClick={() => toggleCategory(category.category)}
                className={`w-full flex items-center justify-between p-2.5 rounded-lg text-sm font-medium transition-all duration-150 text-left ${
                  isCurrentOpen
                    ? "bg-slate-800 text-white"
                    : "hover:bg-slate-800/50 text-slate-400 hover:text-slate-200"
                }`}
              >
                <span>{category.category}</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 text-slate-500 ${
                    isCurrentOpen ? "rotate-180 text-blue-400" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isCurrentOpen && (
                <div className="pl-2 my-1 space-y-1 border-l border-slate-800 ml-3">
                  {category.subModules ? (
                     category.subModules.map((subModule) => {
                      const isSubOpen = openSubModules[subModule.name] || searchTerm !== "";

                      return (
                       <div key={subModule.name} className="mb-2">
                        <button
                         onClick={() => toggleSubModule(subModule.name)}
                          className="w-full flex items-center justify-between px-2 py-1 text-xs font-semibold text-slate-400 hover:text-white"
                        >
                         <span>{subModule.name}</span>

                      <svg
                         className={`w-3 h-3 transition-transform ${
                         isSubOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      </button>

                      {isSubOpen && (
                       <div className="ml-4 mt-1 space-y-1">
                        {subModule.apis.map((api) => {
                         const isSelected = selectedApiId === api.id;
                         const methodUpper = (api.method || "GET").toUpperCase();
                         const methodClass =
                           methodColors[methodUpper] ||
                           "bg-slate-700 text-slate-300";

                        return (
                         <button
                           key={api.id}
                           onClick={() => onSelectApi(api)}
                           className={`w-full flex items-center gap-2.5 p-2 rounded-md text-xs font-normal transition-all text-left ${
                             isSelected
                                ? "bg-blue-950/40 text-blue-400 border-l-2 border-blue-500 font-medium pl-1.5"
                                : "hover:bg-slate-800/30 text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        <span
                           className={`px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wide border ${methodClass}`}
                        >
                          {methodUpper}
                        </span>

                        <span className="truncate flex-1">
                         {api.name}
                        </span>
                      </button>
                    );
                })}
             </div>
           )}
         </div>
       );
      })
   ) : (
  category.apis.map((api) => {
    const isSelected = selectedApiId === api.id;
    const methodUpper = (api.method || "GET").toUpperCase();
    const methodClass =
      methodColors[methodUpper] ||
      "bg-slate-700 text-slate-300";

       return (
         <button
           key={api.id}
           onClick={() => onSelectApi(api)}
           className={`w-full flex items-center gap-2.5 p-2 rounded-md text-xs font-normal transition-all text-left ${
            isSelected
              ? "bg-blue-950/40 text-blue-400 border-l-2 border-blue-500 font-medium pl-1.5"
              : "hover:bg-slate-800/30 text-slate-400 hover:text-slate-200"
           }`}
          >
          <span
             className={`px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wide border ${methodClass}`}
          >
             {methodUpper}
           </span>

            <span className="truncate flex-1">
               {api.name}
             </span>
           </button>
         );
       })
      )}
      </div>
    )}
  </div>
  );
})}

        {filteredData.length === 0 && (
          <div className="text-center py-8 text-xs text-slate-600">
            No endpoints found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;