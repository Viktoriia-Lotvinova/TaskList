# task-list

This template should help get you started developing with Vue 3 in Vite.

## About the Project

This Task List app is created using Vue 3 and comes with the following main features:

- **CRUD Operations for Tasks:** The app allows users to Create, Read, Update, and Delete tasks within the application.

- **Local Storage:** Utilizing local storage as a storage mechanism for tasks and settings ensures that tasks and user preferences are saved persistently, even if the app is closed or refreshed.

- **Language Change:** Users have the flexibility to switch between English (EN) and Ukrainian (UA) languages for the app's interface.

- **Background Image Change:** The app enables users to personalize their experience by changing the background images to suit their preferences.

- **Drag and Drop Functionality:** This interactive feature empowers users to easily prioritize tasks by dragging and dropping them into their desired order.

- **Tasks Filtering:** Users can conveniently filter tasks based on specific criteria, offering effective organization and management of tasks.

## Task Description and Solution

### Task Description


1. Utilize Vue.js for creating components and managing the application state.
2. The interface should include the following elements:
   - An input field to add a new task.
   - An "Add" button to add a new task to the list.
   - A list of added tasks with the ability to mark tasks as completed or delete them.
   - Optional: Add an "Edit" button to allow users to modify the task text after adding.
3. Tasks must be stored in the application state and should persist even after the page is refreshed.
4. The layout and design can be simple, but they should be readable and aesthetically pleasing.

### Solution Steps

### Analysis and Planning 
Before diving into the solution, a thorough analysis of the task was conducted to ensure a clear understanding of its requirements and potential challenges.

### Technology Selection

For the development of this project, a careful selection of technologies was made to ensure the efficient implementation of the required features.

**Vue 3:**
Vue 3 was chosen as the core framework for building the Task List app. Its reactive nature, component-based architecture, and comprehensive documentation aligned well with the project's requirements.

**Element Plus:**
For the user interface components, the Element Plus library was employed. Element Plus offers a variety of pre-designed and well-documented UI elements that helped streamline the UI development process. Its simplicity and consistency provided a cohesive look and feel to the app's interface.

**i18n for Internationalization:**
To cater to different language preferences, the i18n (internationalization) library was integrated. This allowed the seamless translation of app content between English and Ukrainian, enhancing the accessibility and user-friendliness of the app for a wider audience.

**State Management - Pinia Consideration:**
While Pinia is a robust state management solution for Vue applications, it was not utilized for this project. Given the task's scope and simplicity, the decision was made to manage state within Vue components using the Composition API and local component state. Pinia's capabilities were not required in this scenario, and a more lightweight approach sufficed.


This technology stack was chosen based on its alignment with the project's goals, its compatibility with the Vue ecosystem, and its ability to accelerate the development process without compromising on the quality of the final product.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
