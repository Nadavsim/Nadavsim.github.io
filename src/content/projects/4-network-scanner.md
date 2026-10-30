---
title: Network Security Scanner
summary: "A Python recon tool: ARP discovery, TCP/UDP port scanning, service detection and automatic CVE lookup."
kind: university
tech: [Python, scapy, nmap, asyncio, NVD API]
repo: https://github.com/Nadavsim/Network-Security-Scanner
order: 4
---
Built to behave like a real pentest tool: scans are rate-limited with shuffled port order, UDP states are inferred from ICMP replies, and services found by nmap are looked up against the NVD for CVEs sorted by severity. I implemented threaded and async TCP scanners and benchmarked them before choosing one, and redesigned UDP scanning after finding scapy's `sr1()` isn't thread-safe.
