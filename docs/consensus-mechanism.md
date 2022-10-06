---
sidebar_position: 2
---

# Proof of Transfer (PoX) Consensus Mechanism

## Overview

Consensus algorithms for blockchains require compute or financial resources to secure the blockchain. The general practice of decentralized consensus is to make it practically infeasible for any single malicious actor to have enough computing power or ownership stake to attack the network.

Popular consensus mechanisms in modern blockchains include proof-of-work, in which nodes dedicate computing resources, and proof-of-stake, in which nodes dedicate financial resources to secure the network.

Proof-of-transfer (PoX) uses the proof-of-work cryptocurrency of an established blockchain to secure a new blockchain. Miners transfer the proof-of-work cryptocurrency (in this case Bitcoin) to some other participants in the network (Stackers) as a proof that they did some work (the action of transferring Bitcoin) and also spent some of their financial resources (because thier Bitcoin were sent to the Stackers).

## Stacking

Stacking is the process of locking up STX tokens for a certain period of time. In exchange, Stackers receive rewards in form of Bitcoin. Stackers must provide their Bitcoin address in which they want to receive rewards.

A reward cycle is the period of time in which 2000 blocks are mined (~2 weeks), Stackers must lock their STX tokens for atleast 1 reward cycle.

## Mechanism

This is the complete flow of Proof of Transfer consensus mechanism in Stacks:

1. Stackers lock up thier STX token for one or more cycles.
2. For every block, bitcoin addresses of 2 Stackers are selected by the protocol based on a VRF (verifiable random function).
3. Miners send BTC to these 2 addresses in order to be selected for mining the next block.
4. A miner is selected by the protocol based on a weighted random function (the more BTC they send, the more chances of winning).
5. The selected miner mines the block and receives freshly minted STX tokens by the protocol and transaction fees for the transactions in the mined block.

<img src="https://docs.stacks.co/assets/images/pox-mechanism-5662b4dae0e197db05c6ecf06410f687.png" />

Image taken from [Stacks Documentation](https://docs.stacks.co/docs/intro)

<img src="https://docs.stacks.co/assets/images/pox-participants-77d88256021867c1b03595d0c9c58040.png" />

Image taken from [Stacks Documentation](https://docs.stacks.co/docs/intro)

:::note
Please complete the quiz by clicking [here](https://forms.gle/EFo5Dtjroe5pdf6t6) to qualify this level.
:::

### References & Readings
- [Stacks Documentation](https://docs.stacks.co/docs/understand-stacks/)
- [Stacking](https://docs.stacks.co/docs/understand-stacks/stacking)
- [Proof of Transfer](https://docs.stacks.co/docs/understand-stacks/proof-of-transfer)

Anything **unclear** or **issue** in this track? [Please connect at Twitter!](https://twitter.com/SahilAujla15)
 