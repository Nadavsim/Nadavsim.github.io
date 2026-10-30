---
title: Coffee Bean Tracker
summary: Scrapes specialty coffee roasters into a searchable catalog with price history.
kind: personal
tech: [Python, PostgreSQL, selectolax, uv]
repo: https://github.com/Nadavsim/beantracker
status: in-progress
order: 3
---
Roaster adapters fetch products, pure normalization functions clean weights, prices, origin and roast, and every run is stored as a snapshot so price and availability history is just a query. Scraping is polite (robots.txt, rate limits, backoff) and each run gets health checks for empty or suspiciously shrunken results.
