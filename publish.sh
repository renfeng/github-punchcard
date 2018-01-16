#!/usr/bin/env bash
version=`grep -Po '(?<="version": ")[^"]+' bower.json`
git tag v${version}
git push origin --tags