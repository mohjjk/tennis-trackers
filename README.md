# Tennis Trackers

This project aims to provide a comprehensive tracking system for tennis players, matches, and statistics.

## Project Structure

```
🏢 tennis-trackers
│
├── 📁 backend
│   ├── 📁 src
│   │   ├── 📄 app.js            # Main application file
│   │   ├── 📄 models.js         # Database models
│   │   ├── 📄 routes.js         # API routes
│   │   └── 📄 controllers.js     # Request handlers
│   ├── 📁 config
│   │   ├── 📄 db.config.js      # Database configuration
│   │   ├── 📄 env.js             # Environment variables
│   │   └── 📄 server.config.js   # Server configuration
│   ├── 📄 package.json           # Node.js dependencies
│   └── 📄 README.md              # Backend documentation
│
├── 📁 frontend
│   ├── 📁 src
│   │   ├── 📄 App.js          # Main React component
│   │   ├── 📄 index.js          # Entry point
│   │   ├── 📁 components        # React components
│   │   └── 📁 styles            # CSS styles
│   ├── 📄 package.json          # React dependencies
│   └── 📄 README.md             # Frontend documentation
│
├── 📁 config
│   ├── 📄 docker-compose.yml    # Docker compose file for deployment
│   ├── 📄 .env.template         # Environment variable template
│   ├── 📄 .gitignore            # Git ignore rules
│   └── 📄 README.md             # Configuration documentation
│
└── 📁 docs
    ├── 📄 API_Documentation.md  # API documentation
    └── 📄 User_Guide.md          # User guide
```

## Features
- User authentication and authorization
- Match scheduling and results tracking
- Player statistics and leaderboard
- Admin dashboard for managing players and matches

## Installation
1. Clone the repository.
2. Navigate to the backend and frontend directories to install dependencies:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```
3. Configure environment variables in the `.env` file.
4. Start the application:
   ```bash
   cd backend
   npm start
   cd ../frontend
   npm start
   ```

## Deployment
- Use Docker for containerization.
- Refer to the `docker-compose.yml` for instructions on running the application in a container.

## License
This project is licensed under the MIT License.