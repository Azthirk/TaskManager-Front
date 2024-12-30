# Task Management Application

This project is the frontend of a task management application that allows you to create, edit, delete, and view tasks with pagination and filters.

## Link to the Deployed Application
You can access the application at the following link: -

## Local Installation and Execution

Follow these steps to install and run the project in your local environment:

### 1. Clone the repository
```bash
# Clone the repository
$ git clone [<REPOSITORY_URL>](https://github.com/Azthirk/TaskManager-Front.git)
$ cd front
```

### 2. Install dependencies
Make sure you have `react` installed. Then, install the dependencies by running:
```bash
$ npm install
```

### 3. Configure environment variables
Create a `.env` file in the root directory of the project. Make sure to include the following variables:
```
REACT_APP_API_URL=<BACKEND_API_URL>
```

### 4. Run the application
Start the development server with the following command:
```bash
$ react-scripts start
```
This will start the application at [http://localhost:3000](http://localhost:3000).

## Technologies Used
- **React**: JavaScript framework for frontend development.
- **Tailwind CSS**: CSS framework for fast and responsive styling.
- **Redux**: Application state management.
- **Typescript**: Language used.

## Available Scripts
In the `package.json` file, you will find several scripts that you can run:
- `start`: Starts the application in development mode.
- `build`: Builds the application for production.
- `test`: Runs tests.

## Folder Structure
- `public/`: Static files.
- `src/`: Contains all the source code for the project.
- `src/pages/`: Reusable components such as cards, modal, and form.
- `src/redux/`: Redux configuration for state management.
- `src/assets/svg/`: svg files.
- `src/test/`: test app.

## Preview
![Captura de pantalla 2024-12-30 050007](https://github.com/user-attachments/assets/97ac9901-1f6e-448d-8bbe-3a75c8ccfb72)
![Captura de pantalla 2024-12-30 050252](https://github.com/user-attachments/assets/3ce38a6b-6510-462b-8208-84bfb23989e2)



