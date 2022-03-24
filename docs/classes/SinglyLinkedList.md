[@rbxts/linked-lists](../README.md) / SinglyLinkedList

# Class: SinglyLinkedList<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Hierarchy

- **`SinglyLinkedList`**

  ↳ [`CircularSinglyLinkedList`](CircularSinglyLinkedList.md)

## Implements

- [`ISinglyLinkedList`](../interfaces/ISinglyLinkedList.md)<`T`\>

## Table of contents

### Constructors

- [constructor](SinglyLinkedList.md#constructor)

### Properties

- [headNode](SinglyLinkedList.md#headnode)
- [numberOfNodes](SinglyLinkedList.md#numberofnodes)
- [tailNode](SinglyLinkedList.md#tailnode)

### Methods

- [clear](SinglyLinkedList.md#clear)
- [copyLinkedListValuesToHead](SinglyLinkedList.md#copylinkedlistvaluestohead)
- [copyLinkedListValuesToIndex](SinglyLinkedList.md#copylinkedlistvaluestoindex)
- [copyLinkedListValuesToTail](SinglyLinkedList.md#copylinkedlistvaluestotail)
- [copyValuesToSubList](SinglyLinkedList.md#copyvaluestosublist)
- [doCopyValuesToSubList](SinglyLinkedList.md#docopyvaluestosublist)
- [doPopValuesToSubList](SinglyLinkedList.md#dopopvaluestosublist)
- [getForwardIndexAndNodeTupleIterator](SinglyLinkedList.md#getforwardindexandnodetupleiterator)
- [getForwardIterator](SinglyLinkedList.md#getforwarditerator)
- [getForwardValuesIterator](SinglyLinkedList.md#getforwardvaluesiterator)
- [isEmpty](SinglyLinkedList.md#isempty)
- [moveNodesFromSinglyLinkedListToHead](SinglyLinkedList.md#movenodesfromsinglylinkedlisttohead)
- [moveNodesFromSinglyLinkedListToIndex](SinglyLinkedList.md#movenodesfromsinglylinkedlisttoindex)
- [moveNodesFromSinglyLinkedListToTail](SinglyLinkedList.md#movenodesfromsinglylinkedlisttotail)
- [peekValueAtHead](SinglyLinkedList.md#peekvalueathead)
- [peekValueAtIndex](SinglyLinkedList.md#peekvalueatindex)
- [peekValueAtTail](SinglyLinkedList.md#peekvalueattail)
- [popHeadValue](SinglyLinkedList.md#popheadvalue)
- [popTailValue](SinglyLinkedList.md#poptailvalue)
- [popValueAtIndex](SinglyLinkedList.md#popvalueatindex)
- [popValuesToSubList](SinglyLinkedList.md#popvaluestosublist)
- [pushArrayToHead](SinglyLinkedList.md#pusharraytohead)
- [pushArrayToIndex](SinglyLinkedList.md#pusharraytoindex)
- [pushArrayToTail](SinglyLinkedList.md#pusharraytotail)
- [pushToHead](SinglyLinkedList.md#pushtohead)
- [pushToIndex](SinglyLinkedList.md#pushtoindex)
- [pushToTail](SinglyLinkedList.md#pushtotail)
- [size](SinglyLinkedList.md#size)
- [toArray](SinglyLinkedList.md#toarray)

## Constructors

### constructor

• **new SinglyLinkedList**<`T`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Properties

### headNode

• `Protected` `Optional` **headNode**: [`ISinglyLinkedListNode`](../interfaces/ISinglyLinkedListNode.md)<`T`\>

#### Defined in

[classes/lists/SinglyLinkedList.ts:7](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L7)

___

### numberOfNodes

• `Protected` **numberOfNodes**: `number` = `0`

#### Defined in

[classes/lists/SinglyLinkedList.ts:9](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L9)

___

### tailNode

• `Protected` `Optional` **tailNode**: [`ISinglyLinkedListNode`](../interfaces/ISinglyLinkedListNode.md)<`T`\>

#### Defined in

[classes/lists/SinglyLinkedList.ts:8](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L8)

## Methods

### clear

▸ **clear**(): `void`

Clears the list such that it contains no nodes

#### Returns

`void`

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[clear](../interfaces/ISinglyLinkedList.md#clear)

#### Defined in

[classes/lists/SinglyLinkedList.ts:11](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L11)

___

### copyLinkedListValuesToHead

▸ **copyLinkedListValuesToHead**(`valuesList`): `void`

Pushes a new set of nodes to the head of this list with the given values,
with the first value in the input list being placed as the value at the
head of this list

#### Parameters

| Name | Type |
| :------ | :------ |
| `valuesList` | [`IReadonlyLinkedList`](../interfaces/IReadonlyLinkedList.md)<`T`\> |

#### Returns

`void`

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[copyLinkedListValuesToHead](../interfaces/ISinglyLinkedList.md#copylinkedlistvaluestohead)

#### Defined in

[classes/lists/SinglyLinkedList.ts:17](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L17)

___

### copyLinkedListValuesToIndex

▸ **copyLinkedListValuesToIndex**(`index`, `valuesList`): `void`

Pushes a new set of nodes into the list with the given values,
with the first value in the input list going in as the node at the given index

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `valuesList` | [`IReadonlyLinkedList`](../interfaces/IReadonlyLinkedList.md)<`T`\> |

#### Returns

`void`

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[copyLinkedListValuesToIndex](../interfaces/ISinglyLinkedList.md#copylinkedlistvaluestoindex)

#### Defined in

[classes/lists/SinglyLinkedList.ts:48](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L48)

___

### copyLinkedListValuesToTail

▸ **copyLinkedListValuesToTail**(`valuesList`): `void`

Pushes a new set of nodes to the tail of this list with the given values,
with the last value in the input list being placed as the value at the
tail of this list

#### Parameters

| Name | Type |
| :------ | :------ |
| `valuesList` | [`IReadonlyLinkedList`](../interfaces/IReadonlyLinkedList.md)<`T`\> |

#### Returns

`void`

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[copyLinkedListValuesToTail](../interfaces/ISinglyLinkedList.md#copylinkedlistvaluestotail)

#### Defined in

[classes/lists/SinglyLinkedList.ts:98](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L98)

___

### copyValuesToSubList

▸ **copyValuesToSubList**(`startIndex`, `endIndex`): [`SinglyLinkedList`](SinglyLinkedList.md)<`T`\>

{@inheritdoc IReadonlyLinkedList.copyValuesToSubList}

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |

#### Returns

[`SinglyLinkedList`](SinglyLinkedList.md)<`T`\>

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[copyValuesToSubList](../interfaces/ISinglyLinkedList.md#copyvaluestosublist)

#### Defined in

[classes/lists/SinglyLinkedList.ts:119](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L119)

___

### doCopyValuesToSubList

▸ `Protected` **doCopyValuesToSubList**(`startIndex`, `endIndex`, `subList`): [`SinglyLinkedList`](SinglyLinkedList.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |
| `subList` | [`SinglyLinkedList`](SinglyLinkedList.md)<`T`\> |

#### Returns

[`SinglyLinkedList`](SinglyLinkedList.md)<`T`\>

#### Defined in

[classes/lists/SinglyLinkedList.ts:561](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L561)

___

### doPopValuesToSubList

▸ `Protected` **doPopValuesToSubList**(`startIndex`, `endIndex`, `subList`): [`SinglyLinkedList`](SinglyLinkedList.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |
| `subList` | [`SinglyLinkedList`](SinglyLinkedList.md)<`T`\> |

#### Returns

[`SinglyLinkedList`](SinglyLinkedList.md)<`T`\>

#### Defined in

[classes/lists/SinglyLinkedList.ts:587](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L587)

___

### getForwardIndexAndNodeTupleIterator

▸ `Protected` **getForwardIndexAndNodeTupleIterator**(): `IterableFunction`<`LuaTuple`<[`number`, [`ISinglyLinkedListNode`](../interfaces/ISinglyLinkedListNode.md)<`T`\>]\>\>

#### Returns

`IterableFunction`<`LuaTuple`<[`number`, [`ISinglyLinkedListNode`](../interfaces/ISinglyLinkedListNode.md)<`T`\>]\>\>

#### Defined in

[classes/lists/SinglyLinkedList.ts:643](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L643)

___

### getForwardIterator

▸ **getForwardIterator**(): `IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

Gets an iterator to be used in making looping over values in the list possible.
Will return lua tuples of the 1-based index and the value.
Iterator will loop from head value to tail value.

#### Returns

`IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[getForwardIterator](../interfaces/ISinglyLinkedList.md#getforwarditerator)

#### Defined in

[classes/lists/SinglyLinkedList.ts:123](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L123)

___

### getForwardValuesIterator

▸ **getForwardValuesIterator**(): `IterableFunction`<`T`\>

Gets an iterator to be used in making looping over values in the list possible.
Will just return each value.
Iterator will loop from head value to tail value.

#### Returns

`IterableFunction`<`T`\>

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[getForwardValuesIterator](../interfaces/ISinglyLinkedList.md#getforwardvaluesiterator)

#### Defined in

[classes/lists/SinglyLinkedList.ts:136](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L136)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Gets whether the list is empty (i.e. no head node)

#### Returns

`boolean`

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[isEmpty](../interfaces/ISinglyLinkedList.md#isempty)

#### Defined in

[classes/lists/SinglyLinkedList.ts:145](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L145)

___

### moveNodesFromSinglyLinkedListToHead

▸ **moveNodesFromSinglyLinkedListToHead**(`otherSinglyLinkedList`): `void`

Moves the nodes from the input list into this list at the head of this list,
such that the head of the input list is the new head of this list and all other
nodes follow in order and the previous head of this list is attached as the
next node following the tail of the input list.
The input list is cleared in the process.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherSinglyLinkedList` | [`SinglyLinkedList`](SinglyLinkedList.md)<`T`\> | The input list |

#### Returns

`void`

#### Defined in

[classes/lists/SinglyLinkedList.ts:157](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L157)

___

### moveNodesFromSinglyLinkedListToIndex

▸ **moveNodesFromSinglyLinkedListToIndex**(`index`, `otherSinglyLinkedList`): `void`

Moves the nodes from the input list into this list at the given index in this list,
such that the head of the input list is now at the given index of this list and all other
nodes follow in order and the previous node, if any, at the given index of this list is
attached as the next node following the tail of the input list.
The input list is cleared in the process.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | - |
| `otherSinglyLinkedList` | [`SinglyLinkedList`](SinglyLinkedList.md)<`T`\> | The input list |

#### Returns

`void`

#### Defined in

[classes/lists/SinglyLinkedList.ts:185](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L185)

___

### moveNodesFromSinglyLinkedListToTail

▸ **moveNodesFromSinglyLinkedListToTail**(`otherSinglyLinkedList`): `void`

Moves the nodes from the input list into this list at the tail of this list,
such that the tail of the input list is the new tail of this list and all other
nodes follow in order and the head of the input list is attached as the
next node following the prior tail of this list.
The input list is cleared in the process.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherSinglyLinkedList` | [`SinglyLinkedList`](SinglyLinkedList.md)<`T`\> | The input list |

#### Returns

`void`

#### Defined in

[classes/lists/SinglyLinkedList.ts:238](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L238)

___

### peekValueAtHead

▸ **peekValueAtHead**(): `undefined` \| `T`

Peeks at the value in the head node of the list without modifying the list

#### Returns

`undefined` \| `T`

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[peekValueAtHead](../interfaces/ISinglyLinkedList.md#peekvalueathead)

#### Defined in

[classes/lists/SinglyLinkedList.ts:259](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L259)

___

### peekValueAtIndex

▸ **peekValueAtIndex**(`index`): `T`

Peeks at the value from the given index without moving nodes around

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`T`

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[peekValueAtIndex](../interfaces/ISinglyLinkedList.md#peekvalueatindex)

#### Defined in

[classes/lists/SinglyLinkedList.ts:263](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L263)

___

### peekValueAtTail

▸ **peekValueAtTail**(): `undefined` \| `T`

Peeks at the value in the tail node of the list without modifying the list

#### Returns

`undefined` \| `T`

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[peekValueAtTail](../interfaces/ISinglyLinkedList.md#peekvalueattail)

#### Defined in

[classes/lists/SinglyLinkedList.ts:282](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L282)

___

### popHeadValue

▸ **popHeadValue**(): `undefined` \| `T`

Pops the head node off the list and returns the value, if any

#### Returns

`undefined` \| `T`

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[popHeadValue](../interfaces/ISinglyLinkedList.md#popheadvalue)

#### Defined in

[classes/lists/SinglyLinkedList.ts:286](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L286)

___

### popTailValue

▸ **popTailValue**(): `undefined` \| `T`

Pops the tail node off the list and returns the value, if any

#### Returns

`undefined` \| `T`

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[popTailValue](../interfaces/ISinglyLinkedList.md#poptailvalue)

#### Defined in

[classes/lists/SinglyLinkedList.ts:306](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L306)

___

### popValueAtIndex

▸ **popValueAtIndex**(`index`): `T`

Pops the value from the given index

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`T`

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[popValueAtIndex](../interfaces/ISinglyLinkedList.md#popvalueatindex)

#### Defined in

[classes/lists/SinglyLinkedList.ts:337](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L337)

___

### popValuesToSubList

▸ **popValuesToSubList**(`startIndex`, `endIndex`): [`SinglyLinkedList`](SinglyLinkedList.md)<`T`\>

{@inheritdoc ILinkedList.popValuesToSubList}

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |

#### Returns

[`SinglyLinkedList`](SinglyLinkedList.md)<`T`\>

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[popValuesToSubList](../interfaces/ISinglyLinkedList.md#popvaluestosublist)

#### Defined in

[classes/lists/SinglyLinkedList.ts:376](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L376)

___

### pushArrayToHead

▸ **pushArrayToHead**(`valuesArray`): `void`

Pushes a new set of nodes to the head of the list with the given values,
with the first value in the array being placed as the value at the head of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `valuesArray` | readonly `T`[] |

#### Returns

`void`

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[pushArrayToHead](../interfaces/ISinglyLinkedList.md#pusharraytohead)

#### Defined in

[classes/lists/SinglyLinkedList.ts:380](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L380)

___

### pushArrayToIndex

▸ **pushArrayToIndex**(`index`, `valuesArray`): `void`

Pushes a new set of nodes into the list with the given values,
with the first value in the array going in as the node at the given index

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `valuesArray` | readonly `T`[] |

#### Returns

`void`

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[pushArrayToIndex](../interfaces/ISinglyLinkedList.md#pusharraytoindex)

#### Defined in

[classes/lists/SinglyLinkedList.ts:413](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L413)

___

### pushArrayToTail

▸ **pushArrayToTail**(`valuesArray`): `void`

Pushes a new set of nodes to the tail of the list with the given values,
with the last value in the array being placed as the value at the tail of the list

#### Parameters

| Name | Type |
| :------ | :------ |
| `valuesArray` | readonly `T`[] |

#### Returns

`void`

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[pushArrayToTail](../interfaces/ISinglyLinkedList.md#pusharraytotail)

#### Defined in

[classes/lists/SinglyLinkedList.ts:462](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L462)

___

### pushToHead

▸ **pushToHead**(`value`): `void`

Pushes a new node to the head of the list with the given value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[pushToHead](../interfaces/ISinglyLinkedList.md#pushtohead)

#### Defined in

[classes/lists/SinglyLinkedList.ts:483](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L483)

___

### pushToIndex

▸ **pushToIndex**(`index`, `value`): `void`

Pushes a new node to the specified index in the list, shifting all nodes from that
index and up over - thereby incrementing each of their indexes by one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `T` |

#### Returns

`void`

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[pushToIndex](../interfaces/ISinglyLinkedList.md#pushtoindex)

#### Defined in

[classes/lists/SinglyLinkedList.ts:495](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L495)

___

### pushToTail

▸ **pushToTail**(`value`): `void`

Pushes a new node to the tail of the list with the given value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`void`

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[pushToTail](../interfaces/ISinglyLinkedList.md#pushtotail)

#### Defined in

[classes/lists/SinglyLinkedList.ts:534](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L534)

___

### size

▸ **size**(): `number`

Returns the total size of the list

#### Returns

`number`

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[size](../interfaces/ISinglyLinkedList.md#size)

#### Defined in

[classes/lists/SinglyLinkedList.ts:547](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L547)

___

### toArray

▸ **toArray**(): `T`[]

Iterates over the elements and puts their values into an array in the same order

#### Returns

`T`[]

#### Implementation of

[ISinglyLinkedList](../interfaces/ISinglyLinkedList.md).[toArray](../interfaces/ISinglyLinkedList.md#toarray)

#### Defined in

[classes/lists/SinglyLinkedList.ts:551](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L551)
