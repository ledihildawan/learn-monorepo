import { sapa } from '@bazel-learn/shared';

const appDiv = document.querySelector<HTMLDivElement>('#app');

if (appDiv) {
  appDiv.innerHTML = `
    <h2 style="margin-top: 0; color: #fff;">UI Container Ready</h2>
    <p style="color: #a3a3a3;">${sapa("Frontend Vite")}</p>
    <button style="margin-top: 20px; padding: 10px 20px; background: #3b82f6; border: none; border-radius: 8px; color: white; cursor: pointer;">
      Test Navigasi
    </button>
  `;
}