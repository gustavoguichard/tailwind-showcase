function App() {
  return (
    <header className="bg-black bg-opacity-20 min-h-[75vh] relative flex justify-center items-center">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />
      <img
        alt="Background"
        src="https://picsum.photos/800/700"
        className="absolute h-full w-full object-cover z-[-1]"
      />
      <div className="p-20 bg-white bg-opacity-10 backdrop-filter backdrop-blur z-20 rounded-lg shadow-2xl">
        <h1 className="relative">
          <span className="text-6xl font-bold bg-gradient-to-r from-red-500 to-blue-400 via-yellow-500 bg-clip-text text-transparent relative z-20">
            Hello Tailwindcss
          </span>
          <span className="text-6xl filter blur-sm font-bold absolute inset-0 z-10 transform translate-y-1 translate-x-px text-opacity-85 text-black">
            Hello Tailwindcss
          </span>
        </h1>
      </div>
    </header>
  )
}

export default App
