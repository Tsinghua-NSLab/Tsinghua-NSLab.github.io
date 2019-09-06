# Overview
* Title:￼ Splinter: Practical Private Queries on Public Data
* Source: NSDI 2017
* Attendee: Professor Jun Li, Zhi Liu, Jun Yang, Dongfang Li, Danyang Li, Shuo Wang, Shijie Sun, Hang Zhu, Linli Wan, Jiazheng Wang, Qing Lyu
* Speaker: Dongfang Li
* Recorder: Shuo Wang

# Presentation
## Public online searches reveal sensitive information
* Naive Approach
* Splinter Design
## Denotations
* FSS- Function Secret Sharing
* PIR-Private Information Retrieval
* Garbled Circuits
## Splinter
* Query Format
* FSS Properties
* Count Query
* Sum Query
* Min Query
* Count Query
## Different Conditions
* Equality Only
* Intervals
* Disjoint ORs
## Complexity Analysis
* Computation
* Round Trips
* Bandwidth
## Summary
* Splinter is the 1st practical system.
* Develop new protocols


# Discussion

* Shuo Wang: What is the problem of naive approaches?
* Dongfang Li: The data is huge and frequently changed.

* Prof. Li:  The market of commercials are even bigger that software.
* Shuo Wang: Commerials are used to promote information between customers and producers，which is essential to free market economy.
* Prof. Li:  It solves the problem of information asymmetry.

* Prof. Li: Jun Yang, please introduce how precise marketing works.
* Jun Yang: The information of your searches and clicks and gathered by search engines and e-commerce platforms. They will analyze it and make user profile for you.Based on your profile, commercials are chosen specially for you.

* Shuo Wang: In bitcoin, SPV uses bloom filter to add other key words and hide privacy by increase false positive cases.
* Prof. Li: The expense is heavy. Anyway, it works for bitcoin.

* Prof. Jun Li: Profiles can not only describe users for commercials ,but also be applied to describe network devices and nodes to optimize resource usage and guarantee security.