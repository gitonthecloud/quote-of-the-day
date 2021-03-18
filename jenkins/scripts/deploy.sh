#!/usr/bin/env sh

cd /var/lib/jenkins/workspace/quote-of-the-day-pipeline
docker build -t quote-of-the-day .
