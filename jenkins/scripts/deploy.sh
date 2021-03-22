#!/usr/bin/env sh

cd /var/lib/jenkins/workspace/quote-of-the-day-pipeline/jenkins/scripts
ansible-playbook deploy.yml
