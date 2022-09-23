[@rbxts/linked-lists](../README.md) / IDoublyLinkedList

# Interface: IDoublyLinkedList<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Hierarchy

- [`IReadonlyDoublyLinkedList`](IReadonlyDoublyLinkedList.md)<`T`\>

- [`ILinkedList`](ILinkedList.md)<`T`\>

  ↳ **`IDoublyLinkedList`**

## Implemented by

- [`DoublyLinkedList`](../classes/DoublyLinkedList.md)

## Table of contents

### Methods

- [clear](IDoublyLinkedList.md#clear)
- [contains](IDoublyLinkedList.md#contains)
- [copyLinkedListValuesToHead](IDoublyLinkedList.md#copylinkedlistvaluestohead)
- [copyLinkedListValuesToIndex](IDoublyLinkedList.md#copylinkedlistvaluestoindex)
- [copyLinkedListValuesToTail](IDoublyLinkedList.md#copylinkedlistvaluestotail)
- [copyValuesToSubList](IDoublyLinkedList.md#copyvaluestosublist)
- [getBackwardIterator](IDoublyLinkedList.md#getbackwarditerator)
- [getBackwardValuesIterator](IDoublyLinkedList.md#getbackwardvaluesiterator)
- [getForwardIterator](IDoublyLinkedList.md#getforwarditerator)
- [getForwardValuesIterator](IDoublyLinkedList.md#getforwardvaluesiterator)
- [isEmpty](IDoublyLinkedList.md#isempty)
- [peekValueAtHead](IDoublyLinkedList.md#peekvalueathead)
- [peekValueAtIndex](IDoublyLinkedList.md#peekvalueatindex)
- [peekValueAtTail](IDoublyLinkedList.md#peekvalueattail)
- [popHeadValue](IDoublyLinkedList.md#popheadvalue)
- [popTailValue](IDoublyLinkedList.md#poptailvalue)
- [popValueAtIndex](IDoublyLinkedList.md#popvalueatindex)
- [popValuesToSubList](IDoublyLinkedList.md#popvaluestosublist)
- [pushArrayToHead](IDoublyLinkedList.md#pusharraytohead)
- [pushArrayToIndex](IDoublyLinkedList.md#pusharraytoindex)
- [pushArrayToTail](IDoublyLinkedList.md#pusharraytotail)
- [pushToHead](IDoublyLinkedList.md#pushtohead)
- [pushToIndex](IDoublyLinkedList.md#pushtoindex)
- [pushToTail](IDoublyLinkedList.md#pushtotail)
- [size](IDoublyLinkedList.md#size)
- [toArray](IDoublyLinkedList.md#toarray)

## Methods

### clear

▸ **clear**(): `void`

Clears the list such that it contains no nodes

#### Returns

`void`

#### Inherited from

[ILinkedList](ILinkedList.md).[clear](ILinkedList.md#clear)

#### Defined in

[interfaces/ILinkedList.d.ts:10](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/ILinkedList.d.ts#L10)

___

### contains

▸ **contains**(`value`): `boolean`

Compares the value to each node, and returns if any were found to be equal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to compare against |

#### Returns

`boolean`

#### Inherited from

[ILinkedList](ILinkedList.md).[contains](ILinkedList.md#contains)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:53](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/IReadonlyLinkedList.d.ts#L53)

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

#### Inherited from

[ILinkedList](ILinkedList.md).[copyLinkedListValuesToHead](ILinkedList.md#copylinkedlistvaluestohead)

#### Defined in

[interfaces/ILinkedList.d.ts:18](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/ILinkedList.d.ts#L18)

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

#### Inherited from

[ILinkedList](ILinkedList.md).[copyLinkedListValuesToIndex](ILinkedList.md#copylinkedlistvaluestoindex)

#### Defined in

[interfaces/ILinkedList.d.ts:27](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/ILinkedList.d.ts#L27)

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

#### Inherited from

[ILinkedList](ILinkedList.md).[copyLinkedListValuesToTail](ILinkedList.md#copylinkedlistvaluestotail)

#### Defined in

[interfaces/ILinkedList.d.ts:35](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/ILinkedList.d.ts#L35)

___

### copyValuesToSubList

▸ **copyValuesToSubList**(`startIndex`, `endIndex`): [`IDoublyLinkedList`](IDoublyLinkedList.md)<`T`\>

{@inheritdoc IReadonlyLinkedList.copyValuesToSubList}

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |

#### Returns

[`IDoublyLinkedList`](IDoublyLinkedList.md)<`T`\>

#### Overrides

[ILinkedList](ILinkedList.md).[copyValuesToSubList](ILinkedList.md#copyvaluestosublist)

#### Defined in

[interfaces/IDoublyLinkedList.d.ts:8](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/IDoublyLinkedList.d.ts#L8)

___

### getBackwardIterator

▸ **getBackwardIterator**(): `IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

Gets an iterator to be used in making looping over values in the list possible.
Will return lua tuples of the 1-based index and the value.
Iterator will loop from tail value to head value.

#### Returns

`IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

#### Inherited from

[IReadonlyDoublyLinkedList](IReadonlyDoublyLinkedList.md).[getBackwardIterator](IReadonlyDoublyLinkedList.md#getbackwarditerator)

#### Defined in

[interfaces/IReadonlyDoublyLinkedList.d.ts:14](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/IReadonlyDoublyLinkedList.d.ts#L14)

___

### getBackwardValuesIterator

▸ **getBackwardValuesIterator**(): `IterableFunction`<`T`\>

Gets an iterator to be used in making looping over values in the list possible.
Will just return each value.
Iterator will loop from tail value to head value.

#### Returns

`IterableFunction`<`T`\>

#### Inherited from

[IReadonlyDoublyLinkedList](IReadonlyDoublyLinkedList.md).[getBackwardValuesIterator](IReadonlyDoublyLinkedList.md#getbackwardvaluesiterator)

#### Defined in

[interfaces/IReadonlyDoublyLinkedList.d.ts:21](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/IReadonlyDoublyLinkedList.d.ts#L21)

___

### getForwardIterator

▸ **getForwardIterator**(): `IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

Gets an iterator to be used in making looping over values in the list possible.
Will return lua tuples of the 1-based index and the value.
Iterator will loop from head value to tail value.

#### Returns

`IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

#### Inherited from

[ILinkedList](ILinkedList.md).[getForwardIterator](ILinkedList.md#getforwarditerator)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:18](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/IReadonlyLinkedList.d.ts#L18)

___

### getForwardValuesIterator

▸ **getForwardValuesIterator**(): `IterableFunction`<`T`\>

Gets an iterator to be used in making looping over values in the list possible.
Will just return each value.
Iterator will loop from head value to tail value.

#### Returns

`IterableFunction`<`T`\>

#### Inherited from

[ILinkedList](ILinkedList.md).[getForwardValuesIterator](ILinkedList.md#getforwardvaluesiterator)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:25](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/IReadonlyLinkedList.d.ts#L25)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Gets whether the list is empty (i.e. no head node)

#### Returns

`boolean`

#### Inherited from

[ILinkedList](ILinkedList.md).[isEmpty](ILinkedList.md#isempty)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:30](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/IReadonlyLinkedList.d.ts#L30)

___

### peekValueAtHead

▸ **peekValueAtHead**(): `undefined` \| `T`

Peeks at the value in the head node of the list without modifying the list

#### Returns

`undefined` \| `T`

#### Inherited from

[ILinkedList](ILinkedList.md).[peekValueAtHead](ILinkedList.md#peekvalueathead)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:35](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/IReadonlyLinkedList.d.ts#L35)

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

[ILinkedList](ILinkedList.md).[peekValueAtIndex](ILinkedList.md#peekvalueatindex)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:42](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/IReadonlyLinkedList.d.ts#L42)

___

### peekValueAtTail

▸ **peekValueAtTail**(): `undefined` \| `T`

Peeks at the value in the tail node of the list without modifying the list

#### Returns

`undefined` \| `T`

#### Inherited from

[ILinkedList](ILinkedList.md).[peekValueAtTail](ILinkedList.md#peekvalueattail)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:47](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/IReadonlyLinkedList.d.ts#L47)

___

### popHeadValue

▸ **popHeadValue**(): `undefined` \| `T`

Pops the head node off the list and returns the value, if any

#### Returns

`undefined` \| `T`

#### Inherited from

[ILinkedList](ILinkedList.md).[popHeadValue](ILinkedList.md#popheadvalue)

#### Defined in

[interfaces/ILinkedList.d.ts:45](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/ILinkedList.d.ts#L45)

___

### popTailValue

▸ **popTailValue**(): `undefined` \| `T`

Pops the tail node off the list and returns the value, if any

#### Returns

`undefined` \| `T`

#### Inherited from

[ILinkedList](ILinkedList.md).[popTailValue](ILinkedList.md#poptailvalue)

#### Defined in

[interfaces/ILinkedList.d.ts:50](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/ILinkedList.d.ts#L50)

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

#### Inherited from

[ILinkedList](ILinkedList.md).[popValueAtIndex](ILinkedList.md#popvalueatindex)

#### Defined in

[interfaces/ILinkedList.d.ts:57](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/ILinkedList.d.ts#L57)

___

### popValuesToSubList

▸ **popValuesToSubList**(`startIndex`, `endIndex`): [`IDoublyLinkedList`](IDoublyLinkedList.md)<`T`\>

{@inheritdoc ILinkedList.popValuesToSubList}

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |

#### Returns

[`IDoublyLinkedList`](IDoublyLinkedList.md)<`T`\>

#### Overrides

[ILinkedList](ILinkedList.md).[popValuesToSubList](ILinkedList.md#popvaluestosublist)

#### Defined in

[interfaces/IDoublyLinkedList.d.ts:13](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/IDoublyLinkedList.d.ts#L13)

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

#### Inherited from

[ILinkedList](ILinkedList.md).[pushArrayToHead](ILinkedList.md#pusharraytohead)

#### Defined in

[interfaces/ILinkedList.d.ts:72](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/ILinkedList.d.ts#L72)

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

#### Inherited from

[ILinkedList](ILinkedList.md).[pushArrayToIndex](ILinkedList.md#pusharraytoindex)

#### Defined in

[interfaces/ILinkedList.d.ts:81](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/ILinkedList.d.ts#L81)

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

#### Inherited from

[ILinkedList](ILinkedList.md).[pushArrayToTail](ILinkedList.md#pusharraytotail)

#### Defined in

[interfaces/ILinkedList.d.ts:88](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/ILinkedList.d.ts#L88)

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

#### Inherited from

[ILinkedList](ILinkedList.md).[pushToHead](ILinkedList.md#pushtohead)

#### Defined in

[interfaces/ILinkedList.d.ts:94](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/ILinkedList.d.ts#L94)

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

#### Inherited from

[ILinkedList](ILinkedList.md).[pushToIndex](ILinkedList.md#pushtoindex)

#### Defined in

[interfaces/ILinkedList.d.ts:103](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/ILinkedList.d.ts#L103)

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

#### Inherited from

[ILinkedList](ILinkedList.md).[pushToTail](ILinkedList.md#pushtotail)

#### Defined in

[interfaces/ILinkedList.d.ts:109](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/ILinkedList.d.ts#L109)

___

### size

▸ **size**(): `number`

Returns the total size of the list

#### Returns

`number`

#### Inherited from

[ILinkedList](ILinkedList.md).[size](ILinkedList.md#size)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:58](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/IReadonlyLinkedList.d.ts#L58)

___

### toArray

▸ **toArray**(): `T`[]

Iterates over the elements and puts their values into an array in the same order

#### Returns

`T`[]

The array with the same values in the same order

#### Inherited from

[ILinkedList](ILinkedList.md).[toArray](ILinkedList.md#toarray)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:64](https://github.com/daymxn/roblox-LinkedLists/blob/8baa320/src/interfaces/IReadonlyLinkedList.d.ts#L64)
