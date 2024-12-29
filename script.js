<script>
        const tasks = [];

        function addTask() {
            const project = document.getElementById('project').value;
            const taskTitle = document.getElementById('task').value;
            const description = document.getElementById('description').value;
            const status = document.getElementById('status').value;

            if (!project || !taskTitle) {
                alert('Project name and task title are required!');
                return;
            }

            const task = {
                id: Date.now(),
                project,
                title: taskTitle,
                description,
                status
            };

            tasks.push(task);
            renderTasks();
            clearForm();
        }

        function renderTasks() {
            const taskList = document.getElementById('task-list');
            taskList.innerHTML = '';

            tasks.forEach(task => {
                const taskElement = document.createElement('div');
                taskElement.className = 'task';
                taskElement.innerHTML = `
                    <h3>${task.project} - ${task.title}</h3>
                    <p>${task.description}</p>
                    <p><strong>Status:</strong> ${task.status}</p>
                `;
                taskList.appendChild(taskElement);
            });
        }

        function clearForm() {
            document.getElementById('project').value = '';
            document.getElementById('task').value = '';
            document.getElementById('description').value = '';
            document.getElementById('status').value = 'pending';
        }
    </script>