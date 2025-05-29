const tempService = require('../services/tempService') 
const getTemperature = async (req, res) => {
  try {
    const tempertature = await tempService.getTemperature();
    res.status(200).json(tempertature);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getHumidity = async (req, res) => {
  try {
    const tempertature = await tempService.getHumidity();
    res.status(200).json(tempertature);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { getTemperature, getHumidity};
