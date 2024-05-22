import { createTask, updateTask, deleteTask } from './task.js';

const taskAreaContainer = document.getElementById( 'taskAreaContainer' );


function renderTasks( tasks ) {

    const taskAreas = {
        Profissional: [],
        Pessoal: [],
        Acadêmica: []
    };

    tasks.forEach( task => {
        const taskCardHTML = `
      <div class="task-card" data-task-id="${task.id}">
        <h3>${task.title}</h3>
        <p>Due: ${task.dueDate}</p>
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
        console.log( area );
        areaDiv.innerHTML = `<h2>${area}</h2>`;

        if ( taskAreas[ area ].length > 0 ) {
            taskAreas[ area ].forEach( taskHTML => {
                areaDiv.innerHTML += taskHTML;
            } );
        } else {
            areaDiv.innerHTML += '<p>Sem tarefas por enquanto.</p>';
        }
    }

    taskAreaContainer.addEventListener( 'click', ( event ) => {
        const target = event.target;
        const taskCard = target.closest( '.task-card' );

        if ( taskCard ) {
            const taskId = taskCard.dataset.taskId;

            if ( target.classList.contains( 'delete-task-btn' ) ) {
                // Ask for confirmation before deleting
                if ( confirm( 'Tem certeza que quer deletar?' ) ) {
                    tasks = deleteTask( tasks, taskId );
                    renderTasks( tasks ); // Re-render tasks after deletion
                }
            } else if ( target.classList.contains( 'edit-task-btn' ) ) {
                // Find the task to edit
                const taskToUpdate = tasks.find( task => task.id === taskId );
                // ... (Implementation for opening the modal in edit mode. 
                // You'll likely put this logic in modal.js if you create that module)
            }
            // ... (Add logic for "Open Task" if needed)
        }
    } );

    // Add event listeners to dynamically created buttons
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

export { renderTasks };