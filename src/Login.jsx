import React from 'react'
import { supabase } from './supabaseClient'

export default function Login() {
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        // Mengarahkan kembali ke aplikasi lokal setelah berhasil login
        redirectTo: window.location.origin
      }
    })
    
    if (error) {
      console.error('Error saat login:', error.message)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
      <h2>Selamat Datang di Notes-Web 📝</h2>
      <p>Silakan masuk menggunakan akun Google Anda untuk melanjutkan.</p>
      <button 
        onClick={handleGoogleLogin}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#4285F4',
          color: '#fff',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Login dengan Google
      </button>
    </div>
  )
}