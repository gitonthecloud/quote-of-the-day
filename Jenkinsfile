pipeline {
    agent any
    stages {
       stage('Code Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM', 
                    branches: [[name: '*/main']], 
                    userRemoteConfigs: [[url: 'https://github.com/gitonthecloud/quote-of-the-day.git']]
                ])
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }

				stage('Deploy') {
            steps {
                withCredentials([usernamePassword( credentialsId: 'whalingonthecloud', usernameVariable: 'USER', passwordVariable: 'PASSWORD')]) {
                    sh 'docker login -u $USER -p $PASSWORD; ./jenkins/scripts/deploy.sh'
                }
            }
        }
    }
}
