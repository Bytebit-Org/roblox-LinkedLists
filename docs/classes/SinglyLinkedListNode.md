[@rbxts/linked-lists](../README.md) / SinglyLinkedListNode

# Class: SinglyLinkedListNode<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Implements

- [`ISinglyLinkedListNode`](../interfaces/ISinglyLinkedListNode.md)<`T`\>

## Table of contents

### Constructors

- [constructor](SinglyLinkedListNode.md#constructor)

### Properties

- [nextNode](SinglyLinkedListNode.md#nextnode)
- [value](SinglyLinkedListNode.md#value)

## Constructors

### constructor

• **new SinglyLinkedListNode**<`T`\>(`value`, `nextNode?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `nextNode?` | [`SinglyLinkedListNode`](SinglyLinkedListNode.md)<`T`\> |

#### Defined in

[classes/nodes/SinglyLinkedListNode.ts:6](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/nodes/SinglyLinkedListNode.ts#L6)

## Properties

### nextNode

• **nextNode**: `undefined` \| [`SinglyLinkedListNode`](SinglyLinkedListNode.md)<`T`\>

A reference to the next node, or "right" neighbor, from this node

#### Implementation of

[ISinglyLinkedListNode](../interfaces/ISinglyLinkedListNode.md).[nextNode](../interfaces/ISinglyLinkedListNode.md#nextnode)

#### Defined in

[classes/nodes/SinglyLinkedListNode.ts:4](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/nodes/SinglyLinkedListNode.ts#L4)

___

### value

• **value**: `T`

The value held within this node

#### Implementation of

[ISinglyLinkedListNode](../interfaces/ISinglyLinkedListNode.md).[value](../interfaces/ISinglyLinkedListNode.md#value)
