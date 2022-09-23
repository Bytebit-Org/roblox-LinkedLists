[@rbxts/linked-lists](../README.md) / IDoublyLinkedListNode

# Interface: IDoublyLinkedListNode<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Hierarchy

- [`ILinkedListNode`](ILinkedListNode.md)<`T`\>

  ↳ **`IDoublyLinkedListNode`**

## Implemented by

- [`DoublyLinkedListNode`](../classes/DoublyLinkedListNode.md)

## Table of contents

### Properties

- [nextNode](IDoublyLinkedListNode.md#nextnode)
- [previousNode](IDoublyLinkedListNode.md#previousnode)
- [value](IDoublyLinkedListNode.md#value)

## Properties

### nextNode

• **nextNode**: `undefined` \| [`IDoublyLinkedListNode`](IDoublyLinkedListNode.md)<`T`\>

A reference to the next node, or "right" neighbor, from this node

#### Defined in

[interfaces/IDoublyLinkedListNode.d.ts:7](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/interfaces/IDoublyLinkedListNode.d.ts#L7)

___

### previousNode

• **previousNode**: `undefined` \| [`IDoublyLinkedListNode`](IDoublyLinkedListNode.md)<`T`\>

A reference to the previous node, or "left" neighbor, from this node

#### Defined in

[interfaces/IDoublyLinkedListNode.d.ts:12](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/interfaces/IDoublyLinkedListNode.d.ts#L12)

___

### value

• **value**: `T`

The value held within this node

#### Inherited from

[ILinkedListNode](ILinkedListNode.md).[value](ILinkedListNode.md#value)

#### Defined in

[interfaces/ILinkedListNode.d.ts:5](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/interfaces/ILinkedListNode.d.ts#L5)
