import React from 'react'

function EmailVerify() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[#050505] text-white px-6'>
      {/* Decorative Background Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/20 blur-[100px] pointer-events-none" />

      <div className='bg-zinc-900/50 border border-zinc-800 p-10 rounded-2xl shadow-2xl max-w-md w-full text-center backdrop-blur-sm'>
        {/* Verification Icon */}
        <div className='mx-auto mb-6 flex items-center justify-center w-16 h-16 bg-blue-600/10 rounded-full border border-blue-500/20'>
          <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className='text-3xl font-bold mb-3 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent'>
          Verify your email
        </h1>
        
        <p className='text-zinc-400 mb-8'>
          Thanks for signing up! Please click the button below to verify your email address and activate your account.
        </p>

        <button className='w-full py-3 px-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]'>
          Verify Email Address
        </button>

        <p className='mt-6 text-sm text-zinc-500'>
          Didn't receive the email? <span className='text-blue-400 cursor-pointer hover:underline'>Resend link</span>
        </p>
      </div>
    </div>
  )
}

export default EmailVerify