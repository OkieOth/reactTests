#!/bin/bash

# stop the test environment

scriptPos=${0%/*}

projectName=r06
composeFile="$scriptPos/../docker-compose.yml"

docker-compose -p "$projectName" -f "$composeFile" stop


