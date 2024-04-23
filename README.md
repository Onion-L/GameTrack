
# GameTrack

## Introduction

GameTrack is a web application for a visual data analysis system designed primarily for pre-game preparation and post-game analysis in football coaching. It offers advanced, reliable visualizations and analytics to help coaches choose starting lineups, tactical drills, and training plans from a data perspective, thereby providing better advice on building the perfect football team.

Backend Repository:[GT Server](https://github.com/Onion-L/GT-Server)
[Chinese Document](./READMEzh.md)

## Key Features

- **User Management**: Functions for user login and registration.
- **Data Upload**: Support for uploading Excel files for analysis.
- **Match Information**: Access to detailed match data.
- **Player Data**: Insights into all player statistics.
- **Task Management**: Ability to manage, update, and delete tasks.

## Installation and Startup

Ensure you have Node.js and npm installed, then follow these steps:

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build
```

## API Overview

| API Name            | Method | Description                                |
|---------------------|--------|--------------------------------------------|
| `/auth/login`       | POST   | User Login function                        |
| `/auth/register`    | POST   | Create a new user                          |
| `/api/upload`       | POST   | Upload Excel file                          |
| `/api/matches`      | GET    | Get match information                      |
| `/api/match?date=`  | DELETE | Deleting information about a specific match|
| `/api/players`      | GET    | Get data of all players                    |
| `/api/tasks`        | GET    | Get the task list                          |
| `/api/tasks`        | DELETE | Delete the chosen task                     |
| `/api/tasks`        | PUT    | Update a task                              |
| `/api/tasks`        | POST   | Update a new task                          |

## Tech Stack

- **Vue**: Frontend framework.
- **Vite**: Modern frontend build tool.
- **Vue Router**: Official router for Vue.
- **Element Plus**: UI component library for Vue.
- **SCSS**: Advanced CSS.
- **ECharts**: Comprehensive charting library.
- **Pinia**: State management.
- **Axios**: Library for HTTP requests.

## Contribution Guide

Contributions are welcome! If you have any ideas or issues, please open an issue or pull request.
