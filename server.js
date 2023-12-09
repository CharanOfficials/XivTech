import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.post("/getWeather", async (req, res) => {
  try {
    let { cities } = req.body;
    cities = cities.split(","); // Remove unnecessary JSON.parse
    let results = [];
    for (const city of cities) {
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=ad07206f5cd5e53988172902d14fa0a2&query=${city}`
      );

      if (response.ok) {
        const data = await response.json();
        results.push(data);
      } else {
        results.push({ error: `Failed to fetch data for ${city}` });
      }
    }

    res.status(200).json({ success: true, data: results });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});
app.listen(3000, () => {
  console.log("Server is up");
});
