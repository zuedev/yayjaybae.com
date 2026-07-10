#!/usr/bin/env bash
#
# SYNOPSIS
#   Build and run/deploy the yayjaybae.com site.
#
# USAGE
#   ./bin.sh dev|deploy

set -euo pipefail

COMMAND="${1:-}"

show_help() {
    echo ""
    echo "Usage: ./bin.sh <command>"
    echo ""
    echo "Commands:"
    echo "  dev      Build the sites and start a local Wrangler dev server"
    echo "  deploy   Build the sites and deploy them with Wrangler"
    echo ""
}

if [[ "$COMMAND" != "dev" && "$COMMAND" != "deploy" ]]; then
    show_help
    exit 0
fi

PROJECT_ROOT_PATH="$(pwd)"

# remove all files in the ASSETS folder to ensure a clean build
rm -rf "$PROJECT_ROOT_PATH/ASSETS/"

# build the yayjaybae.com site and copy the output to the ASSETS folder
cd "$PROJECT_ROOT_PATH/frontend"
npm install
npm run build

mkdir -p "$PROJECT_ROOT_PATH/ASSETS"
cp -R "$PROJECT_ROOT_PATH/frontend/out/." "$PROJECT_ROOT_PATH/ASSETS/"

# return to root and run the wrangler command
cd "$PROJECT_ROOT_PATH"
npx --yes wrangler@latest "$COMMAND"
