#!/usr/bin/env bash

rm -r '../../muzhijubao_web_release/prod/'
cp -r './out/.' '../../muzhijubao_web_release/prod'
cd '../../muzhijubao_web_release/'
git add -A
git commit -m'deploy prod repo'
git push origin master
echo 'done'