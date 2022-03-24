[@rbxts/linked-lists](../README.md) / ILinkedList

# Interface: ILinkedList<T\>

Defines the operations available on all linked lists

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Hierarchy

- [`IReadonlyLinkedList`](IReadonlyLinkedList.md)<`T`\>

  ↳ **`ILinkedList`**

  ↳↳ [`IDoublyLinkedList`](IDoublyLinkedList.md)

  ↳↳ [`ISinglyLinkedList`](ISinglyLinkedList.md)

## Table of contents

### Methods

- [clear](ILinkedList.md#clear)
- [copyLinkedListValuesToHead](ILinkedList.md#copylinkedlistvaluestohead)
- [copyLinkedListValuesToIndex](ILinkedList.md#copylinkedlistvaluestoindex)
- [copyLinkedListValuesToTail](ILinkedList.md#copylinkedlistvaluestotail)
- [copyValuesToSubList](ILinkedList.md#copyvaluestosublist)
- [getForwardIterator](ILinkedList.md#getforwarditerator)
- [getForwardValuesIterator](ILinkedList.md#getforwardvaluesiterator)
- [isEmpty](ILinkedList.md#isempty)
- [peekValueAtHead](ILinkedList.md#peekvalueathead)
- [peekValueAtIndex](ILinkedList.md#peekvalueatindex)
- [peekValueAtTail](ILinkedList.md#peekvalueattail)
- [popHeadValue](ILinkedList.md#popheadvalue)
- [popTailValue](ILinkedList.md#poptailvalue)
- [popValueAtIndex](ILinkedList.md#popvalueatindex)
- [popValuesToSubList](ILinkedList.md#popvaluestosublist)
- [pushArrayToHead](ILinkedList.md#pusharraytohead)
- [pushArrayToIndex](ILinkedList.md#pusharraytoindex)
- [pushArrayToTail](ILinkedList.md#pusharraytotail)
- [pushToHead](ILinkedList.md#pushtohead)
- [pushToIndex](ILinkedList.md#pushtoindex)
- [pushToTail](ILinkedList.md#pushtotail)
- [size](ILinkedList.md#size)
- [toArray](ILinkedList.md#toarray)

## Methods

### clear

▸ **clear**(): `void`

Clears the list such that it contains no nodes

#### Returns

`void`

#### Defined in

[interfaces/ILinkedList.d.ts:10](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedList.d.ts#L10)

___

### copyLinkedListValuesToHead

▸ **copyLinkedListValuesToHead**(`valuesList`): `void`

Pushes a new set of nodes to the head of this list with the given values,
with the first value in the input list being placed as the value at the
head of this list

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `valuesList` | [`IReadonlyLinkedList`](IReadonlyLinkedList.md)<`T`\> | The list of values to put into new nodes in this list |

#### Returns

`void`

#### Defined in

[interfaces/ILinkedList.d.ts:18](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedList.d.ts#L18)

___

### copyLinkedListValuesToIndex

▸ **copyLinkedListValuesToIndex**(`index`, `valuesList`): `void`

Pushes a new set of nodes into the list with the given values,
with the first value in the input list going in as the node at the given index

**`throws`** Throws if the index is outside the range of the list's length

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of where to push the new values into the list |
| `valuesList` | [`IReadonlyLinkedList`](IReadonlyLinkedList.md)<`T`\> | The list of values to put into new nodes in this list |

#### Returns

`void`

#### Defined in

[interfaces/ILinkedList.d.ts:27](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedList.d.ts#L27)

___

### copyLinkedListValuesToTail

▸ **copyLinkedListValuesToTail**(`valuesList`): `void`

Pushes a new set of nodes to the tail of this list with the given values,
with the last value in the input list being placed as the value at the
tail of this list

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `valuesList` | [`IReadonlyLinkedList`](IReadonlyLinkedList.md)<`T`\> | The list of values to put into new nodes in this list |

#### Returns

`void`

#### Defined in

[interfaces/ILinkedList.d.ts:35](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedList.d.ts#L35)

___

### copyValuesToSubList

▸ **copyValuesToSubList**(`startIndex`, `endIndex`): [`ILinkedList`](ILinkedList.md)<`T`\>

{@inheritdoc IReadonlyLinkedList.copyValuesToSubList}

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |

#### Returns

[`ILinkedList`](ILinkedList.md)<`T`\>

#### Overrides

[IReadonlyLinkedList](IReadonlyLinkedList.md).[copyValuesToSubList](IReadonlyLinkedList.md#copyvaluestosublist)

#### Defined in

[interfaces/ILinkedList.d.ts:40](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedList.d.ts#L40)

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

### popHeadValue

▸ **popHeadValue**(): `undefined` \| `T`

Pops the head node off the list and returns the value, if any

#### Returns

`undefined` \| `T`

#### Defined in

[interfaces/ILinkedList.d.ts:45](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedList.d.ts#L45)

___

### popTailValue

▸ **popTailValue**(): `undefined` \| `T`

Pops the tail node off the list and returns the value, if any

#### Returns

`undefined` \| `T`

#### Defined in

[interfaces/ILinkedList.d.ts:50](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedList.d.ts#L50)

___

### popValueAtIndex

▸ **popValueAtIndex**(`index`): `T`

Pops the value from the given index

**`throws`** Throws if the index is outside the range of the list's length

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the node to pop and return the value from |

#### Returns

`T`

#### Defined in

[interfaces/ILinkedList.d.ts:57](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedList.d.ts#L57)

___

### popValuesToSubList

▸ **popValuesToSubList**(`startIndex`, `endIndex`): [`ILinkedList`](ILinkedList.md)<`T`\>

Pops the values from the given bounds into a sublist of the same type

**`throws`** Throws if either index is out of bounds for the list or if startIndex > endIndex

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startIndex` | `number` | An inclusive index to start the sub list |
| `endIndex` | `number` | An inclusive index to end the sub list |

#### Returns

[`ILinkedList`](ILinkedList.md)<`T`\>

#### Defined in

[interfaces/ILinkedList.d.ts:65](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedList.d.ts#L65)

___

### pushArrayToHead

▸ **pushArrayToHead**(`valuesArray`): `void`

Pushes a new set of nodes to the head of the list with the given values,
with the first value in the array being placed as the value at the head of the list

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `valuesArray` | readonly `T`[] | The array of values to put into nodes in the list |

#### Returns

`void`

#### Defined in

[interfaces/ILinkedList.d.ts:72](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedList.d.ts#L72)

___

### pushArrayToIndex

▸ **pushArrayToIndex**(`index`, `valuesArray`): `void`

Pushes a new set of nodes into the list with the given values,
with the first value in the array going in as the node at the given index

**`throws`** Throws if the index is outside the range of the list's length

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of where to push the new values into the list |
| `valuesArray` | readonly `T`[] | The array of values to put into nodes in the list |

#### Returns

`void`

#### Defined in

[interfaces/ILinkedList.d.ts:81](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedList.d.ts#L81)

___

### pushArrayToTail

▸ **pushArrayToTail**(`valuesArray`): `void`

Pushes a new set of nodes to the tail of the list with the given values,
with the last value in the array being placed as the value at the tail of the list

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `valuesArray` | readonly `T`[] | The array of values to put into nodes in the list |

#### Returns

`void`

#### Defined in

[interfaces/ILinkedList.d.ts:88](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedList.d.ts#L88)

___

### pushToHead

▸ **pushToHead**(`value`): `void`

Pushes a new node to the head of the list with the given value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to put into a node in the list |

#### Returns

`void`

#### Defined in

[interfaces/ILinkedList.d.ts:94](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedList.d.ts#L94)

___

### pushToIndex

▸ **pushToIndex**(`index`, `value`): `void`

Pushes a new node to the specified index in the list, shifting all nodes from that
index and up over - thereby incrementing each of their indexes by one.

**`throws`** Throws if the index is outside the range of this list's length + 1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of where to push the new value into the list |
| `value` | `T` | The value to put into a node in the list |

#### Returns

`void`

#### Defined in

[interfaces/ILinkedList.d.ts:103](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedList.d.ts#L103)

___

### pushToTail

▸ **pushToTail**(`value`): `void`

Pushes a new node to the tail of the list with the given value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to put into a node in the list |

#### Returns

`void`

#### Defined in

[interfaces/ILinkedList.d.ts:109](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedList.d.ts#L109)

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
