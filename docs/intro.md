---
sidebar_position: 1
---

# Introduction to the Stacks Blockchain
This is a mini course on the [Stacks](https://www.stacks.co/) blockchain written by [Sahil Aujla](https://twitter.com/SahilAujla15) to help you get up and running with the Stacks ecosystem. 

## What you will learn

1. What is **Stacks** and its main features.
2. **Proof of Transfer (PoX)** consensus mechanism.
3. Setting up **Hiro Wallet** and online IDE.
4. **Microblocks** in Stacks.
5. Introduction to the **Clarity** Language.
6. Building a **calculator smart contract** using **Clarity** language and deploying it to the **Stacks** blockchain.
7. Interacting with the deployed calculator smart contract.

## What is Stacks?

<img src="https://cdn.discordapp.com/attachments/947480890181812294/1018219048753971350/unknown.png" />

### Introduction

Stacks is a layer-1 blockchain that connects to Bitcoin and brings smart contracts and decentralized apps to it. Smart contracts and apps developed on the Stacks blockchain are natively integrated with the security of Bitcoin. 

The native token on Stacks blockchain is STX and it is used to pay for gas in order to make any transactions. The programming language used to wrtie smart contracts on Stacks is [Clarity](https://book.clarity-lang.org/ch01-00-getting-started.html).

### Consensus Mechanism

Stacks implements a new consensus mechanism called Proof of Transfer ("PoX"). PoX is a consensus algorithm between two blockchains. It uses an established blockchain (in this case Bitcoin) to secure a new blockchain (in this case Stacks).

When a new block is mined on Bitcoin, a new block is also mined on Stacks, so Stacks' blocks are anchored to Bitcoin blocks. The history of all Stacks blocks produced is recorded to Bitcoin, so anything that happens on the Stacks blockchain can be verified on the Bitcoin Blockchain.

Miners on Stacks have to transfer Bitcoin to some predefined addresses (addresses of the STX holders who lock up their STX tokens also called stackers) in order to prove that they have done some work and deserve to mine the next block.

We will be learning more about "Proof of Transfer" in the next level.

### Mining

Mining is required to make the network usable, trustworthy, and secure. Miners verify incoming transactions, participate in the consensus mechanism, and write new blocks to the blockchain.

To incentivize mining, miners receive freshly minted Stacks (STX) tokens when they mine a block.

### Stacking

In Proof of Transfer consensus mechanism, miners have to transfer Bitcoin to a set of specific addresses corresponding to Stacks (STX) token holders that are actively participating in consensus ("Stackers"). Thus, the bitcoins consumed in the mining process go to productive Stacks holders as a reward based on their holdings of Stacks and participation in the Stacking algorithm.

Stackers have to lock up their Stacks (STX) tokens for a certain period of time.

### Smart Contracts

Clarity is a new language for writing smart contracts on the Stacks blockchain. Clarity does not have a compiler, so, contracts written in Clarity are broadcasted on the Stacks blockchain exactly as they are written by developers. This ensures that the code developers wrote, analyzed, and tested, is exactly what gets executed.

:::note
Please complete the quiz by clicking [here](https://forms.gle/a5o86cM61ELPuUJn9) to qualify this level.
:::

### References & Readings
- [Stacks Documentation](https://docs.stacks.co/docs/understand-stacks/)
- [What kind of blockchain is Stacks](https://stacks.org/stacks-blockchain)

Anything **unclear** or **issue** in this track? [Please connect at Twitter!](https://twitter.com/SahilAujla15)
 