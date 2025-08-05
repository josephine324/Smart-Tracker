# Smart Tracker App
Welcome to Smart Tracker, a task management application to organize your tasks efficiently. Built with a React frontend, Node.js/Express backend, and MongoDB (via Azure Cosmos DB), the app is containerized with Docker and hosted on Azure.
Access the app at:https://smarttrackerapp.bravesand-7252685b.francecentral.azurecontainerapps.io/.
## LINK TO VIDEO DEMO: 
https://youtu.be/e0srNtVSbjM

# Using the App
Smart Tracker helps you manage tasks with a Kanban-style board, featuring Todo, In Progress, and Completed columns.
# Getting Started
1. Visit the App:
- Open the public URL: https://smarttrackerapp.bravesand-7252685b.francecentral.azurecontainerapps.io/.
- No account or login is required.
2. Manage Tasks:
- Add a Task:
In the "Add New Task" section, enter a title and optional description.
Click "Add Task" to create a task in the Todo column.
- Edit a Task:
Click "Edit" on a task card.
Update the title or description and click "Update Task".
-  Move a Task:
Use "To Todo", "To Progress", or "To Completed" buttons to move tasks between columns.
-  Delete a Task:
Click "Delete" on a task card to remove it.
3. Tips:
- Tasks are saved automatically to the cloud.
- Refresh the page to see the latest updates.

# Local Setup with Docker
1. Clone the Repository:
git clone https://github.com/josephine324/Smart-Tracker.git
cd Smart-Tracker
2. Run Docker Compose:
```
docker-compose up --build
```
- Builds and starts the frontend (port 3000), backend (port 5000), and MongoDB.
- Open http://localhost:3000 to test the app.

3. Test the App:

- Add, edit, delete, and move tasks to verify functionality.
- Check logs if issues arise:
```
docker-compose logs
```
Stop Containers:
```
docker-compose down
```
