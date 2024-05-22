import { createTask, updateTask, deleteTask } from './task.js';

const taskAreaContainer = document.getElementById( 'taskAreaContainer' );

// Function to render tasks to the UI
function renderTasks( tasks ) {
    taskAreaContainer.innerHTML = '';

    const taskAreas = {
        Work: [],
        Personal: [],
        Other: []
    };

    tasks.forEach( task => {
        const taskCardHTML = `
      <div class="task-card" data-task-id="${task.id}">
        <h3>${task.title}</h3>
        <p>Due: ${task.dueDate}</p>
        <span class="status-indicator ${task.status === 'active' ? 'active' : 'inactive'}"></span> 
        <span class="priority-indicator ${task.priority}"></span> 
        <button class="open-task-modal-btn">Open</button>
        <button class="edit-task-btn">Edit</button>
        <button class="delete-task-btn">Delete</button>
      </div>
    `;
        taskAreas[ task.area ].push( taskCardHTML );
    } );

    // Add tasks to each area in the UI
    for ( const area in taskAreas ) {
        const areaDiv = document.querySelector( `.task-area[data-area="${area}"]` );
        areaDiv.innerHTML = '';

        if ( taskAreas[ area ].length > 0 ) {
            taskAreas[ area ].forEach( taskHTML => {
                areaDiv.innerHTML += taskHTML;
            } );
        } else {
            areaDiv.innerHTML = '<p>No tasks in this area yet.</p>';
        }
    }

    // Event delegation for task actions (after rendering)
    taskAreaContainer.addEventListener( 'click', ( event ) => {
        const target = event.target;
        const taskCard = target.closest( '.task-card' );

        if ( taskCard ) {
            const taskId = taskCard.dataset.taskId;

            if ( target.classList.contains( 'delete-task-btn' ) ) {
                // Ask for confirmation before deleting
                if ( confirm( 'Are you sure you want to delete this task?' ) ) {
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
}

export { renderTasks };