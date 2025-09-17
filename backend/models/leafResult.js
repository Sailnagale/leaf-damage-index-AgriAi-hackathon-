import mongoose from "mongoose";

const leafResultSchema = new mongoose.Schema({
  imagePath: String,
  diseases: [ { label: String, prob: Number, percent: Number, severity: String } ],
  lai: Number,
  segmentationImage: String, // base64 or file path
  createdAt: { type: Date, default: Date.now }
});

const LeafResult = mongoose.model("LeafResult", leafResultSchema);
export default LeafResult;
