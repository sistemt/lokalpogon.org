default: run

build:
  bun run build

run:
  #!/usr/bin/env bash
  set -e
  PORT=4321 bun run dev &
  sleep 3
  xdg-open http://localhost:4321

deploy:
  #!/usr/bin/env bash
  set -e
  branch=$(git branch --show-current)
  remote=$(git remote get-url origin 2>/dev/null || echo "")

  if [[ -z "$remote" ]]; then
    echo "No remote 'origin' found. Run these commands to set it up:"
    echo ""
    echo "  git remote add origin <your-repo-url>"
    echo "  git push -u origin $branch"
    exit 1
  fi

  git push origin "$branch"
