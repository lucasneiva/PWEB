import { loadTasks, createTask, updateTask } from './js/task.js';
import { renderTasks } from './js/ui.js';

const createTaskBtn = document.getElementById( 'createTaskBtn' );
const taskModal = document.getElementById( 'taskModal' );
const closeModalBtn = document.querySelector( '.close-modal' );
const taskForm = document.getElementById( 'taskForm' );
const taskIdInput = document.getElementById( 'taskId' );
const taskTitleInput = document.getElementById( 'taskTitle' );
const taskDueDateInput = document.getElementById( 'taskDueDate' );
const taskAreaSelect = document.getElementById( 'taskArea' );
const taskStatusSelect = document.getElementById( 'taskStatus' );
const taskPrioritySelect = document.getElementById( 'taskPriority' );

// localStorage.clear();

let tasks = loadTasks();

function openTaskModal( task = {} ) {
    // Populate modal fields if editing an existing task
    if ( task.id ) {
        taskIdInput.value = task.id;
        taskTitleInput.value = task.title;
        taskDueDateInput.value = task.dueDate;
        taskAreaSelect.value = task.area;
        taskStatusSelect.value = task.status;
        taskPrioritySelect.value = task.priority;
    } else {
        taskForm.reset(); // Clear form if creating a new task
    }
    taskModal.style.display = 'block';
}

// Function to close the modal
function closeTaskModal() {
    taskModal.style.display = 'none';
}

createTaskBtn.addEventListener( 'click', () => {
    openTaskModal();
} );

closeModalBtn.addEventListener( 'click', closeTaskModal );

taskForm.addEventListener( 'submit', ( event ) => {
    event.preventDefault();
    console.log("aqui")
    const taskId = taskIdInput.value;
    const title = taskTitleInput.value;
    const dueDate = taskDueDateInput.value;
    const area = taskAreaSelect.value;
    const priority = taskPrioritySelect.value;

    if ( taskId ) {
        tasks = updateTask( tasks, taskId, title, dueDate, area, status, priority );
    } else {
        tasks = createTask( tasks, title, dueDate, area, status, priority );
    }

    renderTasks( tasks );
    closeTaskModal();
} );

renderTasks( tasks );