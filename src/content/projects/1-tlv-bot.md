---
title: TLV Bot
summary: A web chatbot that finds the nearest spot from my own curated map of Tel Aviv food places.
kind: personal
tech: [React, TypeScript, FastAPI, MongoDB, Claude API, Google OAuth, Azure]
repo: https://github.com/Nadavsim/tlv-map-bot
demo: https://nadav-tlv-bot-fqfnfzbyekatfgfb.israelcentral-01.azurewebsites.net/
note: Works without signing in; favorites and suggesting spots need Google sign-in
shots:
  - src: /screens/tlv-bot.png
    alt: The TLV Bot home screen, with location and walk or drive toggles, three craving suggestions and a message box
    w: 1120
    h: 1800
figure: tlv
order: 1
---
Tell it what you're craving, in English or Hebrew, and share your location. It replies with the closest match from my map and a navigation link, and when it can't honour a request it says so instead of guessing.
