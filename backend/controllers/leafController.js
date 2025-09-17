import fs from "fs";
import LeafResult from "../models/leafResult.js";

// ⚠️ Replace this with your actual ML model call
export const analyzeLeaf = async (req, res) => {
  try {
    const imagePath = req.file.path;

    // Example mock result — replace with model output
    const mockResult = {
      diseases: [
        { label: "Bacterial_spot", prob: 0.92, percent: 12.5, severity: "Moderate" },
        { label: "Leaf_Miner", prob: 0.65, percent: 7.2, severity: "Low" }
      ],
      lai: 1.3,
      segmentationImage: "data:image/png;base64,...."
    };

    const leafResult = new LeafResult({
      imagePath,
      ...mockResult
    });

    await leafResult.save();
    res.json(leafResult);

    // cleanup uploaded file
    fs.unlinkSync(imagePath);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Analysis failed" });
  }
};
