document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    } else {
        var task = document.createElement('div');
        task.className = 'task';

        var span = document.createElement('span');
        span.id = 'taskname';
        span.textContent = document.querySelector('#newtask input').value;

        var editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.textContent = 'Edit';

        var deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.innerHTML = '<i class="far fa-trash-alt"></i> Remove';

        task.appendChild(span);
        task.appendChild(document.createElement('br')); // New line
        task.appendChild(editButton);
        task.appendChild(document.createElement('br')); // New line
        task.appendChild(deleteButton);

        document.querySelector('#tasks').appendChild(task);

        deleteButton.onclick = function(){
            task.remove();
            document.querySelector('#newtask input').value = ''; // Clear input field
        };

        editButton.onclick = function(){
            var newText = prompt('Edit task:', span.textContent);
            if (newText !== null) {
                span.textContent = newText;
            }
        };

        document.querySelector('#newtask input').value = ''; // Clear input field
    }
};
