import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
        </div>
      </section>

      <footer style={{ borderTop: '1px solid rgba(22,163,74,0.05)', padding: '24px', textAlign: 'center', color: GRAY2, fontSize: 12, fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p>2026 AI Microtec. Personal use only. Not for resale.</p>
          <p style={{ marginTop: 8 }}>Inbox Zero AI System — Gmail + GPT Automation Kit</p>
        </div>
      </footer>

    </div>
  )
}
