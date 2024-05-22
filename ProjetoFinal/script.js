import { loadTasks, createTask, updateTask } from './js/task.js';
import { renderTasks } from './js/ui.js';

// Get DOM elements
const taskAreaContainer = document.getElementById( 'taskAreaContainer' );
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

let tasks = loadTasks();

// Function to open the modal
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

// Event listener for "Create Task" button
createTaskBtn.addEventListener( 'click', () => {
    openTaskModal(); // Open in "create" mode
} );

// Event listener to close the modal when the close button is clicked
closeModalBtn.addEventListener( 'click', closeTaskModal );

// Event listener for form submission
taskForm.addEventListener( 'submit', ( event ) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const taskId = taskIdInput.value;
    const title = taskTitleInput.value;
    const dueDate = taskDueDateInput.value;
    const area = taskAreaSelect.value;
    const status = taskStatusSelect.value;
    const priority = taskPrioritySelect.value;

    if ( taskId ) {
        // Update existing task
        tasks = updateTask( tasks, taskId, title, dueDate, area, status, priority );
    } else {
        // Create new task
        tasks = createTask( tasks, title, dueDate, area, status, priority );
    }

    renderTasks( tasks ); // Re-render tasks
    closeTaskModal();
} );


// Initial rendering of tasks
renderTasks( tasks );