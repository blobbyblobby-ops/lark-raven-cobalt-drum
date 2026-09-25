#!/bin/bash
# Builds a LotLens iOS archive. Must be run on a Mac with Xcode.
set -euo pipefail
cd "$(dirname "$0")/.."

if [[ "$(uname -s)" != "Darwin" ]]; then
  echo "This Mac-only step cannot run here. Open ios/App/App.xcodeproj in Xcode on a Mac, sign in with an Apple ID, and choose Product > Archive."
  exit 1
fi

if ! command -v xcodebuild >/dev/null; then
  echo "Xcode is not installed."
  exit 1
fi

npx cap sync ios
cd ios/App
xcodebuild \
  -project App.xcodeproj \
  -scheme App \
  -configuration Release \
  -destination "generic/platform=iOS" \
  -archivePath "$PWD/build/LotLens.xcarchive" \
  archive
echo "Archive: ios/App/build/LotLens.xcarchive"
echo "In Xcode Organizer, distribute that archive to your phone or to TestFlight."
