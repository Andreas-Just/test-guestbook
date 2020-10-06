const Todo = require('../models/Chit');

const generateChit = async (req, res) => {
  try {
    const { name, description, date, time } =  req.body;
    const existing = await Todo.findOne({ date, time });

    if (existing) {
      return res.json({ todo: existing });
    }

    const todo = new Todo({ name, description, date });

    await todo.save();
    res.status(201).json({ todo });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong, please try again' });
  }
};

const getChits = async (req, res) => {
  try {
    const todos = await Todo.find();

    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong, please try again' });
  }
};

const getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong, please try again' });
  }
};

module.exports = {
  generateChit,
  getChits,
  getTodo,
};
