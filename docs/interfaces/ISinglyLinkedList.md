[@rbxts/linked-lists](../README.md) / ISinglyLinkedList

# Interface: ISinglyLinkedList<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Hierarchy

- `IReadonlySinglyLinkedList`<`T`\>

- [`ILinkedList`](ILinkedList.md)<`T`\>

  ↳ **`ISinglyLinkedList`**

## Implemented by

- [`SinglyLinkedList`](../classes/SinglyLinkedList.md)

## Table of contents

### Methods

- [clear](ISinglyLinkedList.md#clear)
- [copyLinkedListValuesToHead](ISinglyLinkedList.md#copylinkedlistvaluestohead)
- [copyLinkedListValuesToIndex](ISinglyLinkedList.md#copylinkedlistvaluestoindex)
- [copyLinkedListValuesToTail](ISinglyLinkedList.md#copylinkedlistvaluestotail)
- [copyValuesToSubList](ISinglyLinkedList.md#copyvaluestosublist)
- [getForwardIterator](ISinglyLinkedList.md#getforwarditerator)
- [getForwardValuesIterator](ISinglyLinkedList.md#getforwardvaluesiterator)
- [isEmpty](ISinglyLinkedList.md#isempty)
- [peekValueAtHead](ISinglyLinkedList.md#peekvalueathead)
- [peekValueAtIndex](ISinglyLinkedList.md#peekvalueatindex)
- [peekValueAtTail](ISinglyLinkedList.md#peekvalueattail)
- [popHeadValue](ISinglyLinkedList.md#popheadvalue)
- [popTailValue](ISinglyLinkedList.md#poptailvalue)
- [popValueAtIndex](ISinglyLinkedList.md#popvalueatindex)
- [popValuesToSubList](ISinglyLinkedList.md#popvaluestosublist)
- [pushArrayToHead](ISinglyLinkedList.md#pusharraytohead)
- [pushArrayToIndex](ISinglyLinkedList.md#pusharraytoindex)
- [pushArrayToTail](ISinglyLinkedList.md#pusharraytotail)
- [pushToHead](ISinglyLinkedList.md#pushtohead)
- [pushToIndex](ISinglyLinkedList.md#pushtoindex)
- [pushToTail](ISinglyLinkedList.md#pushtotail)
- [size](ISinglyLinkedList.md#size)
- [toArray](ISinglyLinkedList.md#toarray)

## Methods

### clear

▸ **clear**(): `void`

Clears the list such that it contains no nodes

#### Returns

`void`

#### Inherited from

[ILinkedList](ILinkedList.md).[clear](ILinkedList.md#clear)

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

#### Inherited from

[ILinkedList](ILinkedList.md).[copyLinkedListValuesToHead](ILinkedList.md#copylinkedlistvaluestohead)

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

#### Inherited from

[ILinkedList](ILinkedList.md).[copyLinkedListValuesToIndex](ILinkedList.md#copylinkedlistvaluestoindex)

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

#### Inherited from

[ILinkedList](ILinkedList.md).[copyLinkedListValuesToTail](ILinkedList.md#copylinkedlistvaluestotail)

#### Defined in

[interfaces/ILinkedList.d.ts:35](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedList.d.ts#L35)

___

### copyValuesToSubList

▸ **copyValuesToSubList**(`startIndex`, `endIndex`): [`ISinglyLinkedList`](ISinglyLinkedList.md)<`T`\>

{@inheritdoc IReadonlyLinkedList.copyValuesToSubList}

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |

#### Returns

[`ISinglyLinkedList`](ISinglyLinkedList.md)<`T`\>

#### Overrides

[ILinkedList](ILinkedList.md).[copyValuesToSubList](ILinkedList.md#copyvaluestosublist)

#### Defined in

[interfaces/ISinglyLinkedList.d.ts:8](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ISinglyLinkedList.d.ts#L8)

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

[ILinkedList](ILinkedList.md).[getForwardValuesIterator](ILinkedList.md#getforwardvaluesiterator)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:25](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L25)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Gets whether the list is empty (i.e. no head node)

#### Returns

`boolean`

#### Inherited from

[ILinkedList](ILinkedList.md).[isEmpty](ILinkedList.md#isempty)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:30](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L30)

___

### peekValueAtHead

▸ **peekValueAtHead**(): `undefined` \| `T`

Peeks at the value in the head node of the list without modifying the list

#### Returns

`undefined` \| `T`

#### Inherited from

[ILinkedList](ILinkedList.md).[peekValueAtHead](ILinkedList.md#peekvalueathead)

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

[ILinkedList](ILinkedList.md).[peekValueAtIndex](ILinkedList.md#peekvalueatindex)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:42](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L42)

___

### peekValueAtTail

▸ **peekValueAtTail**(): `undefined` \| `T`

Peeks at the value in the tail node of the list without modifying the list

#### Returns

`undefined` \| `T`

#### Inherited from

[ILinkedList](ILinkedList.md).[peekValueAtTail](ILinkedList.md#peekvalueattail)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:47](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L47)

___

### popHeadValue

▸ **popHeadValue**(): `undefined` \| `T`

Pops the head node off the list and returns the value, if any

#### Returns

`undefined` \| `T`

#### Inherited from

[ILinkedList](ILinkedList.md).[popHeadValue](ILinkedList.md#popheadvalue)

#### Defined in

[interfaces/ILinkedList.d.ts:45](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedList.d.ts#L45)

___

### popTailValue

▸ **popTailValue**(): `undefined` \| `T`

Pops the tail node off the list and returns the value, if any

#### Returns

`undefined` \| `T`

#### Inherited from

[ILinkedList](ILinkedList.md).[popTailValue](ILinkedList.md#poptailvalue)

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

#### Inherited from

[ILinkedList](ILinkedList.md).[popValueAtIndex](ILinkedList.md#popvalueatindex)

#### Defined in

[interfaces/ILinkedList.d.ts:57](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedList.d.ts#L57)

___

### popValuesToSubList

▸ **popValuesToSubList**(`startIndex`, `endIndex`): [`ISinglyLinkedList`](ISinglyLinkedList.md)<`T`\>

{@inheritdoc ILinkedList.popValuesToSubList}

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |

#### Returns

[`ISinglyLinkedList`](ISinglyLinkedList.md)<`T`\>

#### Overrides

[ILinkedList](ILinkedList.md).[popValuesToSubList](ILinkedList.md#popvaluestosublist)

#### Defined in

[interfaces/ISinglyLinkedList.d.ts:13](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ISinglyLinkedList.d.ts#L13)

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

#### Inherited from

[ILinkedList](ILinkedList.md).[pushArrayToIndex](ILinkedList.md#pusharraytoindex)

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

#### Inherited from

[ILinkedList](ILinkedList.md).[pushArrayToTail](ILinkedList.md#pusharraytotail)

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

#### Inherited from

[ILinkedList](ILinkedList.md).[pushToHead](ILinkedList.md#pushtohead)

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

#### Inherited from

[ILinkedList](ILinkedList.md).[pushToIndex](ILinkedList.md#pushtoindex)

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

#### Inherited from

[ILinkedList](ILinkedList.md).[pushToTail](ILinkedList.md#pushtotail)

#### Defined in

[interfaces/ILinkedList.d.ts:109](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/ILinkedList.d.ts#L109)

___

### size

▸ **size**(): `number`

Returns the total size of the list

#### Returns

`number`

#### Inherited from

[ILinkedList](ILinkedList.md).[size](ILinkedList.md#size)

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

[ILinkedList](ILinkedList.md).[toArray](ILinkedList.md#toarray)

#### Defined in

[interfaces/IReadonlyLinkedList.d.ts:58](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/interfaces/IReadonlyLinkedList.d.ts#L58)
