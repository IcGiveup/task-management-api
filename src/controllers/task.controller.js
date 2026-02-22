const taskService = require("../services/task.service");

const createTask = async (req, res, next) => {
  try {
    const { title, description, dueDate, status } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is required",
      });
    }

    if (!dueDate) {
      return res.status(400).json({
        success: false,
        message: "Due date is required",
      });
    }

    const now = new Date();
    const due = new Date(dueDate);

    if (due <= now) {
      return res.status(400).json({
        success: false,
        message: "Due date must be a future date",
      });
    }

    const task = await taskService.createTask({
      title,
      description,
      dueDate: due,
      status: status || "pending",
      userId: req.user.id,
    });

    res.status(201).json({
      success: true,
      data: task,
    });
  } catch (err) {
    next(err);
  }
};

const getTasks = async (req, res, next) => {
  try {
    const { page = 1, limit = 5, status } = req.query;

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    const result = await taskService.getTasks({
      userId: req.user.id,
      page: pageNumber,
      limit: limitNumber,
      status,
    });

    res.status(200).json({
      success: true,
      ...result,
    });
  } catch (err) {
    next(err);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const task = await taskService.getTaskById(
      req.params.id,
      req.user.id
    );
    res.json(task);
  } catch (err) {
    next(err);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const task = await taskService.updateTask(
      req.params.id,
      req.body,
      req.user.id
    );
    res.json(task);
  } catch (err) {
    next(err);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const result = await taskService.deleteTask(
      req.params.id,
      req.user.id
    );
    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};