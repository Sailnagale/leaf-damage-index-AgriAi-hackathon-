import express from "express";
import multer from "multer";
import { analyzeLeaf } from "../controllers/leafController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // temporary storage

router.post("/analyze", upload.single("image"), analyzeLeaf);
router.get('/',(req,res)=>{
    res.send("hello from home page");
})

export default router;
