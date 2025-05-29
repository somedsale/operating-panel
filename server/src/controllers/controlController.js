const controlService = require('../services/controlService');
const relayService = require('../services/relayService');

const getAllControls = async (req, res) => {
  try {
    const constrols = await controlService.getAllControls();
    res.status(200).json(constrols);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getStatusControl = async (req, res) => {
  try {
    const control = await controlService.getControlById(req.params.id);
    if(!control){
      return res.status(404).json({ message: 'control not found' });
    }
    const relay = await relayService.findRelayById(control.relay._id)
    if(!relay){
      return res.status(404).json({ message: 'Relay not found' });
    }
    
    return res.status(200).json(relay);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createControl = async (req, res) => {
  try {
    const control = await controlService.createControl(req.body);
    res.status(201).json(control);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const TurnOn = async (req, res) => {
  try {
    const control = await controlService.getControlById(req.params.id);
    if(!control){
      return res.status(404).json({ message: 'control not found' });
    }
    const relay = await relayService.findRelayById(control.relay._id)
    if(!relay){
      return res.status(404).json({ message: 'Relay not found' });
    }
    const turnOncontrol = await relayService.TurnOn(relay);
    res.status(200).json({turnOncontrol, message: 'control turn on'});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const TurnOff = async (req, res) => {
  try {
    const control = await controlService.getControlById(req.params.id);
    if(!control){
      return res.status(404).json({ message: 'control not found' });
    }
    const relay = await relayService.findRelayById(control.relay._id)
    if(!relay){
      return res.status(404).json({ message: 'Relay not found' });
    }
    const turnOffcontrol = await relayService.TurnOff(relay);
    res.status(200).json({turnOffcontrol, message: 'control turn off'});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const changeRelay = async(req, res)=>{
  try {
    const {id,relayId} = req.body;
    const control= await controlService.getControlById(id);
    if(!control){
      return res.status(404).json({ message: 'control not found' });
    }
    const relay = await relayService.findRelayById(relayId);
    if(!relay){
      return res.status(404).json({ message: 'Relay not found' });
    }
    const newcontrol = await controlService.changeRelay(id,relay);
    res.status(201).json(newcontrol);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllControls, createControl,TurnOn, TurnOff ,changeRelay ,getStatusControl };