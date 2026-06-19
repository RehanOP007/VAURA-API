import DataTable from "./DataTable";
import RequestHeaderTable from "./RequestHeaderTable";
import StatusCodeTable from "./StatusCodeTable";

function ApiDetails({ api }) {
  if (!api) {
    return (
      <div className="p-6 text-gray-500">
        Select an API from the sidebar
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">{api.name}</h1>

      <div className="mt-4 p-5 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          End Point
        </h2>
        <div className="flex items-center gap-3 flex-wrap">
          <span
            className={`
              px-3 py-1 text-xs font-semibold rounded-full
              ${api.method === "GET" && "bg-green-100 text-green-800"}
              ${api.method === "POST" && "bg-blue-100 text-blue-800"}
              ${api.method === "PUT" && "bg-yellow-100 text-yellow-800"}
              ${api.method === "DELETE" && "bg-red-100 text-red-800"}
              `}
          >
            {api.method}
          </span>

          <code className="text-sm text-green-500 bg-gray-100 px-3 py-1 rounded-md break-all">
            {api.endpoint}
          </code>
        </div>
      </div>

      <div className="mt-4 p-4 rounded-lg border border-gray-200 bg-gray-50">
        <h2 className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-2">
          Description
        </h2>

        <p className="text-gray-800 leading-relaxed">
          {api.description || "No description available for this API."}
        </p>
      </div>

      <RequestHeaderTable headers={api.headers} />

      <DataTable tittle="Query Params" data={api.queryParams} />

      {api.requestBody?.sample && (
        <div className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="px-5 py-3 bg-gray-50 border-b">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Sample Request
            </h3>
          </div>

          <div className="p-5">
            <pre className="bg-gray-900 text-green-300 text-xs p-4 rounded-lg overflow-auto max-h-[500px] font-mono">
              {JSON.stringify(api.requestBody.sample, null, 2)}
            </pre>
          </div>
        </div>
      )}

      {api.response && (
        <div className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="px-5 py-3 bg-gray-50 border-b">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Response
            </h3>
          </div>

          <div className="p-5">
            <pre className="bg-gray-900 text-blue-200 text-xs p-4 rounded-lg overflow-auto max-h-[500px] font mono">
              {JSON.stringify(api.response, null, 2)}
            </pre>
          </div>
        </div>
      )}

      <StatusCodeTable data={api.statusCodes} />
    </div>
  );
}

export default ApiDetails;