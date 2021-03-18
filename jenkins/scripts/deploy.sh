#!/usr/bin/env sh

cd /var/lib/jenkins/workspace/quote-of-the-day-pipeline
ansible-playbook create-docker-image.yml
