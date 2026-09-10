pipeline {
    agent any

    environment {
        APP_NAME = "devops-app"
        APP_PORT = "3000"
    }

    stages {

        stage('Checkout') {
            steps {
                echo '========== Stage 1: Checkout Code =========='
                checkout scm
                echo 'Code pulled successfully!'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '========== Stage 2: Install Dependencies =========='
                sh 'npm install'
                echo 'Dependencies installed!'
            }
        }

        stage('Run Tests') {
            steps {
                echo '========== Stage 3: Run Tests =========='
                sh 'npm test'
                echo 'Tests passed!'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '========== Stage 4: Build Docker Image =========='
                sh "docker build -t ${APP_NAME}:latest ."
                sh "docker images | grep ${APP_NAME}"
                echo 'Docker image built!'
            }
        }

        stage('Deploy Container') {
            steps {
                echo '========== Stage 5: Deploy Container =========='
                sh "docker stop ${APP_NAME} || true"
                sh "docker rm ${APP_NAME} || true"
                sh """
                    docker run -d \
                        --name ${APP_NAME} \
                        -p ${APP_PORT}:${APP_PORT} \
                        --restart unless-stopped \
                        ${APP_NAME}:latest
                """
                echo 'Container deployed!'
            }
        }

        stage('Verify Deployment') {
            steps {
                echo '========== Stage 6: Verify Deployment =========='
                sh 'sleep 5'
                sh 'docker ps | grep devops-app'
                echo 'Deployment verified!'
            }
        }
    }

    post {
        success {
            echo '🎉 PIPELINE SUCCEEDED! App is live!'
        }
        failure {
            echo '❌ PIPELINE FAILED! Check logs!'
        }
    }
}
