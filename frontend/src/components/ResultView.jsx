function ResultView({ result }) {
  const { diseases, damagePercentages, lai, maskUrl } = result;

  return (
    <div className="mt-6 p-4 border rounded-lg shadow-md bg-gray-50">
      <h2 className="text-lg font-semibold mb-2">Analysis Results</h2>

      {/* Diseases list */}
      <ul className="mb-3">
        {diseases.map((disease, idx) => (
          <li key={idx} className="mb-1">
            <strong>{disease}</strong> – {damagePercentages[idx]}% area
          </li>
        ))}
      </ul>

      {/* Leaf Area Index */}
      <p className="mb-3">
        <strong>Leaf Area Index (LAI):</strong> {lai}
      </p>

      {/* Segmentation mask */}
      {maskUrl && (
        <div>
          <h3 className="font-semibold mb-1">Affected Areas:</h3>
          <img
            src={maskUrl}
            alt="Segmentation Mask"
            className="border rounded max-w-full"
          />
        </div>
      )}
    </div>
  );
}

export default ResultView;
