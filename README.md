# Stack
## Backend
  Backend will be build with the latest stable version of Node.js(v10) and the framework [Express](http://expressjs.com/)(v4.16).

## Database
For the Database will be used [MongoDB](https://www.mongodb.com/).

## Environment
  Both of the development and production environments will be configured using Docker.
  
### Development
  The backend and database containers will be managed using [docker compose](https://docs.docker.com/compose/).
  
### Production
  The cloud solution choosed for this application was [Google Cloud Plataform](https://cloud.google.com/)(GCP) because of the available tools to easily manage containers. The main tool used on GCP to manage the deployed containers will be [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine/). The docker images of the application will be store on [Google Container Registry](https://cloud.google.com/container-registry/).
  
## CI/CD
 [Travis CI](http://travis-ci.org) will handle the continous integration and continous deploy tasks.  
  - Continous Integration taks  
    1. Build the application  
    2. Run the tests  
  - Continous deploy tasks:  
    1. Build a new docker image version of the application  
    2. Push the new image to the registry  
    3. Trigger the deploy of the application using the new image version  

# CI and CD pipeline
![pipeline](https://user-images.githubusercontent.com/14370340/45258571-3b847880-b390-11e8-85d6-caacc49a49ff.png)**Figure 1: GKE CI/CD pipeline**

1. New code is pushed to GitHub triggering the CI tasks on Travis CI
2. Travis CI execute the build and the tests of the application, if both pass without any error it goes to the next step
3. Travis build the new image of the app and push it to the GCP container Registry
4. Now Travis update the version of the image used on the Node.js API deployment running on kubernetes
5. Kubernetes pull the new image and deploy the new pods using the latest image version.


