const keyFeatures = [
  {
    name: 'Set Goals',
    description: 'Set goals and track your progress towards them.',
  },
  {
    name: 'Challenges',
    description: 'Challenge friends and track their progress towards their goals.',
  },
  {
    name: 'Groups',
    description: 'Create groups and challenge each other to reach your goals.',
  }
]

export default function KeyFeatures () {
  return (
    <section>
      <div className='mt-20 items-center text-center flex flex-col gap-5'>
        <h3 className='text-3xl font-bold'>Key Features</h3>
        <ul className='flex gap-5 pt-5 px-10'>
          {keyFeatures.map((feature) => (
            <li key={feature.name} className='bg-white/5 p-5 rounded-lg flex-1'>
              <h4>{feature.name}</h4>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
        
      </div>
    </section>
  )
}