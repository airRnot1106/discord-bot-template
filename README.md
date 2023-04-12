<div align="center">
<samp>

# discord-bot-template

</samp>
</div>

## About

Template for easy setup of discord bot development.

## Requirements

Docker and PNPM are required to set up.

## Getting Started

```bash
cd discord-bot-template
```

```bash
pnpm --dir discord-bot-template install
```

Add your bot token to the `.env` file.

```bash
docker-compose -f compose-dev.yaml up --build -d # for development
docker-compose -f compose.yaml up --build -d # for production
```
