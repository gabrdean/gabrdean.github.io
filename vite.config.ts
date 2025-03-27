import { defineConfig, PreviewOptions } from 'vite';
import react from '@vitejs/plugin-react';

// Extend PreviewOptions to include watch
interface ExtendedPreviewOptions extends PreviewOptions {
  watch?: {
    usePolling: boolean;
    interval: number;
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gabrdean/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },
    hmr: {
      overlay: true
    }
  },
  preview: {
    watch: {
      usePolling: true,
      interval: 1000,
    }
  } as ExtendedPreviewOptions
});