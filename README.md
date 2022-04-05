# Linked Lists
<p align="center">
  <a href="https://github.com/Bytebit-Org/roblox-LinkedLists/actions">
      <img src="https://github.com/Bytebit-Org/roblox-LinkedLists/workflows/CI/badge.svg" alt="CI status" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-blue.svg" alt="PRs Welcome" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
  </a>
  <a href="https://discord.gg/QEz3v8y">
    <img src="https://img.shields.io/badge/discord-join-7289DA.svg?logo=discord&longCache=true&style=flat" alt="Discord server" />
  </a>
</p>

Linked Lists is a module that provides basic linked list data structures.

## Installation
### roblox-ts
Simply install to your [roblox-ts](https://roblox-ts.com/) project as follows:
```
npm i @rbxts/linked-lists
```

### Wally
[Wally](https://github.com/UpliftGames/wally/) users can install this package by adding the following line to their `Wally.toml` under `[dependencies]`:
```
LinkedLists = "bytebit/linked-lists@1.0.2"
```

Then just run `wally install`.

### From model file
Model files are uploaded to every release as `.rbxmx` files. You can download the file from the [Releases page](https://github.com/Bytebit-Org/roblox-LinkedLists/releases) and load it into your project however you see fit.

### From model asset
New versions of the asset are uploaded with every release. The asset can be added to your Roblox Inventory and then inserted into your Place via Toolbox by getting it [here.](https://www.roblox.com/library/9171119495/Linked-Lists-Package)

## Documentation
Documentation can be found [here](https://github.com/Bytebit-Org/roblox-LinkedLists/tree/master/docs), is included in the TypeScript files directly, and was generated using [TypeDoc](https://typedoc.org/).

## Example
Below is a simple example showing the use of a singly-linked list to implement a queue:

<details>
  <summary>roblox-ts example</summary>

  ```ts
  import { SinglyLinkedList } from "@rbxts/linked-lists";

  export class Queue {
    private readonly linkedList = new SinglyLinkedList<defined>();

    public push(value: defined) {
      this.linkedList.pushToTail(value);
    }

    public pop() {
      return this.linkedList.popHeadValue();
    }
  }
  ```
</details>

<details>
  <summary>Luau example</summary>

  ```lua
  local SinglyLinkedList = require(path.to.modules["linked-lists"]).SinglyLinkedList

  local Queue = {}
  Queue.__index = Queue

  function new()
    local self = {}
    setmetatable(self, Queue)

    self.linkedList = SinglyLinkedList.new()

    return self
  end

  function Queue:push(value)
    self.linkedList:pushToTail(value)
  end

  function Queue:pop()
    return self.linkedList:popHeadValue()
  end

  return {
    new = new
  }
  ```
</details>