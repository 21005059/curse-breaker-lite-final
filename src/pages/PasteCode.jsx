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

  const handleDownload = () => {
    let extension = "txt";

    if (language === "JavaScript") {
      extension = "js";
    } else if (language === "Python") {
      extension = "py";
    } else if (language === "HTML/CSS") {
      extension = "html";
    }

    const blob = new Blob([code], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `code.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
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

        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-purple-600 hover:bg-purple-700 transition p-3 rounded-lg font-bold"
          >
            BREAK THE CURSE
          </button>

          <button
            onClick={handleDownload}
            className="flex-1 bg-green-600 hover:bg-green-700 transition p-3 rounded-lg font-bold"
          >
            DOWNLOAD CODE
          </button>
        </div>
      </div>

      <footer className="mt-8 text-gray-400">
        Powered by RerosperityHome
      </footer>
    </div>
  );
}

export default PasteCode;