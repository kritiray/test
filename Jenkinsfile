pipeline {
    agent any

stages{
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }
        stage('Debug Files') {
    steps {
        bat 'dir'
        bat 'dir src'
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


