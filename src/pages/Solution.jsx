import { useLocation } from "react-router-dom";
import { useState } from "react";
import { mockData } from "../data/mockData";

function Solution() {
  const location = useLocation();
  const language = location.state?.language || "JavaScript";

  const result = mockData[language];

  const [showFixes, setShowFixes] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(result.fixedCode);
    alert("Code copied!");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto bg-slate-900 p-8 rounded-xl border border-purple-600">
        <h1 className="text-3xl font-bold text-purple-400 mb-6">
          Fixed Code
        </h1>

        <pre className="bg-slate-800 p-4 rounded-lg overflow-auto mb-6">
          <code>{result.fixedCode}</code>
        </pre>

        <button
          onClick={() => setShowFixes(!showFixes)}
          className="bg-blue-600 px-5 py-3 rounded-lg mr-4"
        >
          EXPLAIN THE FIX
        </button>

        <button
          onClick={copyCode}
          className="bg-green-600 px-5 py-3 rounded-lg"
        >
          COPY CODE
        </button>

        {showFixes && (
          <ul className="mt-6 list-disc pl-6">
            {result.fixes.map((fix, index) => (
              <li key={index}>{fix}</li>
            ))}
          </ul>
        )}

        <footer className="mt-8 text-center text-gray-400">
          Powered by RerosperityHome
        </footer>
      </div>
    </div>
  );
}

export default Solution;
