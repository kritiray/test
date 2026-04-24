pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/kritiray/test.git'
            }
        }

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test -- --watchAll=false'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
    }
}

