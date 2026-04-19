import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    base: './',
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY || ""),
      'process.env.GEMINI_API_KEY_2': JSON.stringify(env.GEMINI_API_KEY_2 || env.VITE_GEMINI_API_KEY_2 || ""),
      'process.env.GEMINI_API_KEY_3': JSON.stringify(env.GEMINI_API_KEY_3 || env.VITE_GEMINI_API_KEY_3 || ""),
      'process.env.OPENAI_API_KEY': JSON.stringify(env.OPENAI_API_KEY || env.VITE_OPENAI_API_KEY || ""),
      'process.env.OPENAI_API_KEY_2': JSON.stringify(env.OPENAI_API_KEY_2 || env.VITE_OPENAI_API_KEY_2 || ""),
      'process.env.OPENAI_API_KEY_3': JSON.stringify(env.OPENAI_API_KEY_3 || env.VITE_OPENAI_API_KEY_3 || ""),
      'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY || env.GEMINI_API_KEY || ""),
      'import.meta.env.VITE_GEMINI_API_KEY_2': JSON.stringify(env.VITE_GEMINI_API_KEY_2 || env.GEMINI_API_KEY_2 || ""),
      'import.meta.env.VITE_GEMINI_API_KEY_3': JSON.stringify(env.VITE_GEMINI_API_KEY_3 || env.GEMINI_API_KEY_3 || ""),
      'import.meta.env.VITE_OPENAI_API_KEY': JSON.stringify(env.VITE_OPENAI_API_KEY || env.OPENAI_API_KEY || ""),
      'import.meta.env.VITE_OPENAI_API_KEY_2': JSON.stringify(env.VITE_OPENAI_API_KEY_2 || env.OPENAI_API_KEY_2 || ""),
      'import.meta.env.VITE_OPENAI_API_KEY_3': JSON.stringify(env.VITE_OPENAI_API_KEY_3 || env.OPENAI_API_KEY_3 || ""),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
