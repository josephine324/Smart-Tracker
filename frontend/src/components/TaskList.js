import React from 'react';
import dotenv from 'dotenv';

dotenv.config();

const TaskList = ({ title, tasks, fetchTasks, setEditingTask }) => {
    const updateStatus = async (id, newStatus) => {
        try {
            await fetch(`${process.env.BACKEND_URL}/api/tasks/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });
            fetchTasks();
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await fetch(`${process.env.BACKEND_URL}/api/tasks/${id}`, {
                method: 'DELETE'
            });
            fetchTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            {tasks.map(task => (
                <div key={task._id} className="bg-white p-4 rounded-lg shadow mb-4">
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <p className="text-gray-600">{task.description}</p>
                    <div className="mt-2 flex space-x-2">
                        {title !== 'Todo' && (
                            <button
                                onClick={() => updateStatus(task._id, 'todo')}
                                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                To Todo
                            </button>
                        )}
                        {title !== 'In Progress' && (
                            <button
                                onClick={() => updateStatus(task._id, 'progress')}
                                className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                            >
                                To Progress
                            </button>
                        )}
                        {title !== 'Completed' && (
                            <button
                                onClick={() => updateStatus(task._id, 'completed')}
                                className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                To Completed
                            </button>
                        )}
                        <button
                            onClick={() => setEditingTask(task)}
                            className="px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => deleteTask(task._id)}
                            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;