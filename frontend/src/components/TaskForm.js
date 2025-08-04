import React, { useState } from 'react';

const BACKEND_URL = "https://smarttrackerbackend.bravesand-7252685b.francecentral.azurecontainerapps.io";

const TaskForm = ({ fetchTasks, editingTask, setEditingTask }) => {
    const [task, setTask] = useState(
        editingTask ? { title: editingTask.title, description: editingTask.description } : { title: '', description: '' }
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!task.title.trim()) return;

        try {
            if (editingTask) {
                await fetch(`${BACKEND_URL}/api/tasks/${editingTask._id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ...task, status: editingTask.status })
                });
                setEditingTask(null);
            } else {
                await fetch(`${BACKEND_URL}/api/tasks`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ ...task, status: 'todo' })
                });
            }
            setTask({ title: '', description: '' });
            fetchTasks();
        } catch (error) {
            console.error('Error saving task:', error);
        }
    };

    return (
        <div className="mb-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
                {editingTask ? 'Edit Task' : 'Add New Task'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Task Title"
                    value={task.title}
                    onChange={(e) => setTask({ ...task, title: e.target.value })}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    placeholder="Task Description"
                    value={task.description}
                    onChange={(e) => setTask({ ...task, description: e.target.value })}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                ></textarea>
                <div className="flex space-x-2">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        {editingTask ? 'Update Task' : 'Add Task'}
                    </button>
                    {editingTask && (
                        <button
                            type="button"
                            onClick={() => {
                                setEditingTask(null);
                                setTask({ title: '', description: '' });
                            }}
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default TaskForm;