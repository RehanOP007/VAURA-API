import React, { useState } from "react";

function RequestHeaderTable({ headers }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!headers?.length) return null;

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Header Section */}
      <div className="border-b border-gray-100 bg-gray-50/70 px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500">
            HTTP Request Headers
          </h2>
          <span className="ml-auto rounded-md bg-gray-200/60 px-2 py-0.5 text-xs font-medium text-gray-600">
            {headers.length} {headers.length === 1 ? "item" : "items"}
          </span>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/40 text-xs font-semibold uppercase tracking-wider text-gray-400">
              <th scope="col" className="px-6 py-3 w-1/3">
                Key
              </th>
              <th scope="col" className="px-6 py-3 w-2/3">
                Value
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 font-mono text-xs">
            {headers.map((header, index) => (
              <tr
                key={index}
                className="group hover:bg-slate-50/80 transition-colors duration-150 ease-in-out"
              >
                <td className="whitespace-nowrap px-6 py-3.5 font-semibold text-indigo-600 select-all">
                  {header.key}
                </td>

                <td className="px-6 py-3.5 text-gray-600 break-all relative pr-16">
                  <span className="block max-w-prose">{header.value}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RequestHeaderTable;
