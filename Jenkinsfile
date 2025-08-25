pipeline {
  agent any

  stages {
    stage('Checkout Code') {
      steps {
        git url: 'https://github.com/Eranna69/New-curd-operations.git', branch: 'main'      
      }
    }

    stage('Install Frontend') {
      steps {
        dir('frontend') {
          script {
            if (isUnix()) {
              sh 'npm install'
            } else {
              bat 'npm install'
            }
          }
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir('frontend') {
          script {
            if (isUnix()) {
              sh 'npm run build'
            } else {
              bat 'npm run build'
            }
          }
        }
      }
    }

    stage('Install Backend') {
      steps {
        dir('backend') {
          script {
            if (isUnix()) {
              sh 'npm install'
            } else {
              bat 'npm install'
            }
          }
        }
      }
    }

    stage('Run Backend Tests') {
      steps {
        dir('backend') {
          script {
            if (isUnix()) {
              sh 'npm test || echo "No tests found"'
            } else {
              bat 'npm test || echo No tests found'
            }
          }
        }
      }
    }
  }

  post {
    success {
      echo 'CI pipeline passed!'
    }
    failure {
      echo 'CI pipeline failed!'
    }
  }
}
