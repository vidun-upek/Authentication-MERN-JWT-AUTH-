import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

function Home() {
  return (
    <div className='relative flex flex-col items-center min-h-screen bg-[#050505] text-white overflow-hidden'>
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-600/10 blur-[120px] pointer-events-none" />
      
      {/* Navigation */}
      <div className="w-full z-10">
        <Navbar />
      </div>

      {/* Hero / Header Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 w-full max-w-7xl z-10">
        <Header />
      </main>

      {/* Subtle Footer or Bottom Accent */}
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </div>
  )
}

export default Home