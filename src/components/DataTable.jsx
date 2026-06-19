import React from "react";

function DataTable({ title = "Query Parameters", data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="my-6 font-sans w-full">
      <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white shadow-sm">
        <div className="px-5 py-4 border-b bg-gray-50">
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
            {title}
          </h2>
        </div>
        <div className="overflow-x-auto overflow-y-auto max-h-[400px]">
          <table className="w-full text-sm text-left border-collapse font-mono">
            <thead className="bg-gray-50/70 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <tr>
                <th scope="col" className="px-6 py-3.5">
                  Field
                </th>
                <th scope="col" className="px-6 py-3.5">
                  Type
                </th>
                <th scope="col" className="px-6 py-3.5">
                  Required
                </th>
                <th scope="col" className="px-6 py-3.5">
                  Description
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50/50 transition-colors duration-150"
                >
                  <td className="px-6 py-4 font-mono text-sm font-semibold text-indigo-600 whitespace-nowrap">
                    {item.name}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200 font-mono">
                      {item.type || "string"}
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.required ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold bg-red-50 text-red-700 border border-red-100">
                        required
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-gray-50 text-gray-400 border border-transparent">
                        optional
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-4 text-gray-600 leading-relaxed max-w-md break-words">
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
