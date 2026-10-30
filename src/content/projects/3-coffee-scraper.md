---
title: Coffee Bean Tracker
summary: Scrapes specialty coffee roasters into a searchable catalog with price history.
kind: personal
tech: [Python, PostgreSQL, selectolax, uv]
repo: https://github.com/Nadavsim/beantracker
status: in-progress
figure: coffee
order: 3
---
Roaster adapters fetch products, normalization cleans weights, prices, origin and roast, and every run is stored as a snapshot, so price history is just a query. Scraping is polite (robots.txt, rate limits, backoff), and health checks flag runs that come back empty or suspiciously small.
