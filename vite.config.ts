import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

import path from "path";
const pathSrc = path.resolve(__dirname, `src`);

// https://vite.dev/config/
export default defineConfig ({mode}：ConfigEnv)=> {
  const env = loadEnv(mode, process.cwd());
  const isProduction = mode === "production";


  return{
    //路径别名
    resolve: {
      alias: {
        '@': pathSrc,
      }
    },
    plugins: [vue()],

  }


})
