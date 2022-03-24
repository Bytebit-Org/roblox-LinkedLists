[@rbxts/linked-lists](../README.md) / IReadonlyLinkedList

# Interface: IReadonlyLinkedList<T\>

Defines the readonly operations available on all linked lists

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Hierarchy

- **`IReadonlyLinkedList`**

  ↳ [`ILinkedList`](ILinkedList.md)

  ↳ [`IReadonlyDoublyLinkedList`](IReadonlyDoublyLinkedList.md)

## Table of contents

### Methods

- [copyValuesToSubList](IReadonlyLinkedList.md#copyvaluestosublist)
- [getForwardIterator](IReadonlyLinkedList.md#getforwarditerator)
- [getForwardValuesIterator](IReadonlyLinkedList.md#getforwardvaluesiterator)
- [isEmpty](IReadonlyLinkedList.md#isempty)
- [peekValueAtHead](IReadonlyLinkedList.md#peekvalueathead)
- [peekValueAtIndex](IReadonlyLinkedList.md#peekvalueatindex)
- [peekValueAtTail](IReadonlyLinkedList.md#peekvalueattail)
- [size](IReadonlyLinkedList.md#size)
- [toArray](IReadonlyLinkedList.md#toarray)

## Methods

### copyValuesToSubList

▸ **copyValuesToSubList**(`startIndex`, `endIndex`): [`IReadonlyLinkedList`](IReadonlyLinkedList.md)<`T`\>

Copies the values from the given bounds into a sublist of the same type

**`throws`** Throws if either index is out of bounds for the list or if startIndex > endIndex

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startIndex` | `number` | An inclusive index to start the sub list |
| `endIndex` | `number` | An inclusive index to end the sub list |

#### Returns

[`IReadonlyLinkedList`](IReadonlyLinkedList.md)<`T`\>

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:11](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L11)

___

### getForwardIterator

▸ **getForwardIterator**(): `IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

Gets an iterator to be used in making looping over values in the list possible.
Will return lua tuples of the 1-based index and the value.
Iterator will loop from head value to tail value.

#### Returns

`IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:18](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L18)

___

### getForwardValuesIterator

▸ **getForwardValuesIterator**(): `IterableFunction`<`T`\>

Gets an iterator to be used in making looping over values in the list possible.
Will just return each value.
Iterator will loop from head value to tail value.

#### Returns

`IterableFunction`<`T`\>

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:25](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L25)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Gets whether the list is empty (i.e. no head node)

#### Returns

`boolean`

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:30](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L30)

___

### peekValueAtHead

▸ **peekValueAtHead**(): `undefined` \| `T`

Peeks at the value in the head node of the list without modifying the list

#### Returns

`undefined` \| `T`

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:35](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L35)

___

### peekValueAtIndex

▸ **peekValueAtIndex**(`index`): `T`

Peeks at the value from the given index without moving nodes around

**`throws`** Throws if the index is outside the range of the list's length

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the node to peek at and return the value from |

#### Returns

`T`

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:42](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L42)

___

### peekValueAtTail

▸ **peekValueAtTail**(): `undefined` \| `T`

Peeks at the value in the tail node of the list without modifying the list

#### Returns

`undefined` \| `T`

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:47](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L47)

___

### size

▸ **size**(): `number`

Returns the total size of the list

#### Returns

`number`

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:52](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L52)

___

### toArray

▸ **toArray**(): `T`[]

Iterates over the elements and puts their values into an array in the same order

#### Returns

`T`[]

The array with the same values in the same order

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:58](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L58)
