---
sidebar_position: 7
---

# Calculator Smart Contract

## Introduction

In this level we will write a very simple calculator smart contract in Clarity and deploy it on the Stacks Testnet. There will be functions in the smart contract for addition, subtraction, multiplication and division. 

So let's just get into it 🚀


## Development

**Follow the steps listed below:**

1. Navigate to [Clarity Tools](https://clarity.tools/code/hello) and clear all the pre-written code, we will write everything from scratch ;)
<img src="https://cdn.discordapp.com/attachments/947480890181812294/1018990105672810536/unknown.png" />

2. Let's start by creating a read-only function called `add` that accepts two integers called `x` and `y` and returns their sum. You don't have to pay gas fees in order to call read-only functions. `define-read-only` is the keyword used to define read only functions.

```clarity
(define-read-only (add (x int) (y int))  
  (+ x y))

;; You don't have to write a return keyword to return a value in Clarity
;; Just write the expression that you want to return, like (+ x y) will return the sum of x and y
```

3. Similarly, let's create functions for subtraction, multiplication and division as well. We just need to change the name of the functions and the operators.

```clarity
(define-read-only (subtract (x int) (y int))  
  (- x y))

(define-read-only (multiply (x int) (y int))  
  (* x y))

(define-read-only (divide (x int) (y int))  
  (/ x y))
```

:::note
Please note that Clarity does not support floating point numbers, so the division function will always return the integer part of the result. For example if we pass 5 and 2 to the divide function it will return 2 instead of 2.5
:::

4. Now let's test these functions by just calling them in ClarityTools, you should be able to see the returned value on the left side of the screen in green.
<img src="https://cdn.discordapp.com/attachments/947480890181812294/1019002876955205642/unknown.png" />

5. Everything looks good! Let's just delete the function calls and deploy the contract.
<img src="https://cdn.discordapp.com/attachments/947480890181812294/1019003532977917972/unknown.png" />

## Deployment

6. We can deploy it through ClarityTools using the "deploy contract" option in the toolbox (in the top right corner) but we won't be using it becuase we can't specify a name for our contract in ClarityTools. It just picks up a random name for the smart contract by itself.
<img src="https://cdn.discordapp.com/attachments/947480890181812294/1019003887384010772/unknown.png" />

7. Copy the whole code and navigate to [Stacks Explorer Sandbox](https://explorer.stacks.co/sandbox/deploy?chain=testnet). Stacks Explorer Sandbox is a tool by Stacks Explorer where we can interact with the contracts and deploy them.

8. Connect your wallet by clicking on the "Connect Stacks Wallet" buttton.
<img src="https://cdn.discordapp.com/attachments/947480890181812294/1019008194313453628/unknown.png" />

8. Paste the whole code in Stacks Explorer Sandbox and give your contract a name in the "contract name" field above the "deploy" button. I am going to call it "calculator".
<img src="https://cdn.discordapp.com/attachments/947480890181812294/1019008539492089866/unknown.png" />

9. Deploy the contract by clicking on the "Deploy" button and signing the transaction in your wallet.
<img src="https://cdn.discordapp.com/attachments/947480890181812294/1019008740042747974/unknown.png" />

10. Once you sign the transaction, copy your address from your wallet and search for it in the explorer.
<img src="https://cdn.discordapp.com/attachments/947480890181812294/1019009246651744387/unknown.png" />

11. You should see a pending transaction for the deployment of "calculator" smart contract. This will take 10 - 15 minutes to be confirmed. Wait for it to be confirmed.
<img src="https://cdn.discordapp.com/attachments/947480890181812294/1019009529440116867/unknown.png" />

## Interacting with the contract

12. Once the transaction is confirmed, click on it and copy the "contract name", it's basically `youraddress.contractname`.
<img src="https://cdn.discordapp.com/attachments/947480890181812294/1019012694285758574/unknown.png" />

13. Navigate to [this link](https://explorer.stacks.co/sandbox/contract-call?chain=testnet) (Stacks Explorer Sandbox for interacting with contracts) and paste your address and contract name in the input fields on left side. Then click "Get Contract".
<img src="https://cdn.discordapp.com/attachments/947480890181812294/1019013344860065853/unknown.png" />

14. This should show you the calculator contract that we just deployed. On the right side click on any of the functions of the contract to call them. 
<img src="https://cdn.discordapp.com/attachments/947480890181812294/1019013878555889724/unknown.png" />

15. Call any function by passing parameters to it. 
<img src="https://cdn.discordapp.com/attachments/947480890181812294/1019014113210421358/unknown.png" />

16. It should give you the result back in response.
<img src="https://cdn.discordapp.com/attachments/947480890181812294/1019014185176268930/unknown.png" />

Congratulations 🥳 You did it!!

You just wrote a calculator smart contract and deployed it on the Stacks testnet.

LFG 🚀🚀🚀

:::note
Please submit your deployed contract's principal by clicking [here](https://forms.gle/oTpfMNDGGxj4WoE3A) to qualify this level.
:::

Anything **unclear** or **issue** in this track? [Please connect at Twitter!](https://twitter.com/SahilAujla15)
 