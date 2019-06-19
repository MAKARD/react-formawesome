#!/bin/bash

npm run test && npm run lint

read -p "Enter patch <name> (patch/<name>): " name
git checkout -b "patch/$name"

read -p "Enter patch description: " description
git add .
git commit -n -m "$description"
git push -u origin "patch/$name"
