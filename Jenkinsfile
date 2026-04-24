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
        dir('your-app-folder') {
            sh 'CI=true npm test'
        }
    }
}
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
    }
}


