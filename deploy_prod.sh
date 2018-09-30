#!/usr/bin/env bash

rm -r '../../muzhijubao_web_release/prod/'
cp -r './out/.' '../../muzhijubao_web_release/prod'
echo 'done'