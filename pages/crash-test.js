import { useState } from 'react'

export default function CrashTest() {
  const [user, setUser] = useState({ name: 'nabin' });
  function handleCrash(e) {
    e.preventDefault();
    setUser(null);
  }
  return (
    <div>
      <h1>Crash test</h1>
      <p>{user.name}</p>
      <button onClick={handleCrash}>Crash</button>
    </div>
  )
}
