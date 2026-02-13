const router = require("express").Router();
const Enquiry = require("../models/Enquiry");
const adminAuth = require("../middleware/adminAuth");

/* CLIENT – SAVE ENQUIRY */
router.post("/", async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.status(201).json({ message: "Enquiry saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

/* ADMIN – GET ALL ENQUIRIES (PROTECTED) */
router.get("/", adminAuth, async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching enquiries" });
  }
});
/* ======================
   ADMIN – DELETE ENQUIRY
   ====================== */
router.delete("/:id", adminAuth, async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);
    res.json({ message: "Enquiry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting enquiry" });
  }
});
module.exports = router;
