#!/bin/bash

mkdir -p backup

GIT_URL=${1}

if [ $# -ne 1 ]; then
    echo "Please provide git url of your css module to be cloned"
    exit 1
fi

if [ ! -d "./backup/ui-css" ] 
then
    echo "setting up css in backup/ui-css"
    (cd backup && git clone $GIT_URL  ui-css) &&
    npm i backup/ui-css
fi