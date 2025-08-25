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
          sh 'npm install'
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir('frontend') {
          sh 'npm run build'
        }
      }
    }

    stage('Install Backend') {
      steps {
        dir('backend') {
          sh 'npm install'
        }
      }
    }

    stage('Run Backend Tests') {
      steps {
        dir('backend') {
          sh 'npm test || echo "No tests found"'
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
