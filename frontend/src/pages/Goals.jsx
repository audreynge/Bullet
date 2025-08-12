import { useState, useEffect } from 'react';

// use context for goals later

export default function Goals() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const mockGoals = [
      {
        id: 1,
        name: 'Goal 1',
        description: 'Description 1',
        deadline: new Date(),
        completed: false,
      },
      {
        id: 2,
        name: 'Goal 2',
        description: 'Description 2',
        deadline: new Date(),
        completed: false,
      },
    ];
    setGoals(mockGoals);
  }, []);

  return (
    <div className="pt-[100px] p-14">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-bold">My Goals</h1>
        <button 
          className="mt-6 w-fit bg-white bg-purple-400 hover:bg-purple-600/70 hover:text-white transition-all duration-200 text-black font-semibold py-2 px-5 rounded-lg cursor-pointer"
        >
          Create a Goal
        </button>
      </div>

      <div className="mt-10 space-y-6">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="group relative p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-lg shadow-md overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-purple-200/20 opacity-0 transition-opacity duration-300 ease-in-out pointer-events-none group-hover:opacity-20"></div>
            <h2 className="relative text-2xl font-semibold text-white">{goal.name}</h2>
            <p className="relative text-gray-200 mt-2">{goal.description}</p>
            <p className="relative text-gray-200 mt-1">Deadline: {goal.deadline.toLocaleDateString()}</p>
            <button className='mt-4 w-fit text-white bg-purple-400 hover:bg-purple-600/70 hover:text-white transition-all duration-200 text-black font-semibold py-2 px-5 rounded-lg cursor-pointer'>Complete goal</button>
          </div>
        ))}


      </div>
    </div>
  );
}
