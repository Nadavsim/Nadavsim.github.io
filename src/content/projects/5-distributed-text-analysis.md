---
title: Distributed Text Analysis on AWS
summary: A distributed pipeline that runs NLP parsing over very large text files using S3, SQS and EC2.
kind: university
tech: [Java, AWS S3, SQS, EC2, Stanford Parser, Maven]
repo: https://github.com/Nadavsim/distributed-text-analysis-aws
order: 5
---
A client uploads a file; a manager splits it into per-line tasks and launches EC2 workers sized to the job; workers run POS, constituency and dependency parsing and the manager aggregates an HTML summary. Components talk only through queues, so a crashed or reclaimed worker's task is retried and duplicates are filtered out.
