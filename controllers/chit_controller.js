const Chit = require('../models/Chit');

const generateChit = async (req, res) => {
  try {
    const { name, description, date } =  req.body;
    const existing = await Chit.findOne({ name, description });

    if (existing) {
      return res.json({ chit: existing });
    }

    const chit = new Chit({ name, description, date });

    await chit.save();
    res.status(201).json({ chit });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong, please try again' });
  }
};

const getChits = async (req, res) => {
  try {
    const chits = await Chit.find();

    res.json(chits);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong, please try again' });
  }
};

const getChit = async (req, res) => {
  try {
    const chit = await Chit.findById(req.params.id);

    res.json(chit);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong, please try again' });
  }
};

module.exports = { generateChit, getChits, getChit };
