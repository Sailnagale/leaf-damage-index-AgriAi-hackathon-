import { useState } from "react";
import axios from "axios";
import ResultView from "./ResultView";

function UploadPanel() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please select a leaf image!");

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:5000/api/leaf/analyze",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setResult(res.data);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Something went wrong. Check backend logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md w-full max-w-lg mx-auto bg-white">
      <h2 className="text-xl font-semibold mb-4">Upload Leaf Image</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4 block w-full"
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Upload & Analyze"}
      </button>

      {result && <ResultView result={result} />}
    </div>
  );
}

export default UploadPanel;
