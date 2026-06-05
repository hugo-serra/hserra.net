#!/usr/bin/env bash
# Vercel install step: set up the SSH deploy key for the private @hs/design
# package, then install dependencies with bun.
set -euo pipefail

mkdir -p ~/.ssh
printf '%s\n' "$DESIGN_SSH_KEY" | tr -d '\r' > ~/.ssh/id_ed25519
chmod 600 ~/.ssh/id_ed25519
ssh-keyscan -H github.com >> ~/.ssh/known_hosts 2>/dev/null

echo "[diag] key bytes: $(wc -c < ~/.ssh/id_ed25519)"
echo "[diag] ssh auth test:"
ssh -i ~/.ssh/id_ed25519 -o IdentitiesOnly=yes -o StrictHostKeyChecking=no -T git@github.com 2>&1 | head -5 || true

bun install
