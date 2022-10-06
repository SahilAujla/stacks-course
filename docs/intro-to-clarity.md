---
sidebar_position: 6
---

# Intro to Clarity
<img src="https://cdn.discordapp.com/attachments/947480890181812294/1018605563891945482/unknown.png" />

## What is Clarity

Clarity is a new language for writing smart contracts on the Stacks blockchain. Some of the things that make Clarity different are: 

1.  Clarity does not have a compiler, so, contracts written in Clarity are broadcasted on the Stacks blockchain exactly as they are written by developers. This ensures that the code developers wrote, analyzed, and tested, is exactly what gets executed. 

2. Clarity smart contracts can read the state of the Bitcoin base chain. It means you can use Bitcoin transactions as a trigger in your smart contracts! 

3. Overflows and underflows of any kind automatically cause a transaction to be aborted in Clarity.

4. Types are strictly enforced and cannot mix in Clarity.


## Building in Clarity

:::info
You will see a lot of parentheses in Clarity. Every statement is enclosed in a parentheses.
:::

### Variables

There are 2 types of variables in Clarity

**1. Local:** Declared inside a function and are not stored on blockchain.

**2. State:** Declared outside a function to maintain the state of the smart contract, stored on the blockchain.

The syntax for declaring a state variable looks like this

```clarity
(define-data-var var-name var-type initial-value)
```

Where `define-data-var` is the keyword used to define the variable, `var-name` is the name of the variable, `var-type` is the type of the variable that you are defining and `initial-value` is the value of the variable.

```clarity
;; Anything prefixed with ";;" is a comment. This is a comment.
;; Defining an integer data type variable with an initial value of 5. 👇

(define-data-var my-number int 5)

;; Print the initial value.
;; We can print any variable using the "print" keyword
;; We can get or set the value of the variable by using the "var-get" or "var-set" keyword in Clarity 👇

(print (var-get my-number))

;; Change the value. 👇
(var-set my-number 5000)

;; Print the new value. 👇
(print (var-get my-number))
```

### Types

Some commonly used types in Clarity are `int`, `uint`, `bool`, `principal`, `string-ascii` and `string-utf8`. Let's take a look at all of them 👇

#### Integers (int)
Integers are 128 bits numbers that can either be positive or negative. The minimum value for an integer is is -2 ^ 127 and the maximum value is 2 ^ 127 - 1.  Some examples: 0, 5000, -45.

```clarity
;; defining two integer data type variables called x and y with values 1 and -1 respectively 👇

(define-data-var x int 1)
(define-data-var y int -1)
```

#### Unsigned Integers (uint)
 Unsigned Integers or uints are 128 bits numbers that can only be positive. The minimum value is 0 and the maximum value is 2 ** 128 - 1.  Unsigned integers are always prefixed by the character u. Some examples: u0, u40935094534.  

```
;; defining a uint data type variable called z with the value u1 👇

(define-data-var my-number uint u1)
```

#### Booleans (bool)
bool, short for boolean. A boolean value is either true or false. They are used to check if a certain condition is met or unmet (true or false)

```
;; defining a bool data type variable called is-cool with the value true 👇

(define-data-var is-cool bool true)
```

#### Principals (principal)
A principal is a special type in Clarity and and represents a Stacks address on the blockchain. Clarity has two different kinds of principals: *standard principals* and *contract principals*. Standard principals are backed by a corresponding private key while contract principals point to a smart contract and do not have a private key. Principals follow a specific structure and always start with the characters "SP" for the Stacks mainnet and "ST" for the testnet.

A literal principal value is prefixed by a single quote (') in Clarity. For example: `'ST1HTBVD3JG9C05J7HBJTHGR0GGW7KXW28M5JS8QE
`

Contract principals are a compound of the standard principal that deployed the contract and the contract name, delimited by a dot. For example if my principal (address) is `'ST1HTBVD3JG9C05J7HBJTHGR0GGW7KXW28M5JS8QE` and I deployed a contract named `my-awesome-contract` then my contract's principal would be:

```clarity
'ST1HTBVD3JG9C05J7HBJTHGR0GGW7KXW28M5JS8QE.my-awesome-contract
```

```clarity
;; defining a principal data type called my-principa with a value of 'ST1HTBVD3JG9C05J7HBJTHGR0GGW7KXW28M5JS8QE 👇

(define-data-var my-principal principal 'ST1HTBVD3JG9C05J7HBJTHGR0GGW7KXW28M5JS8QE)
```

#### Strings (string-ascii & string-utf8)
A string is a sequence of characters. These can be defined as ASCII strings or UTF-8 strings. ASCII strings may only contain basic Latin characters whilst UTF-8 strings can contain fun stuff like emoji. Both strings are enclosed in double-quotes (") but UTF-8 strings are also prefixed by a u

```clarity
;; defining a string-ascii data type variable called message. 👇
(define-data-var message (string-ascii 50) "This is an ASCII string")
 
;; defining a string-utf8 data type variable called message2. 👇
(define-data-var message2 (string-utf8 200) u"And this is an UTF-8 string \u{1f601}")
```


### Basic Arithmetic Operations
Basic arithmetic operations like additon(+), subtraction (-), division (/) and multiplication (*) are supported by Clarity but instead of writing them between the operands (the variables on which you perform those operations), they are written in the beginning of the expression and the operands are written next to each other with spaces between them.

For example if you want to add 5, 7 and 8 in Clarity you would write it as: 

```clarity
(+ 5 7 8)
;; returns 20, sum of 5, 7 and 8
```

Similarly you can perform other operations: 

```clarity
(- 7 5)   ;; 2
(/ 5 2)   ;; 2, division returns the integer part of the result, so here it returns 2 instead of 2.5
(* 5 2)   ;; 10
```

### Functions
Functions are portions of code that may take some input and produce an output. They are used to subdivide your program code into logical components. There are three types of functions in Clarity: 

1. **Public functions**: Public functions can be called externally. That means that another standard principal or contract principal can invoke the function. Public function calls require sending a transaction. The sender thus need to pay transaction fees.

`define-public` is the keyword used to define a public function.

2. **Private functions**: Private functions can only be called by the current contract, there is no outside access. This will make more sense when we actually write contracts using private functions.

`define-private` is the keyword used to define a private function.

3. **Read-only functions**: Read-only functions can be called externally but do not change the chain state. You don't need to send a transaction (pay for gas) to call a read-only function. Read only functions don't change any variables stored in the smart contract.

`define-read-only` is the keyword used to define a read-only function.

Defining a custom function takes the following general form:

```clarity
(define-visibility function-name (param1-name param1-type) (param2-name param2-type) ... function-body)
```

Where `visibility` is `public`, `private` or `read-only` based on the function.

For example, here is a read-only function called "add" that takes two parameters called "x" and "y" and returns their sum. 

```clarity
(define-read-only (add (x int) (y int))
  (+ x y))

  ;; You don't need a return statement to return a value in Clarity, just write the expression.
  ;; Anything written after ;; is a comment. This is a comment.
  ```

Now that you have understanding of some basic concepts in Clairty, in the next level we will write and deploy a very simple calculator smart contract.

LFG 🚀🚀🚀

Anything **unclear** or **issue** in this track? [Please connect at Twitter!](https://twitter.com/SahilAujla15)
 