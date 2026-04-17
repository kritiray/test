pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/your-username/react-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Start App') {
            steps {
                bat 'npm start'
            }
        }
    }
}