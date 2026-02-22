const prisma = require("../config/prisma");

const createTask = async (data) => {
  return prisma.task.create({ data });
};

const getTasks = async ({ userId, page, limit, status }) => {
  const skip = (page - 1) * limit;

  const where = { userId };

  if (status) {
    where.status = status;
  }

  const tasks = await prisma.task.findMany({
    where,
    skip,
    take: limit,
    orderBy: { createdAt: "desc" },
  });

  const total = await prisma.task.count({ where });

  return {
    total,
    page,
    limit,
    data: tasks,
  };
};

const getTaskById = async (id, userId) => {
  const task = await prisma.task.findFirst({
    where: { id: parseInt(id), userId },
  });

  if (!task) {
    throw new Error("Task not found");
  }

  return task;
};

const updateTask = async (id, data, userId) => {
  const task = await prisma.task.findFirst({
    where: { id: parseInt(id), userId },
  });

  if (!task) {
    throw new Error("Task not found");
  }

  return prisma.task.update({
    where: { id: parseInt(id) },
    data,
  });
};

const deleteTask = async (id, userId) => {
  const task = await prisma.task.findFirst({
    where: { id: parseInt(id), userId },
  });

  if (!task) {
    throw new Error("Task not found");
  }

  await prisma.task.delete({
    where: { id: parseInt(id) },
  });

  return { message: "Task deleted successfully" };
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};