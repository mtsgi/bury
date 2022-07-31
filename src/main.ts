import './style.css'
import { setupRunner } from './runner'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Bury.js Examples</h1>
    <div class="card">
      <input id="input" />
      <button id="button" type="button">Run</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="/typescript.svg" class="logo vanilla" alt="TypeScript logo" />
    </a>
  </div>
`

setupRunner(
  document.querySelector<HTMLButtonElement>('#button')!,
  document.querySelector<HTMLInputElement>('#input')!
)
