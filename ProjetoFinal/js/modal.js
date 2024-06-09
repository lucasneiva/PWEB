import { createTask, updateTask, saveTasks, loadTasks, generateUniqueId } from "./task.js";
import { renderTasks } from '../script.js';
const taskModal = document.getElementById( 'taskModal' );
const closeModalBtn = document.querySelector( '.close-modal' );
const taskForm = document.getElementById( 'taskForm' );
const taskIdInput = document.getElementById( 'taskId' );
const taskTitleInput = document.getElementById( 'taskTitle' );
const taskDueDateInput = document.getElementById( 'taskDueDate' );
const taskAreaSelect = document.getElementById( 'taskArea' );
const taskModalTitle = document.getElementById( 'taskModalTitle' );
const taskPrioritySelect = document.getElementById( 'taskPriority' );
const markAsEncerradaBtn = document.getElementById( 'markAsEncerradaBtn' ); // Add this line

let currentModalMode = 'create';

function openTaskModal( tasks, task = {}, mode = 'create' ) {
    currentModalMode = mode;

    if ( task ) {
        taskIdInput.value = task.id || '';
        taskTitleInput.value = task.title || '';
        taskDueDateInput.value = task.dueDate || '';
        taskAreaSelect.value = task.area || 'Profissional';
        taskPrioritySelect.value = task.priority || 'baixa';
    }

    if ( currentModalMode === 'view' ) {
        markAsEncerradaBtn.style.display = 'block'; // Show the button
    } else {
        markAsEncerradaBtn.style.display = 'none'; // Hide the button
    }

    if ( currentModalMode === 'view' ) {
        taskTitleInput.readOnly = true;
        taskDueDateInput.readOnly = true;
        taskAreaSelect.disabled = true;
        taskPrioritySelect.disabled = true;
        taskModalTitle.innerHTML = "Ver Tarefa";
        taskForm.querySelector( 'button[type="submit"]' ).style.display = 'none';
    } else if ( currentModalMode === 'edit' ) {
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

    taskForm.onsubmit = function ( event ) {
        event.preventDefault();

        const newTask = {
            id: taskIdInput.value || generateUniqueId(),
            title: taskTitleInput.value,
            dueDate: taskDueDateInput.value,
            area: taskAreaSelect.value,
            priority: taskPrioritySelect.value,
            status: currentModalMode === 'create' ? 'active' : task.status
        };

        if ( currentModalMode === 'create' ) {
            tasks = createTask( tasks, newTask.title, newTask.dueDate, newTask.area, newTask.status, newTask.priority );
        } else if ( currentModalMode === 'edit' ) {
            tasks = updateTask( tasks, newTask.id, newTask.title, newTask.dueDate, newTask.area, newTask.status, newTask.priority );
        }

        saveTasks(tasks);
        tasks = loadTasks();
        renderTasks( tasks );
        closeTaskModal();
    };

    markAsEncerradaBtn.onclick = function () {
        if ( currentModalMode !== 'create' ) {
            task.status = 'encerrada';
            tasks = updateTask( tasks, task.id, task.title, task.dueDate, task.area, task.status, task.priority );
            renderTasks( tasks );
            closeTaskModal();
        }
    };

    taskModal.style.display = 'block';
}

function closeTaskModal() {
    taskForm.reset();
    taskModal.style.display = 'none';
}

closeModalBtn.addEventListener( 'click', closeTaskModal );

window.addEventListener( 'click', ( event ) => {
    if ( event.target === taskModal ) {
        closeTaskModal();
    }
} );

export { openTaskModal, closeTaskModal };
