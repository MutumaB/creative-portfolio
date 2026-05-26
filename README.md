# Personal Project Showcase Application

A responsive React web application designed to showcase personal development projects. This application features dynamic state management, a real-time filter search bar, and an interactive form to add new projects to the portfolio dynamically.

## 🚀 Features

*   **Project Showcase Gallery**: Displays all personal projects in a clean grid layout.
*   **Dynamic Search**: Instantly filters the projects list by name as you type.
*   **Interactive Input Form**: Allows users to dynamically add new projects to the list.
*   **Fully Responsive Design**: Optimized for seamless viewing on mobile, tablet, and desktop devices using CSS Grid and media queries.

## 🛠️ Tech Stack

*   **Frontend Library**: React (Functional Components, Hooks)
*   **State Management**: React `useState`
*   **Styling**: Pure CSS (CSS Grid, Flexbox, Mobile-First Breakpoints)

## 📂 Project Structure

```text
src/
├── components/
│   ├── ProjectForm.js    # Form component to add new projects
│   ├── ProjectList.js    # Renders the project cards grid
│   └── Search.js         # Text input for dynamic filtering
├── App.css               # Component layout and responsive styles
├── App.js                # Core layout and state orchestration
├── index.css             # Global styles and resets
└── index.js              # Application entry point
```

## 💻 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org) installed on your machine.

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone <your-repository-url>
   ```

2. Navigate into the project folder:
   ```bash
   cd project-showcase
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the local development server, run:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

## ⚙️ Component Architecture

*   **App.js**: Serves as the central data store ("Source of Truth"). It manages the project list array state and the search filter text state, passing down functions via props to child components.
*   **ProjectForm.js**: Captures user input locally. On submission, it pushes the data back up to the main project array via a callback function.
*   **Search.js**: Captures keystrokes and lifts the query value to the parent state to handle filter logic in real time.
*   **ProjectList.js**: Receives the filtered array and maps the data into individual, semantic card elements.

