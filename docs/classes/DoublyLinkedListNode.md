[@rbxts/linked-lists](../README.md) / DoublyLinkedListNode

# Class: DoublyLinkedListNode<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Implements

- [`IDoublyLinkedListNode`](../interfaces/IDoublyLinkedListNode.md)<`T`\>

## Table of contents

### Constructors

- [constructor](DoublyLinkedListNode.md#constructor)

### Properties

- [nextNode](DoublyLinkedListNode.md#nextnode)
- [previousNode](DoublyLinkedListNode.md#previousnode)
- [value](DoublyLinkedListNode.md#value)

## Constructors

### constructor

• **new DoublyLinkedListNode**<`T`\>(`value`, `previousNode?`, `nextNode?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `previousNode?` | [`DoublyLinkedListNode`](DoublyLinkedListNode.md)<`T`\> |
| `nextNode?` | [`DoublyLinkedListNode`](DoublyLinkedListNode.md)<`T`\> |

#### Defined in

[classes/nodes/DoublyLinkedListNode.ts:7](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/nodes/DoublyLinkedListNode.ts#L7)

## Properties

### nextNode

• **nextNode**: `undefined` \| [`DoublyLinkedListNode`](DoublyLinkedListNode.md)<`T`\>

A reference to the next node, or "right" neighbor, from this node

#### Implementation of

[IDoublyLinkedListNode](../interfaces/IDoublyLinkedListNode.md).[nextNode](../interfaces/IDoublyLinkedListNode.md#nextnode)

#### Defined in

[classes/nodes/DoublyLinkedListNode.ts:4](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/nodes/DoublyLinkedListNode.ts#L4)

___

### previousNode

• **previousNode**: `undefined` \| [`DoublyLinkedListNode`](DoublyLinkedListNode.md)<`T`\>

A reference to the previous node, or "left" neighbor, from this node

#### Implementation of

[IDoublyLinkedListNode](../interfaces/IDoublyLinkedListNode.md).[previousNode](../interfaces/IDoublyLinkedListNode.md#previousnode)

#### Defined in

[classes/nodes/DoublyLinkedListNode.ts:5](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/nodes/DoublyLinkedListNode.ts#L5)

___

### value

• **value**: `T`

The value held within this node

#### Implementation of

[IDoublyLinkedListNode](../interfaces/IDoublyLinkedListNode.md).[value](../interfaces/IDoublyLinkedListNode.md#value)
