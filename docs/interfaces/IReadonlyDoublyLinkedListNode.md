[@rbxts/linked-lists](../README.md) / IReadonlyDoublyLinkedListNode

# Interface: IReadonlyDoublyLinkedListNode<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Hierarchy

- [`IReadonlyLinkedListNode`](IReadonlyLinkedListNode.md)<`T`\>

  ↳ **`IReadonlyDoublyLinkedListNode`**

## Table of contents

### Properties

- [nextNode](IReadonlyDoublyLinkedListNode.md#nextnode)
- [previousNode](IReadonlyDoublyLinkedListNode.md#previousnode)
- [value](IReadonlyDoublyLinkedListNode.md#value)

## Properties

### nextNode

• **nextNode**: `undefined` \| [`IReadonlyDoublyLinkedListNode`](IReadonlyDoublyLinkedListNode.md)<`T`\>

#### Defined in

[interfaces/IReadonlyDoublyLinkedListNode.d.ts:4](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/IReadonlyDoublyLinkedListNode.d.ts#L4)

___

### previousNode

• **previousNode**: `undefined` \| [`IReadonlyDoublyLinkedListNode`](IReadonlyDoublyLinkedListNode.md)<`T`\>

#### Defined in

[interfaces/IReadonlyDoublyLinkedListNode.d.ts:5](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/IReadonlyDoublyLinkedListNode.d.ts#L5)

___

### value

• `Readonly` **value**: `T`

The value held within this node

#### Inherited from

[IReadonlyLinkedListNode](IReadonlyLinkedListNode.md).[value](IReadonlyLinkedListNode.md#value)

#### Defined in

[interfaces/ILinkedListNode.d.ts:5](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/ILinkedListNode.d.ts#L5)
