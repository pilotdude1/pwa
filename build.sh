#!/usr/bin/env bash

# Exit on error
set -e

echo "Starting build process..."

# Clean install dependencies
echo "Installing dependencies..."
npm ci --production=false

# Run SvelteKit sync
echo "Running SvelteKit sync..."
npm run prepare

# Run build
echo "Building application..."
npm run build

# Install production dependencies
echo "Installing production dependencies..."
npm ci --production=true

# Verify build output
echo "Verifying build output..."
if [ ! -d "build" ]; then
    echo "Build directory not found!"
    exit 1
fi

echo "Build completed successfully!" 