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
        bat 'dir src'
        bat 'type src\\App.test.js'
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


