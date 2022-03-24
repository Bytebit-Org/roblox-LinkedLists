[@rbxts/linked-lists](../README.md) / IReadonlyDoublyLinkedList

# Interface: IReadonlyDoublyLinkedList<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Hierarchy

- [`IReadonlyLinkedList`](IReadonlyLinkedList.md)<`T`\>

  ↳ **`IReadonlyDoublyLinkedList`**

  ↳↳ [`IDoublyLinkedList`](IDoublyLinkedList.md)

## Table of contents

### Methods

- [copyValuesToSubList](IReadonlyDoublyLinkedList.md#copyvaluestosublist)
- [getBackwardIterator](IReadonlyDoublyLinkedList.md#getbackwarditerator)
- [getBackwardValuesIterator](IReadonlyDoublyLinkedList.md#getbackwardvaluesiterator)
- [getForwardIterator](IReadonlyDoublyLinkedList.md#getforwarditerator)
- [getForwardValuesIterator](IReadonlyDoublyLinkedList.md#getforwardvaluesiterator)
- [isEmpty](IReadonlyDoublyLinkedList.md#isempty)
- [peekValueAtHead](IReadonlyDoublyLinkedList.md#peekvalueathead)
- [peekValueAtIndex](IReadonlyDoublyLinkedList.md#peekvalueatindex)
- [peekValueAtTail](IReadonlyDoublyLinkedList.md#peekvalueattail)
- [size](IReadonlyDoublyLinkedList.md#size)
- [toArray](IReadonlyDoublyLinkedList.md#toarray)

## Methods

### copyValuesToSubList

▸ **copyValuesToSubList**(`startIndex`, `endIndex`): [`IReadonlyDoublyLinkedList`](IReadonlyDoublyLinkedList.md)<`T`\>

{@inheritdoc IReadonlyLinkedList.copyValuesToSubList}

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |

#### Returns

[`IReadonlyDoublyLinkedList`](IReadonlyDoublyLinkedList.md)<`T`\>

#### Overrides

[IReadonlyLinkedList](IReadonlyLinkedList.md).[copyValuesToSubList](IReadonlyLinkedList.md#copyvaluestosublist)

#### Defined in

[interfaces/IReadonlyDoublyLinkedList.d.ts:7](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyDoublyLinkedList.d.ts#L7)

___

### getBackwardIterator

▸ **getBackwardIterator**(): `IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

Gets an iterator to be used in making looping over values in the list possible.
Will return lua tuples of the 1-based index and the value.
Iterator will loop from tail value to head value.

#### Returns

`IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

#### Defined in

[interfaces/IReadonlyDoublyLinkedList.d.ts:14](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyDoublyLinkedList.d.ts#L14)

___

### getBackwardValuesIterator

▸ **getBackwardValuesIterator**(): `IterableFunction`<`T`\>

Gets an iterator to be used in making looping over values in the list possible.
Will just return each value.
Iterator will loop from tail value to head value.

#### Returns

`IterableFunction`<`T`\>

#### Defined in

[interfaces/IReadonlyDoublyLinkedList.d.ts:21](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyDoublyLinkedList.d.ts#L21)

___

### getForwardIterator

▸ **getForwardIterator**(): `IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

Gets an iterator to be used in making looping over values in the list possible.
Will return lua tuples of the 1-based index and the value.
Iterator will loop from head value to tail value.

#### Returns

`IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

#### Inherited from

[IReadonlyLinkedList](IReadonlyLinkedList.md).[getForwardIterator](IReadonlyLinkedList.md#getforwarditerator)

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

#### Inherited from

[IReadonlyLinkedList](IReadonlyLinkedList.md).[getForwardValuesIterator](IReadonlyLinkedList.md#getforwardvaluesiterator)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:25](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L25)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Gets whether the list is empty (i.e. no head node)

#### Returns

`boolean`

#### Inherited from

[IReadonlyLinkedList](IReadonlyLinkedList.md).[isEmpty](IReadonlyLinkedList.md#isempty)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:30](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L30)

___

### peekValueAtHead

▸ **peekValueAtHead**(): `undefined` \| `T`

Peeks at the value in the head node of the list without modifying the list

#### Returns

`undefined` \| `T`

#### Inherited from

[IReadonlyLinkedList](IReadonlyLinkedList.md).[peekValueAtHead](IReadonlyLinkedList.md#peekvalueathead)

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

#### Inherited from

[IReadonlyLinkedList](IReadonlyLinkedList.md).[peekValueAtIndex](IReadonlyLinkedList.md#peekvalueatindex)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:42](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L42)

___

### peekValueAtTail

▸ **peekValueAtTail**(): `undefined` \| `T`

Peeks at the value in the tail node of the list without modifying the list

#### Returns

`undefined` \| `T`

#### Inherited from

[IReadonlyLinkedList](IReadonlyLinkedList.md).[peekValueAtTail](IReadonlyLinkedList.md#peekvalueattail)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:47](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L47)

___

### size

▸ **size**(): `number`

Returns the total size of the list

#### Returns

`number`

#### Inherited from

[IReadonlyLinkedList](IReadonlyLinkedList.md).[size](IReadonlyLinkedList.md#size)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:52](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L52)

___

### toArray

▸ **toArray**(): `T`[]

Iterates over the elements and puts their values into an array in the same order

#### Returns

`T`[]

The array with the same values in the same order

#### Inherited from

[IReadonlyLinkedList](IReadonlyLinkedList.md).[toArray](IReadonlyLinkedList.md#toarray)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:58](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L58)
