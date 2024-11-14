document.getElementById('addTaskBtn').addEventListener('click', function() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
      const taskList = document.getElementById('taskList');
      
      const li = document.createElement('li');
      li.textContent = taskText;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function() {
          taskList.removeChild(li);
      });

      li.addEventListener('click', function() {
          li.classList.toggle('completed');
      });

      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      taskInput.value = ''; // Clear input after adding task
  }
});

