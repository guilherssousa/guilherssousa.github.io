@echo off
npm run build

cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'