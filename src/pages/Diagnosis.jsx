import { useLocation, useNavigate } from "react-router-dom";
import { mockData } from "../data/mockData";

function Diagnosis() {
  const location = useLocation();
  const navigate = useNavigate();

  const language = location.state?.language || "JavaScript";
  const code = location.state?.code || "";

  const result = mockData[language];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto bg-slate-900 p-8 rounded-xl border border-purple-600">
        <h1 className="text-3xl font-bold text-purple-400 mb-6">
          The Curse Breaker Found 3 Issues
        </h1>

        <ul className="space-y-3 mb-6">
          {result.issues.map((issue, index) => (
            <li key={index}>{issue}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-2">Explanation</h2>
        <p className="mb-6">{result.explanation}</p>

        <button
          onClick={() =>
            navigate("/solution", {
              state: { language, code },
            })
          }
          className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700"
        >
          View Fixed Code
        </button>

        <footer className="mt-8 text-center text-gray-400">
          Powered by RerosperityHome
        </footer>
      </div>
    </div>
  );
}

export default Diagnosis;
