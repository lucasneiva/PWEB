// modal.js
const taskModal = document.getElementById( 'taskModal' );
const closeModalBtn = document.querySelector( '.close-modal' );
const taskForm = document.getElementById( 'taskForm' );
const taskIdInput = document.getElementById( 'taskId' );
const taskTitleInput = document.getElementById( 'taskTitle' );
const taskDueDateInput = document.getElementById( 'taskDueDate' );
const taskAreaSelect = document.getElementById( 'taskArea' );
const taskModalTitle = document.getElementById( 'taskModalTitle' );
const taskPrioritySelect = document.getElementById( 'taskPriority' );

let currentModalMode = 'create'; // 'create' or 'edit' or 'view'

// Function to open the modal
function openTaskModal( task = {}, mode = 'create' ) {
    currentModalMode = mode;
    // Populate modal fields 
    taskIdInput.value = task.id || '';
    taskTitleInput.value = task.title || '';
    taskDueDateInput.value = task.dueDate || '';
    taskAreaSelect.value = task.area || 'Work';
    taskPrioritySelect.value = task.priority || 'medium';

    if ( currentModalMode === 'view' ) {
        // Make form fields read-only
        taskTitleInput.readOnly = true;
        taskDueDateInput.readOnly = true;
        taskAreaSelect.disabled = true;
        taskPrioritySelect.disabled = true;
        taskModalTitle.innerHTML = "Ver Tarefa";
        // Hide the "Save Task" button
        taskForm.querySelector( 'button[type="submit"]' ).style.display = 'none';
    } else if ( currentModalMode === 'edit') {
        taskTitleInput.readOnly = false;
        taskDueDateInput.readOnly = false;
        taskAreaSelect.disabled = false;
        taskPrioritySelect.disabled = false;
        taskForm.querySelector( 'button[type="submit"]' ).style.display = 'block';
        taskModalTitle.innerHTML = "Editar Tarefa";

    } else {
        taskTitleInput.readOnly = false;
        taskDueDateInput.readOnly = false;
        taskAreaSelect.disabled = false;
        taskPrioritySelect.disabled = false;
        taskForm.querySelector( 'button[type="submit"]' ).style.display = 'block';
        taskModalTitle.innerHTML = "Criar Tarefa";

    }
    taskModal.style.display = 'block';
}

function closeTaskModal() {
    taskForm.reset();
    currentModalMode = 'create';

    taskTitleInput.readOnly = false;
    taskDueDateInput.readOnly = false;
    taskAreaSelect.disabled = false;
    taskPrioritySelect.disabled = false;
    taskForm.querySelector( 'button[type="submit"]' ).style.display = 'block';

    taskModal.style.display = 'none';
}

closeModalBtn.addEventListener( 'click', closeTaskModal );

export { openTaskModal, closeTaskModal };