#!/bin/bash

# start or setup the keycloak/apache/jetty environment 

scriptPos=${0%/*}

absPathToBase=$(pushd $scriptPos/.. > /dev/null; pwd ; popd > /dev/null)

projectName=r08
composeFile="$scriptPos/../docker-compose.yml"

if ! [ -d $scriptPos/../httpd/sites-conf ]; then mkdir -p $scriptPos/../httpd/sites-conf; fi

httpdContName=${projectName}_httpd_1

docker ps -f name="$httpdContName" | grep "$httpdContName" > /dev/null && echo -en "\033[1;31m  container seems to be up: $httpdContName\033[0m\n" && exit 1


if docker ps -a -f name="$httpdContName" | grep "$httpdContName" > /dev/null; then
    docker-compose -p "$projectName" -f "$composeFile" start
else
    docker-compose -p "$projectName" -f "$composeFile" up -d
fi

