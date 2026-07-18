import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PasteCode() {
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("JavaScript");

  const handleSubmit = () => {
    navigate("/diagnosis", {
      state: {
        code,
        language,
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-4xl bg-slate-900 rounded-xl shadow-2xl p-8 border border-purple-600">
        <h1 className="text-4xl font-bold text-center text-purple-400 mb-6">
          CurseBreaker Lite
        </h1>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste broken code snippet here. Max 200 lines"
          className="w-full h-64 bg-slate-800 text-white border border-slate-700 rounded-lg p-4 mb-6"
        />

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg p-3 mb-6"
        >
          <option>JavaScript</option>
          <option>Python</option>
          <option>HTML/CSS</option>
        </select>

        <button
          onClick={handleSubmit}
          className="w-full bg-purple-600 hover:bg-purple-700 transition p-3 rounded-lg font-bold"
        >
          BREAK THE CURSE
        </button>
      </div>

      <footer className="mt-8 text-gray-400">
        Powered by RerosperityHome
      </footer>
    </div>
  );
}

export default PasteCode;
