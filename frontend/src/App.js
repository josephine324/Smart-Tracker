import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/tasks');
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Smart Tracker App</h1>
            <TaskForm
                fetchTasks={fetchTasks}
                editingTask={editingTask}
                setEditingTask={setEditingTask}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <TaskList
                    title="Todo"
                    tasks={tasks.filter(task => task.status === 'todo')}
                    fetchTasks={fetchTasks}
                    setEditingTask={setEditingTask}
                />
                <TaskList
                    title="In Progress"
                    tasks={tasks.filter(task => task.status === 'progress')}
                    fetchTasks={fetchTasks}
                    setEditingTask={setEditingTask}
                />
                <TaskList
                    title="Completed"
                    tasks={tasks.filter(task => task.status === 'completed')}
                    fetchTasks={fetchTasks}
                    setEditingTask={setEditingTask}
                />
            </div>
        </div>
    );
};

export default App;