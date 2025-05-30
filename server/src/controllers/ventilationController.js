const ventilationService = require('../services/ventilationService');
const getVentilation = async (req, res) => {
  try {
    const ventilation = await ventilationService.getVentilation();
    res.status(200).json(ventilation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createVentilation = async (req, res) =>{
try {
    const ventilation = await ventilationService.createVentilation(req.body);
    res.status(201).json(ventilation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
const TurnOn = async (req, res) =>{
try {
    const ventilation = await ventilationService.turnOn();
    res.status(200).json(ventilation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
const TurnOff = async (req, res) =>{
try {
    const ventilation = await ventilationService.turnOff();
    res.status(200).json(ventilation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
const getStatus = async (req,res)=>{
  try {
    const ventilation = await ventilationService.getStatus();
    res.status(200).json(ventilation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }  
}
const increaseVentilation = async (req,res) =>{
      try {
    const ventilation = await ventilationService.increaseVentilation();
    res.status(200).json(ventilation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }  
}
const decreaseVentilation = async (req,res) =>{
      try {
    const ventilation = await ventilationService.decreaseVentilation();
    res.status(200).json(ventilation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }  
}
module.exports = { getVentilation ,createVentilation, TurnOn, TurnOff,getStatus,
    increaseVentilation, decreaseVentilation
 };
