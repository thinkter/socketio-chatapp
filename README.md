# Socket.IO Chat App

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=nodedotjs&logoColor=white)
![Socket.IO](https://img.shields.io/badge/realtime-Socket.IO-010101?logo=socketdotio&logoColor=white)
![Status](https://img.shields.io/badge/status-learning_project-f59e0b)

A small real-time chat experiment built while learning Socket.IO.

</div>

```mermaid
sequenceDiagram
  participant A as Browser A
  participant S as Express + Socket.IO
  participant B as Browser B

  A->>S: Connect
  B->>S: Connect
  A->>S: Send chat message
  S-->>A: Broadcast message
  S-->>B: Broadcast message
```

## Repository layout

- `server.js` serves the static client and hosts the Socket.IO server.
- `public/` contains the original HTML, CSS, and browser-side JavaScript client.
- `messenger-clone/` is a separate Next.js UI experiment and has its own package manifest.

## Run the Socket.IO demo

```bash
npm install
node server.js
```

Open the local address printed by the server in two browser tabs to test real-time messaging.

## Run the Next.js UI experiment

```bash
cd messenger-clone
npm install
npm run dev
```

## Status

This repository contains learning experiments rather than a production chat service. Authentication, durable message storage, moderation, and deployment hardening are outside its current scope.
