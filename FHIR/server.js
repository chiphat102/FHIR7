const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { createObjectCsvWriter } = require("csv-writer");

const app = express();
const PORT = 3000;

app.use(express.json());

// ✅ Enable CORS for all origins
app.use(cors({
    origin: "http://127.0.0.1:5500", // Allows any frontend to access the backend
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

// Define CSV File and Headers
const csvFilePath = "patients.csv";
const csvWriter = createObjectCsvWriter({
    path: csvFilePath,
    header: [
        { id: "patientID", title: "PatientID" },
        { id: "nickname", title: "Nickname" }
    ],
    append: true // Add new data instead of overwriting
});

// API Endpoint to Save Patient Data
app.post("/save-patient", async (req, res) => {
    try {
        const { patientID, nickname } = req.body;

        if (!patientID || !nickname) {
            return res.status(400).json({ error: "Missing patientID or nickname" });
        }

        const newPatient = [{ patientID: patientID, nickname: nickname }];

        await csvWriter.writeRecords(newPatient);
        console.log("Patient data saved successfully!");

        res.json({ message: "Patient data saved to CSV!" });
    } catch (error) {
        console.error("Error writing to CSV:", error);
        res.status(500).json({ error: "Failed to save patient data" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
