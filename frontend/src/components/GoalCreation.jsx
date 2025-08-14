import { useState } from 'react';

export default function GoalCreation({ setShowGoalCreation, onCreateGoal }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = () => {
    if (!name || !description || !deadline) return alert('Please fill all fields');
    onCreateGoal({
      name,
      description,
      deadline: new Date(deadline),
      completed: false,
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white max-w-sm w-full">
        <h1 className="text-lg font-semibold mb-4">Create a goal:</h1>

        <input
          type="text"
          placeholder="Goal Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 p-2 rounded text-white"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-3 p-2 rounded text-white"
        />

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="w-full mb-6 p-2 rounded text-white"
        />

        <div className="flex gap-2">
          <button
            onClick={handleSubmit}
            className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-md"
          >
            Submit
          </button>
          <button
            onClick={() => setShowGoalCreation(false)}
            className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
