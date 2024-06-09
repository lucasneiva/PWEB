import { createTask, updateTask, deleteTask, loadTasks } from './js/task.js';
import { openTaskModal } from './js/modal.js';

const taskAreaContainer = document.getElementById( 'taskAreaContainer' );
const createTaskBtn = document.getElementById( 'createTaskBtn' );

let tasks = [];

document.addEventListener( 'DOMContentLoaded', () => {
    tasks = loadTasks();
    renderTasks( tasks );
} );

export function renderTasks( tasks ) {
    const taskAreas = {
        Profissional: [],
        Pessoal: [],
        Acadêmica: []
    };

    tasks.forEach( task => {
        const taskCardHTML = `
            <div class="task-card" data-task-id="${task.id}">
                <h3>${task.title}</h3>
                <p>Término: ${task.dueDate}</p>
                <span class="status-indicator ${task.status === 'active' ? 'active' : 'inactive'}"></span> 
                <span class="priority-indicator ${task.priority}"></span> 
                <button class="open-task-modal-btn">Abrir</button>
                <button class="edit-task-btn">Editar</button>
                <button class="delete-task-btn">Deletar</button>
            </div>
        `;
        taskAreas[ task.area ].push( taskCardHTML );
    } );

    for ( const area in taskAreas ) {
        const areaDiv = document.querySelector( `.task-area[data-area="${area}"]` );
        areaDiv.innerHTML = `<h2>${area}</h2>`;

        if ( taskAreas[ area ].length > 0 ) {
            taskAreas[ area ].forEach( taskHTML => {
                areaDiv.innerHTML += taskHTML;
            } );
        } else {
            areaDiv.innerHTML += '<p>Sem tarefas por enquanto.</p>';
        }
    }

    const openTaskButtons = document.querySelectorAll( '.open-task-modal-btn' );
    const editTaskButtons = document.querySelectorAll( '.edit-task-btn' );
    const deleteTaskButtons = document.querySelectorAll( '.delete-task-btn' );

    openTaskButtons.forEach( button => {
        button.addEventListener( 'click', ( event ) => {
            const taskCard = event.target.closest( '.task-card' );
            const taskId = taskCard.dataset.taskId;
            const taskToView = tasks.find( task => task.id === taskId );
            openTaskModal( tasks, taskToView, 'view' );
        } );
    } );

    editTaskButtons.forEach( button => {
        button.addEventListener( 'click', ( event ) => {
            const taskCard = event.target.closest( '.task-card' );
            const taskId = taskCard.dataset.taskId;
            const taskToUpdate = tasks.find( task => task.id === taskId );
            openTaskModal( tasks, taskToUpdate, 'edit' );
        } );
    } );

    deleteTaskButtons.forEach( button => {
        button.addEventListener( 'click', ( event ) => {
            const taskCard = event.target.closest( '.task-card' );
            const taskId = taskCard.dataset.taskId;
            if ( confirm( 'Are you sure you want to delete this task?' ) ) {
                tasks = deleteTask( tasks, taskId );
                renderTasks( tasks );
            }
        } );
    } );
}

createTaskBtn.addEventListener( 'click', () => {
    openTaskModal( tasks, {}, 'create' );
} );
