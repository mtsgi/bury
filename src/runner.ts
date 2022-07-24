import '../types/main.d.ts';
import { Bury } from '../lib/main';

export function setupRunner(button: HTMLButtonElement, input: HTMLInputElement) {
  const onRun = (executeString: string) => {
    if (executeString === '') return;

    try {
      const result = Function(`"use strict"; return(${executeString})`)();
      alert(result);
    } catch (error) {
      alert(error);
    }
  }

  new Bury();
  button.addEventListener('click', () => onRun(input.value));
  input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') onRun(input.value);
  });
}
