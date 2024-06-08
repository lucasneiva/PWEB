import { createTask, updateTask, deleteTask, loadTasks } from './js/task.js';
import { openTaskModal } from './js/modal.js';

const taskAreaContainer = document.getElementById( 'taskAreaContainer' );
const createTaskBtn = document.getElementById('createTaskBtn');

let tasks = [];

document.addEventListener('DOMContentLoaded', () => {
    tasks = loadTasks();
    renderTasks(tasks);
});

function renderTasks( tasks ) {

    const taskAreas = {
        Profissional: [],
        Pessoal: [],
        Acadêmica: []
    };

    // cria e salva taskcards para cada area

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




    // renderiza todas as areas com seus respectivos taskcards

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

    // Adicionar event listenners

    const openTaskButtons = document.querySelectorAll( '.open-task-modal-btn' );
    const editTaskButtons = document.querySelectorAll( '.edit-task-btn' );
    const deleteTaskButtons = document.querySelectorAll( '.delete-task-btn' );

    openTaskButtons.forEach( button => {
        button.addEventListener( 'click', ( event ) => {
            const taskCard = event.target.closest( '.task-card' );
            const taskId = taskCard.dataset.taskId;
            const taskToView = tasks.find( task => task.id === taskId );
            openTaskModal( taskToView, 'view' );
        } );
    } );

    editTaskButtons.forEach( button => {
        button.addEventListener( 'click', ( event ) => {
            const taskCard = event.target.closest( '.task-card' );
            const taskId = taskCard.dataset.taskId;
            const taskToUpdate = tasks.find( task => task.id === taskId );
            openTaskModal( taskToUpdate, 'edit' );
        } );
    } );

    deleteTaskButtons.forEach( button => {
        button.addEventListener( 'click', ( event ) => {
            const taskCard = event.target.closest( '.task-card' );
            const taskId = taskCard.dataset.taskId;
            // Ask for confirmation before deleting
            if ( confirm( 'Are you sure you want to delete this task?' ) ) {
                tasks = deleteTask( tasks, taskId );
                renderTasks( tasks ); // Re-render tasks after deletion
            }
        } );
    } );
}

createTaskBtn.addEventListener('click', () => {
    // When the create task button is clicked, 
    // open the modal in 'create' mode (this is assumed to be the default 
    // in your openTaskModal function, but you can specify it explicitly if needed).
    openTaskModal({}, 'create', (taskId, title, dueDate, area, priority) => {
        // After the modal is submitted, create the task:
        tasks = createTask(tasks, title, dueDate, area, 'active', priority); // Assuming 'active' as a default status
        // And re-render the tasks:
        renderTasks(tasks);
    });
}); 


renderTasks(tasks);