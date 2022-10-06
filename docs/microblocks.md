---
sidebar_position: 4
---

# Microblocks

## Introduction

Microblocks are a protocol-level feature of the Stacks blockchain that solve the technical challenge of transaction latency. Because each Stacks block is anchored to a Bitcoin block through the Proof-of-Transfer consensus mechanism, Stacks is necessarily limited to the same block times as the Bitcoin network. Microblocks allow the Stacks blockchain to perform state transitions between anchor blocks.

Microblocks are a powerful mechanism for developers to create performant, high quality applications on Stacks, while still inheriting the security of Bitcoin.

## How it works

Basically, the block leader (the miner selected to mine the next anchor block based on PoX consensus alogrithm) selects transactions from the mempool and package them into microblocks. 

:::info
The mempool is where the unconfirmed transactions wait to be confirmed.
:::

Microblocks are blocks of transactions included by a miner after the previous anchor block has been mined, but before the next anchor block is mined. Transactions included in microblocks are processed by the Stacks network, so, their results are known even before the next anchor block gets mined.

:::info
Anchor blocks are the main blocks mined by the miners in the Stacks blockchain, they are produced simultaneously to the Bitcoin blocks and transactions included in the anchor blocks are also recorded on the Bitcoin blockchain.
:::

In the image below, think of blue vertical lines as anchor blocks (blocks produced simultaneously to Bitcoin blocks) and grey vertical lines as microblocks
<img src="https://docs.stacks.co/assets/images/stx-microblocks-dc2a427bc95fb9a5037bacd3991086a8.png" />

Image from [Stacks Documentation](https://docs.stacks.co/docs/intro)

The transaction still remains pending even if it is included in a microblock. It remains pending until it is included in an anchor block, i.e until it is recorded on the Bitcoin blockchain, but since the results of the transaction are known before it is included in an anchor block, applications can show the results of that transaction to the user in advance.

## Use Cases

Dapps are able to know the result of the transactions included in microblocks even before they are confirmed. For example, in the last level (Setting up Hiro Wallet) when you requested STX tokens from the STX token faucet, in your wallet under the "Activity" tab it was shown that you will receive 500 STX tokens, though you hadn't received them yet, that's because that transaction was included in a microblock and the application (in this case Hiro Wallet) knew that you will receive those tokens once the transaction is included in an anchor block.
<hr></hr>
<img src="https://cdn.discordapp.com/attachments/947480890181812294/1018547596547063939/unknown.png" />
<hr></hr>

:::note
Please complete the quiz by clicking [here](https://forms.gle/ug4iAWKhseGSmokS8) to qualify this level.
:::

### References & Readings
- [Microblocks by Stacks Documentation](https://docs.stacks.co/docs/understand-stacks/microblocks)

Anything **unclear** or **issue** in this track? [Please connect at Twitter!](https://twitter.com/SahilAujla15)
