const prisma = require("../config/prisma");

exports.createTask = async (data, userId) => {
  const { title, description, dueDate } = data;

  if (!title) throw new Error("Title is required");

  if (new Date(dueDate) <= new Date())
    throw new Error("Due date must be in the future");

  return prisma.task.create({
    data: {
      title,
      description,
      dueDate: new Date(dueDate),
      userId,
    },
  });
};

exports.getTasks = async (query, userId) => {
  const { page = 1, limit = 10, status } = query;

  return prisma.task.findMany({
    where: {
      userId,
      status: status || undefined,
    },
    skip: (page - 1) * limit,
    take: Number(limit),
  });
};

exports.getTaskById = async (id, userId) => {
  const task = await prisma.task.findFirst({
    where: { id: Number(id), userId },
  });

  if (!task) throw new Error("Task not found");

  return task;
};

exports.updateTask = async (id, data, userId) => {
  const task = await prisma.task.findFirst({
    where: { id: Number(id), userId },
  });

  if (!task) throw new Error("Task not found");

  return prisma.task.update({
    where: { id: Number(id) },
    data,
  });
};

exports.deleteTask = async (id, userId) => {
  const task = await prisma.task.findFirst({
    where: { id: Number(id), userId },
  });

  if (!task) throw new Error("Task not found");

  await prisma.task.delete({ where: { id: Number(id) } });

  return { message: "Task deleted successfully" };
};