export default function Hero () {
  return (
    <section className='pt-[150px] p-10'>
      <div className='items-center text-center flex flex-col gap-5'>
        <h1 className='text-6xl font-bold'>Bullet</h1>
        <p className='text-lg'>Set goals, track streaks, meet new people, or challenge friends — or face the consequences.</p>
        <a 
          className='mt-6 bg-white w-32 hover:bg-purple-300/70 ease-in-out transition-all duration-300hover:text-white text-black font-semibold py-2 px-5 rounded-lg cursor-pointer'
          href='/register'
        >
          Get Started
        </a>
      </div>
    </section>
  )
}