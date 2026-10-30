---
title: Notes Website
summary: A full-stack notes site with user accounts, pagination and an AI assistant that answers from your notes.
kind: university
tech: [TypeScript, React, Express, MongoDB, JWT, Playwright, Jest]
repo: https://github.com/Nadavsim/fullstack-notes-app
figure: notes
order: 7
---
Guests can read notes, logged-in users can create and manage them. The latest version adds a notes-based AI assistant: the backend is wired to a local LLM that can call a tool to search the notes in the database as context. The pagination component is hand-written, as the course required. I also built a stored XSS attack against the site, then defended it with an HTML sanitizer.
