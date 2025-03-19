import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/markdown-editor',
    name: 'MarkdownEditor',
    component: () => import('../views/MarkdownEditor.vue')
  },
  {
    path: '/js-formatter',
    name: 'JavaScriptFormatter',
    component: () => import('../views/JavaScriptFormatter.vue')
  },
  {
    path: '/html-formatter',
    name: 'HTMLFormatter',
    component: () => import('../views/HTMLFormatter.vue')
  },
  {
    path: '/css-formatter',
    name: 'CSSFormatter',
    component: () => import('../views/CSSFormatter.vue')
  },
  {
    path: '/json-formatter',
    name: 'JSONFormatter',
    component: () => import('../views/JSONFormatter.vue')
  },
  {
    path: '/file-upload',
    name: 'FileUpload',
    component: () => import('../views/FileUpload.vue')
  },
  {
    path: '/image-processor',
    name: 'ImageProcessor',
    component: () => import('../views/ImageProcessor.vue')
  },
  {
    path: '/plantuml-editor',
    name: 'PlantUMLEditor',
    component: () => import('../views/PlantUMLEditor.vue')
  },
  {
    path: '/color-converter',
    name: 'ColorConverter',
    component: () => import('../views/ColorConverter.vue')
  },
  {
    path: '/url-encoder',
    name: 'UrlEncoder',
    component: () => import('../views/UrlEncoder.vue')
  },
  {
    path: '/encryption-tool',
    name: 'EncryptionTool',
    component: () => import('../views/EncryptionTool.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router; 