
# 🚀 Upliance Beta  

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen)](https://upliance-beta.vercel.app/)  

A modern React-based web application with interactive UI, state management, and scroll-triggered animations.  

---

## 🌟 Live URL  

🔗 **[Upliance Beta](https://upliance-beta.vercel.app/)**  

---

## 📌 Features  

- **State Management**: `useState` for UI state, `useContext` (recommended) for global form management.  
- **Scroll Animations**: `@react-spring/web` and `react-intersection-observer` for smooth animations.  
- **Component-Based Architecture**: Modular components for scalability.  
- **Responsive UI**: Optimized for various screen sizes using Tailwind CSS.  

---

## 🏗 Component Structure  

### **Stateful Components**  
- `Counter` – Displays an animated counter.  
- `RichTextEditor` – Manages rich text input.  
- `DataForm` – Displays form data.  
- `Form` – Collects user input and updates state.  
- `SignIn` – A modal for user authentication.  

### **Layout Components**  
- `Header` – Navigation bar with a sign-in trigger.  

### **Animations & Effects**  
- `useSpring` (from `@react-spring/web`) – Manages UI animations.  
- `useInView` (from `react-intersection-observer`) – Detects when elements appear in the viewport.  

---


# React + TypeScript + Vite



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
