#!/usr/bin/env bash

pnpm install
pnpm build
cd packages/examples/react-vite
pnpm build
pnpm serve
