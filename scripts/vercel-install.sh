#!/usr/bin/env bash
# Vercel install step: set up the SSH deploy key for the private @hs/design
# package, then install dependencies with bun.
set -euo pipefail

mkdir -p ~/.ssh
printf '%s\n' "$DESIGN_SSH_KEY" | tr -d '\r' > ~/.ssh/id_ed25519
chmod 600 ~/.ssh/id_ed25519
ssh-keyscan -H github.com >> ~/.ssh/known_hosts 2>/dev/null

echo "[diag] key bytes: $(wc -c < ~/.ssh/id_ed25519)"

# Force every git child process (including bun's clone) to use this key and a
# known host-key policy. Without this, bun's git subprocess can fail host-key
# verification even though a plain `ssh -T` succeeds.
export GIT_SSH_COMMAND="ssh -i $HOME/.ssh/id_ed25519 -o IdentitiesOnly=yes -o StrictHostKeyChecking=no"

echo "[diag] explicit git clone test:"
rm -rf /tmp/design-test
git clone --depth 1 "ssh://git@github.com/hugo-serra/design.git" /tmp/design-test 2>&1 | tail -20 || echo "[diag] explicit clone test FAILED"

bun install
