---
title: Network Security Scanner
summary: "A Python recon tool: ARP discovery, TCP/UDP port scanning, service detection and automatic CVE lookup."
kind: university
tech: [Python, scapy, nmap, asyncio, pytest, NVD API]
repo: https://github.com/Nadavsim/Network-Security-Scanner
figure: scanner
order: 4
---
Scans are rate-limited with shuffled port order, UDP states are inferred from ICMP replies, and services found by nmap are checked against the NVD for CVEs sorted by severity. I benchmarked threaded against async TCP scanners before choosing one, and redesigned UDP scanning after finding that scapy's `sr1()` isn't thread-safe.
