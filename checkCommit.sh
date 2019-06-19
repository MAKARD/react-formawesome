#!/bin/bash

branch_name=$(git rev-parse --abbrev-ref HEAD);

if [[ $branch_name =~ "storybook" ]]
then
   npm run build-storybook
fi