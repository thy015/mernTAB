import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [react(),
              federation({
                  name: 'host',
                  remotes: {
                      remote: "https://wowo.htilssu.id.vn/assets/remoteEntry.js",
                  },
                  shared: ['react', 'react-dom']
              })],
    server: {
        // this ensures that the browser opens upon server start
        open: true,
        // this sets a default port to 3000
        port: 3000,
    },
    build: {
        outDir: 'build'
    }
})