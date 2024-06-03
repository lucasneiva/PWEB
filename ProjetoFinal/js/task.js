function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTask(tasks, title, dueDate, area, status, priority) {
    const newTask = {
        id: generateUniqueId(),
        title: title,
        dueDate: dueDate,
        area: area,
        status: status,
        priority: priority
    };

    tasks.push(newTask);
    saveTasks(tasks);
    return tasks;
}

function updateTask(tasks, taskId, title, dueDate, area, status, priority) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        tasks[taskIndex] = {
            id: taskId,
            title: title,
            dueDate: dueDate,
            area: area,
            status: status,
            priority: priority
        };
        saveTasks(tasks);
    }
    return tasks;
}

function deleteTask(tasks, taskId) {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    saveTasks(updatedTasks);
    return updatedTasks;
}

export { generateUniqueId, loadTasks, saveTasks, createTask, updateTask, deleteTask };