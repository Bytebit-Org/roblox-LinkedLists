[@rbxts/linked-lists](../README.md) / CircularSinglyLinkedList

# Class: CircularSinglyLinkedList<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Hierarchy

- [`SinglyLinkedList`](SinglyLinkedList.md)<`T`\>

  ↳ **`CircularSinglyLinkedList`**

## Table of contents

### Constructors

- [constructor](CircularSinglyLinkedList.md#constructor)

### Properties

- [headNode](CircularSinglyLinkedList.md#headnode)
- [numberOfNodes](CircularSinglyLinkedList.md#numberofnodes)
- [tailNode](CircularSinglyLinkedList.md#tailnode)

### Methods

- [clear](CircularSinglyLinkedList.md#clear)
- [copyLinkedListValuesToHead](CircularSinglyLinkedList.md#copylinkedlistvaluestohead)
- [copyLinkedListValuesToIndex](CircularSinglyLinkedList.md#copylinkedlistvaluestoindex)
- [copyLinkedListValuesToTail](CircularSinglyLinkedList.md#copylinkedlistvaluestotail)
- [copyValuesToSubList](CircularSinglyLinkedList.md#copyvaluestosublist)
- [doCopyValuesToSubList](CircularSinglyLinkedList.md#docopyvaluestosublist)
- [doPopValuesToSubList](CircularSinglyLinkedList.md#dopopvaluestosublist)
- [getForwardIndexAndNodeTupleIterator](CircularSinglyLinkedList.md#getforwardindexandnodetupleiterator)
- [getForwardIterator](CircularSinglyLinkedList.md#getforwarditerator)
- [getForwardValuesIterator](CircularSinglyLinkedList.md#getforwardvaluesiterator)
- [isEmpty](CircularSinglyLinkedList.md#isempty)
- [moveNodesFromSinglyLinkedListToHead](CircularSinglyLinkedList.md#movenodesfromsinglylinkedlisttohead)
- [moveNodesFromSinglyLinkedListToIndex](CircularSinglyLinkedList.md#movenodesfromsinglylinkedlisttoindex)
- [moveNodesFromSinglyLinkedListToTail](CircularSinglyLinkedList.md#movenodesfromsinglylinkedlisttotail)
- [peekValueAtHead](CircularSinglyLinkedList.md#peekvalueathead)
- [peekValueAtIndex](CircularSinglyLinkedList.md#peekvalueatindex)
- [peekValueAtTail](CircularSinglyLinkedList.md#peekvalueattail)
- [popHeadValue](CircularSinglyLinkedList.md#popheadvalue)
- [popTailValue](CircularSinglyLinkedList.md#poptailvalue)
- [popValueAtIndex](CircularSinglyLinkedList.md#popvalueatindex)
- [popValuesToSubList](CircularSinglyLinkedList.md#popvaluestosublist)
- [pushArrayToHead](CircularSinglyLinkedList.md#pusharraytohead)
- [pushArrayToIndex](CircularSinglyLinkedList.md#pusharraytoindex)
- [pushArrayToTail](CircularSinglyLinkedList.md#pusharraytotail)
- [pushToHead](CircularSinglyLinkedList.md#pushtohead)
- [pushToIndex](CircularSinglyLinkedList.md#pushtoindex)
- [pushToTail](CircularSinglyLinkedList.md#pushtotail)
- [size](CircularSinglyLinkedList.md#size)
- [toArray](CircularSinglyLinkedList.md#toarray)

## Constructors

### constructor

• **new CircularSinglyLinkedList**<`T`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

#### Inherited from

[SinglyLinkedList](SinglyLinkedList.md).[constructor](SinglyLinkedList.md#constructor)

## Properties

### headNode

• `Protected` `Optional` **headNode**: [`ISinglyLinkedListNode`](../interfaces/ISinglyLinkedListNode.md)<`T`\>

#### Inherited from

[SinglyLinkedList](SinglyLinkedList.md).[headNode](SinglyLinkedList.md#headnode)

#### Defined in

[classes/lists/SinglyLinkedList.ts:7](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L7)

___

### numberOfNodes

• `Protected` **numberOfNodes**: `number` = `0`

#### Inherited from

[SinglyLinkedList](SinglyLinkedList.md).[numberOfNodes](SinglyLinkedList.md#numberofnodes)

#### Defined in

[classes/lists/SinglyLinkedList.ts:9](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L9)

___

### tailNode

• `Protected` `Optional` **tailNode**: [`ISinglyLinkedListNode`](../interfaces/ISinglyLinkedListNode.md)<`T`\>

#### Inherited from

[SinglyLinkedList](SinglyLinkedList.md).[tailNode](SinglyLinkedList.md#tailnode)

#### Defined in

[classes/lists/SinglyLinkedList.ts:8](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L8)

## Methods

### clear

▸ **clear**(): `void`

Clears the list such that it contains no nodes

#### Returns

`void`

#### Inherited from

[SinglyLinkedList](SinglyLinkedList.md).[clear](SinglyLinkedList.md#clear)

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

#### Overrides

[SinglyLinkedList](SinglyLinkedList.md).[copyLinkedListValuesToHead](SinglyLinkedList.md#copylinkedlistvaluestohead)

#### Defined in

[classes/lists/CircularSinglyLinkedList.ts:6](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/CircularSinglyLinkedList.ts#L6)

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

#### Inherited from

[SinglyLinkedList](SinglyLinkedList.md).[copyLinkedListValuesToIndex](SinglyLinkedList.md#copylinkedlistvaluestoindex)

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

#### Overrides

[SinglyLinkedList](SinglyLinkedList.md).[copyLinkedListValuesToTail](SinglyLinkedList.md#copylinkedlistvaluestotail)

#### Defined in

[classes/lists/CircularSinglyLinkedList.ts:14](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/CircularSinglyLinkedList.ts#L14)

___

### copyValuesToSubList

▸ **copyValuesToSubList**(`startIndex`, `endIndex`): [`CircularSinglyLinkedList`](CircularSinglyLinkedList.md)<`T`\>

{@inheritdoc IReadonlyLinkedList.copyValuesToSubList}

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |

#### Returns

[`CircularSinglyLinkedList`](CircularSinglyLinkedList.md)<`T`\>

#### Overrides

[SinglyLinkedList](SinglyLinkedList.md).[copyValuesToSubList](SinglyLinkedList.md#copyvaluestosublist)

#### Defined in

[classes/lists/CircularSinglyLinkedList.ts:22](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/CircularSinglyLinkedList.ts#L22)

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

#### Inherited from

[SinglyLinkedList](SinglyLinkedList.md).[doCopyValuesToSubList](SinglyLinkedList.md#docopyvaluestosublist)

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

#### Inherited from

[SinglyLinkedList](SinglyLinkedList.md).[doPopValuesToSubList](SinglyLinkedList.md#dopopvaluestosublist)

#### Defined in

[classes/lists/SinglyLinkedList.ts:587](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L587)

___

### getForwardIndexAndNodeTupleIterator

▸ `Protected` **getForwardIndexAndNodeTupleIterator**(): `IterableFunction`<`LuaTuple`<[`number`, [`ISinglyLinkedListNode`](../interfaces/ISinglyLinkedListNode.md)<`T`\>]\>\>

#### Returns

`IterableFunction`<`LuaTuple`<[`number`, [`ISinglyLinkedListNode`](../interfaces/ISinglyLinkedListNode.md)<`T`\>]\>\>

#### Inherited from

[SinglyLinkedList](SinglyLinkedList.md).[getForwardIndexAndNodeTupleIterator](SinglyLinkedList.md#getforwardindexandnodetupleiterator)

#### Defined in

[classes/lists/SinglyLinkedList.ts:643](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L643)

___

### getForwardIterator

▸ **getForwardIterator**(): `IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

{@inheritdoc IReadonlyLinkedList.getForwardIterator}

**`remarks`** Because this iterator includes an index, it will not loop despite being
a circular list

#### Returns

`IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

#### Overrides

[SinglyLinkedList](SinglyLinkedList.md).[getForwardIterator](SinglyLinkedList.md#getforwarditerator)

#### Defined in

[classes/lists/CircularSinglyLinkedList.ts:39](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/CircularSinglyLinkedList.ts#L39)

___

### getForwardValuesIterator

▸ **getForwardValuesIterator**(): `IterableFunction`<`T`\>

Gets an iterator to be used in making looping over values in the list possible.
Will just return each value.
Iterator will loop from head value to tail value.

#### Returns

`IterableFunction`<`T`\>

#### Inherited from

[SinglyLinkedList](SinglyLinkedList.md).[getForwardValuesIterator](SinglyLinkedList.md#getforwardvaluesiterator)

#### Defined in

[classes/lists/SinglyLinkedList.ts:136](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L136)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Gets whether the list is empty (i.e. no head node)

#### Returns

`boolean`

#### Inherited from

[SinglyLinkedList](SinglyLinkedList.md).[isEmpty](SinglyLinkedList.md#isempty)

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

| Name | Type |
| :------ | :------ |
| `otherSinglyLinkedList` | [`SinglyLinkedList`](SinglyLinkedList.md)<`T`\> |

#### Returns

`void`

#### Overrides

[SinglyLinkedList](SinglyLinkedList.md).[moveNodesFromSinglyLinkedListToHead](SinglyLinkedList.md#movenodesfromsinglylinkedlisttohead)

#### Defined in

[classes/lists/CircularSinglyLinkedList.ts:62](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/CircularSinglyLinkedList.ts#L62)

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

#### Inherited from

[SinglyLinkedList](SinglyLinkedList.md).[moveNodesFromSinglyLinkedListToIndex](SinglyLinkedList.md#movenodesfromsinglylinkedlisttoindex)

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

| Name | Type |
| :------ | :------ |
| `otherSinglyLinkedList` | [`SinglyLinkedList`](SinglyLinkedList.md)<`T`\> |

#### Returns

`void`

#### Overrides

[SinglyLinkedList](SinglyLinkedList.md).[moveNodesFromSinglyLinkedListToTail](SinglyLinkedList.md#movenodesfromsinglylinkedlisttotail)

#### Defined in

[classes/lists/CircularSinglyLinkedList.ts:72](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/CircularSinglyLinkedList.ts#L72)

___

### peekValueAtHead

▸ **peekValueAtHead**(): `undefined` \| `T`

Peeks at the value in the head node of the list without modifying the list

#### Returns

`undefined` \| `T`

#### Inherited from

[SinglyLinkedList](SinglyLinkedList.md).[peekValueAtHead](SinglyLinkedList.md#peekvalueathead)

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

#### Overrides

[SinglyLinkedList](SinglyLinkedList.md).[peekValueAtIndex](SinglyLinkedList.md#peekvalueatindex)

#### Defined in

[classes/lists/CircularSinglyLinkedList.ts:82](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/CircularSinglyLinkedList.ts#L82)

___

### peekValueAtTail

▸ **peekValueAtTail**(): `undefined` \| `T`

Peeks at the value in the tail node of the list without modifying the list

#### Returns

`undefined` \| `T`

#### Inherited from

[SinglyLinkedList](SinglyLinkedList.md).[peekValueAtTail](SinglyLinkedList.md#peekvalueattail)

#### Defined in

[classes/lists/SinglyLinkedList.ts:282](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L282)

___

### popHeadValue

▸ **popHeadValue**(): `undefined` \| `T`

Pops the head node off the list and returns the value, if any

#### Returns

`undefined` \| `T`

#### Overrides

[SinglyLinkedList](SinglyLinkedList.md).[popHeadValue](SinglyLinkedList.md#popheadvalue)

#### Defined in

[classes/lists/CircularSinglyLinkedList.ts:105](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/CircularSinglyLinkedList.ts#L105)

___

### popTailValue

▸ **popTailValue**(): `undefined` \| `T`

Pops the tail node off the list and returns the value, if any

#### Returns

`undefined` \| `T`

#### Overrides

[SinglyLinkedList](SinglyLinkedList.md).[popTailValue](SinglyLinkedList.md#poptailvalue)

#### Defined in

[classes/lists/CircularSinglyLinkedList.ts:127](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/CircularSinglyLinkedList.ts#L127)

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

#### Inherited from

[SinglyLinkedList](SinglyLinkedList.md).[popValueAtIndex](SinglyLinkedList.md#popvalueatindex)

#### Defined in

[classes/lists/SinglyLinkedList.ts:337](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L337)

___

### popValuesToSubList

▸ **popValuesToSubList**(`startIndex`, `endIndex`): [`CircularSinglyLinkedList`](CircularSinglyLinkedList.md)<`T`\>

{@inheritdoc ILinkedList.popValuesToSubList}

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |

#### Returns

[`CircularSinglyLinkedList`](CircularSinglyLinkedList.md)<`T`\>

#### Overrides

[SinglyLinkedList](SinglyLinkedList.md).[popValuesToSubList](SinglyLinkedList.md#popvaluestosublist)

#### Defined in

[classes/lists/CircularSinglyLinkedList.ts:157](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/CircularSinglyLinkedList.ts#L157)

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

#### Overrides

[SinglyLinkedList](SinglyLinkedList.md).[pushArrayToHead](SinglyLinkedList.md#pusharraytohead)

#### Defined in

[classes/lists/CircularSinglyLinkedList.ts:173](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/CircularSinglyLinkedList.ts#L173)

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

#### Inherited from

[SinglyLinkedList](SinglyLinkedList.md).[pushArrayToIndex](SinglyLinkedList.md#pusharraytoindex)

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

#### Overrides

[SinglyLinkedList](SinglyLinkedList.md).[pushArrayToTail](SinglyLinkedList.md#pusharraytotail)

#### Defined in

[classes/lists/CircularSinglyLinkedList.ts:183](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/CircularSinglyLinkedList.ts#L183)

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

#### Overrides

[SinglyLinkedList](SinglyLinkedList.md).[pushToHead](SinglyLinkedList.md#pushtohead)

#### Defined in

[classes/lists/CircularSinglyLinkedList.ts:193](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/CircularSinglyLinkedList.ts#L193)

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

#### Inherited from

[SinglyLinkedList](SinglyLinkedList.md).[pushToIndex](SinglyLinkedList.md#pushtoindex)

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

#### Overrides

[SinglyLinkedList](SinglyLinkedList.md).[pushToTail](SinglyLinkedList.md#pushtotail)

#### Defined in

[classes/lists/CircularSinglyLinkedList.ts:199](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/CircularSinglyLinkedList.ts#L199)

___

### size

▸ **size**(): `number`

Returns the total size of the list

#### Returns

`number`

#### Inherited from

[SinglyLinkedList](SinglyLinkedList.md).[size](SinglyLinkedList.md#size)

#### Defined in

[classes/lists/SinglyLinkedList.ts:547](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/SinglyLinkedList.ts#L547)

___

### toArray

▸ **toArray**(): `T`[]

Iterates over the elements and puts their values into an array in the same order

#### Returns

`T`[]

#### Overrides

[SinglyLinkedList](SinglyLinkedList.md).[toArray](SinglyLinkedList.md#toarray)

#### Defined in

[classes/lists/CircularSinglyLinkedList.ts:205](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/CircularSinglyLinkedList.ts#L205)
