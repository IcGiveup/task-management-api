const taskService = require("../services/task.service");

exports.createTask = async (req, res, next) => {
  try {
    const task = await taskService.createTask(req.body, req.user.userId);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

exports.getTasks = async (req, res) => {
  try {
    const userId = req.user.id;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const tasks = await prisma.task.findMany({
      where: { userId },
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    });

    const totalTasks = await prisma.task.count({
      where: { userId },
    });

    return res.status(200).json({
      success: true,
      page,
      totalPages: Math.ceil(totalTasks / limit),
      totalTasks,
      data: tasks,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch tasks",
    });
  }
};

exports.getTaskById = async (req, res, next) => {
  try {
    const task = await taskService.getTaskById(req.params.id, req.user.userId);
    res.json(task);
  } catch (err) {
    next(err);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const task = await taskService.updateTask(
      req.params.id,
      req.body,
      req.user.userId
    );
res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const result = await taskService.deleteTask(
      req.params.id,
      req.user.userId
    );
    res.json(result);
  } catch (err) {
    next(err);
  }
};