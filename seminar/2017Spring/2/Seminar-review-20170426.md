# Overview
* Title:￼ Bitcoin-NG: A Scalable Blockchain Protocol
* Source: NSDI'16
* Attendee: Professor Jun Li, Zhi Liu, Jun Yang, Dongfang Li, Danyang Li, Shuo Wang, Shijie Sun, Hang Zhu, Linli Wan, Jiazheng Wang, Ju Xing, Qing Lyu.
* Speaker: Shuo Wang
* Recorder: Qing Lyu

# Presentation
## Introduction
* Cryptocurrency
* The Blockchain Promise 
* Bitcoin and its Blockchain Protocol
* Incentive for Mining 
## Forks
* Fork Resolution
## Security-Performance Tradeoff
* Metrics
* Mining Power Utilization
* Fairness
## Nakamoto Blocks
## Bitcoin-NG
* Bitcoin-NG Incentives
* Key Blocks and Leader Election
* Microblocks
* Confirmation Time
* Remuneration
* Microblock Fork Prevention
## Security Analysis
## Experiment
* Test Bed
* Block frequency
* Block Size
## Related Work
## Summary

# Discussion
* Zhi Liu: What is the experiment settings?
* Shuo Wang: in bitcoin, 10 sec for every block, in NG-bitcoin, 10 sec for every micro block and 100 sec for every key block.

* Prof. Jun Li:  How to control the transaction frequency?
* Shuo Wang: There is a tradeoff between transaction frequency and the latency.

* Zhi Liu:  Is there any chance the probability that the micro block grows branches gets lower?
* Shuo Wang: The experiment settings assume that the time to generate the blocks is constant, and the key block generates very fast and the number of key blocks is small, so the probability that the micro block grows branches might be lower than bitcoin.

* Jiazheng Wang: What is the mechanism of the transaction fees?
* Shuo Wang: The fee holds some percentage of the transaction, if the fee is lower, it gets less chance to accomplish the transaction. So, the small transactions always get less chance to accomplish the transaction.

* Ju Xing: How to comprehend the 10-min's probability model.
* Jun Yang: Maybe we could refer to Bernoulli model that an event appears for the first time.

* Prof. Jun Li: Does this paper bring any changes to the industry right now？And we should pay some attention to the citations.
* Shuo Wang: As far as I know, the traditional bitcoin is still dominant.