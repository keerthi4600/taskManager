# Task Management Application

## Overview

This project is a simple task management application built using Angular for the front end, Node.js with Express for the backend, and MongoDB for the database. The application allows users to create, update, and delete tasks, view a list of tasks, and filter them by status.

## Features

- **Create, Read, Update, Delete Tasks:** Users can manage tasks with a title, description, and status.
- **Filter Tasks by Status:** Users can filter tasks by status (e.g., "All," "To Do," "In Progress," "Done").
- **Responsive Design:** The application is responsive and works well on both desktop and mobile devices.
- **Form Validation:** Ensures that tasks cannot be created without a title.
- **Error Handling:** Proper error messages and status codes are provided.
- **Unit Testing:** Includes tests for critical components and API endpoints.

## Technologies

- **Front-End:** Angular
- **Back-End:** Node.js with Express
- **Database:** MongoDB

## Installation

### Front-End (Angular)

1. **Navigate to the Angular Project Directory:**

   ```bash
   cd frontend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Angular Development Server:**

   ```bash
   ng serve
   ```

   The application will be available at `http://localhost:4200`.

### Back-End (Node.js with Express)

1. **Navigate to the Back-End Project Directory:**

   ```bash
   cd backend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Node.js Server:**

   ```bash
   npm start
   ```

   The API will be available at `http://localhost:5000`.
4. **check For db:**
   install mongo if not yet installed and do following in 
   ```bash
   use task-manager
   ```
   check here for tasks `http://localhost:5000/api/tasks`.
   

## API Endpoints

- **GET /api/tasks:** Retrieve all tasks.
- **POST /api/tasks:** Create a new task.
- **PUT /api/tasks/:id:** Update an existing task.
- **DELETE /api/tasks/:id:** Delete a task.

## Development

- **Code Quality:** The code follows best practices and conventions for Angular and Node.js.
- **Testing:** Unit tests are included for the API endpoints and critical components.

## Bonus Features

- **User Authentication and Authorization:** (Not implemented in this version but can be added for enhanced functionality.)
- **Task Due Dates and Reminders:** (Not implemented but can be a useful feature.)
- **Task Sorting and Searching Capabilities:** (Optional feature for better usability.)
- **User Profiles with Avatars:** (Can be implemented for a more personalized experience.)

## Assumptions

1. **Database Setup:** MongoDB is installed and running locally.
3. **No User Authentication:** Basic version without user authentication.

## Contact

For any questions or feedback, please contact [Keerthi reddy](mailto:keerthi4600@gmail.com).