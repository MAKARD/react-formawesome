#!/bin/bash

npm run test && npm run lint
npm run build-storybook

read -p "Enter branch <name> (storybook/<name>): " name
git checkout -b "storybook/$name"

read -p "Enter commit description: " description
git add .
git commit -n -m "$description"
git push -u origin "storybook/$name"
