#!/bin/bash

docker build -t gcr.io/${PROJECT_ID}/${DASH_IMAGE}:$TRAVIS_COMMIT .

echo $GCLOUD_SERVICE_KEY | base64 --decode -i > ${HOME}/gcloud-service-key.json

gcloud auth activate-service-account --key-file ${HOME}/gcloud-service-key.json

gcloud --quiet config set project $PROJECT_ID
gcloud --quiet config set container/cluster $CLUSTER_STG 
gcloud --quiet config set compute/zone $ZONE 
gcloud --quiet container clusters get-credentials $CLUSTER_STG

gcloud docker -- push gcr.io/${PROJECT_ID}/${DASH_IMAGE}

yes | gcloud beta container images add-tag gcr.io/${PROJECT_ID}/${DASH_IMAGE}:$TRAVIS_COMMIT gcr.io/${PROJECT_ID}/${DASH_IMAGE}:staging

kubectl set image deployment/${DASH_DEPLOYMENT} ${DASH_CONTAINER}=gcr.io/${PROJECT_ID}/${DASH_IMAGE}:$TRAVIS_COMMIT

