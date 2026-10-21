import React, { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Login from './Login'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    // Cek sesi aktif saat aplikasi pertama kali dimuat
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    // Mendengarkan perubahan status autentikasi (login/logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  // Jika belum login, tampilkan halaman Login
  if (!session) {
    return <Login />
  }

  // Jika sudah login, tampilkan halaman utama Notes
  return (
    <div style={{ padding: '20px' }}>
      <h1>Catatan Saya 📌</h1>
      <p>Halo, {session.user.email}!</p>
      <button 
        onClick={() => supabase.auth.signOut()}
        style={{ padding: '8px 15px', cursor: 'pointer' }}
      >
        Logout
      </button>
    </div>
  )
}

export default App