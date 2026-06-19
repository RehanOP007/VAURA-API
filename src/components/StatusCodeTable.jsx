import React from "react";

const getStatusColor = (code) => {
  if (code >= 200 && code < 300) {
    return {
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
      dot: "bg-emerald-500",
    };
  }
  if (code >= 300 && code < 400) {
    return {
      badge: "bg-blue-50 text-blue-700 border-blue-200/60",
      dot: "bg-blue-500",
    };
  }
  if (code >= 400 && code < 500) {
    return {
      badge: "bg-amber-50 text-amber-700 border-amber-200/60",
      dot: "bg-amber-500",
    };
  }
  if (code >= 500) {
    return {
      badge: "bg-rose-50 text-rose-700 border-rose-200/60",
      dot: "bg-rose-500",
    };
  }
  return {
    badge: "bg-slate-50 text-slate-700 border-slate-200/60",
    dot: "bg-slate-400",
  };
};

function StatusCodeTable({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Response Status Codes
          </h2>
          <span className="rounded-md bg-slate-200/60 px-2 py-0.5 font-mono text-xs font-medium text-slate-600">
            {data.length} {data.length === 1 ? "code" : "codes"}
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/40 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <th scope="col" className="px-6 py-3.5 w-1/4">
                Status Code
              </th>
              <th scope="col" className="px-6 py-3.5 w-3/4">
                Description
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 font-sans">
            {data.map((status, index) => {
              const styles = getStatusColor(status.code);
              return (
                <tr
                  key={index}
                  className="group hover:bg-slate-50/50 transition-colors duration-150 ease-in-out"
                >

                  <td className="whitespace-nowrap px-6 py-4 alignment-baseline">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-bold border shadow-sm ${styles.badge}`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${styles.dot}`}
                      />
                      {status.code}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-slate-600 font-medium leading-relaxed max-w-prose">
                    {status.description}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StatusCodeTable;
