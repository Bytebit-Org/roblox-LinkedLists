[@rbxts/linked-lists](../README.md) / ISinglyLinkedListNode

# Interface: ISinglyLinkedListNode<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Hierarchy

- [`ILinkedListNode`](ILinkedListNode.md)<`T`\>

  ↳ **`ISinglyLinkedListNode`**

## Implemented by

- [`SinglyLinkedListNode`](../classes/SinglyLinkedListNode.md)

## Table of contents

### Properties

- [nextNode](ISinglyLinkedListNode.md#nextnode)
- [value](ISinglyLinkedListNode.md#value)

## Properties

### nextNode

• **nextNode**: `undefined` \| [`ISinglyLinkedListNode`](ISinglyLinkedListNode.md)<`T`\>

A reference to the next node, or "right" neighbor, from this node

#### Defined in

[interfaces/ISinglyLinkedListNode.d.ts:7](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ISinglyLinkedListNode.d.ts#L7)

___

### value

• **value**: `T`

The value held within this node

#### Inherited from

[ILinkedListNode](ILinkedListNode.md).[value](ILinkedListNode.md#value)

#### Defined in

[interfaces/ILinkedListNode.d.ts:5](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedListNode.d.ts#L5)
