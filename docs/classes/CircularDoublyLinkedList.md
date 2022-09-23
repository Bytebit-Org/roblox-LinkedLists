[@rbxts/linked-lists](../README.md) / CircularDoublyLinkedList

# Class: CircularDoublyLinkedList<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Hierarchy

- [`DoublyLinkedList`](DoublyLinkedList.md)<`T`\>

  ↳ **`CircularDoublyLinkedList`**

## Table of contents

### Constructors

- [constructor](CircularDoublyLinkedList.md#constructor)

### Properties

- [headNode](CircularDoublyLinkedList.md#headnode)
- [numberOfNodes](CircularDoublyLinkedList.md#numberofnodes)
- [tailNode](CircularDoublyLinkedList.md#tailnode)

### Methods

- [clear](CircularDoublyLinkedList.md#clear)
- [contains](CircularDoublyLinkedList.md#contains)
- [copyLinkedListValuesToHead](CircularDoublyLinkedList.md#copylinkedlistvaluestohead)
- [copyLinkedListValuesToIndex](CircularDoublyLinkedList.md#copylinkedlistvaluestoindex)
- [copyLinkedListValuesToTail](CircularDoublyLinkedList.md#copylinkedlistvaluestotail)
- [copyValuesToSubList](CircularDoublyLinkedList.md#copyvaluestosublist)
- [doCopyValuesToSubList](CircularDoublyLinkedList.md#docopyvaluestosublist)
- [doPopValuesToSubList](CircularDoublyLinkedList.md#dopopvaluestosublist)
- [getBackwardIndexAndNodeTupleIterator](CircularDoublyLinkedList.md#getbackwardindexandnodetupleiterator)
- [getBackwardIterator](CircularDoublyLinkedList.md#getbackwarditerator)
- [getBackwardValuesIterator](CircularDoublyLinkedList.md#getbackwardvaluesiterator)
- [getForwardIndexAndNodeTupleIterator](CircularDoublyLinkedList.md#getforwardindexandnodetupleiterator)
- [getForwardIterator](CircularDoublyLinkedList.md#getforwarditerator)
- [getForwardValuesIterator](CircularDoublyLinkedList.md#getforwardvaluesiterator)
- [isEmpty](CircularDoublyLinkedList.md#isempty)
- [moveNodesFromDoublyLinkedListToHead](CircularDoublyLinkedList.md#movenodesfromdoublylinkedlisttohead)
- [moveNodesFromDoublyLinkedListToIndex](CircularDoublyLinkedList.md#movenodesfromdoublylinkedlisttoindex)
- [moveNodesFromDoublyLinkedListToTail](CircularDoublyLinkedList.md#movenodesfromdoublylinkedlisttotail)
- [peekValueAtHead](CircularDoublyLinkedList.md#peekvalueathead)
- [peekValueAtIndex](CircularDoublyLinkedList.md#peekvalueatindex)
- [peekValueAtTail](CircularDoublyLinkedList.md#peekvalueattail)
- [popHeadValue](CircularDoublyLinkedList.md#popheadvalue)
- [popTailValue](CircularDoublyLinkedList.md#poptailvalue)
- [popValueAtIndex](CircularDoublyLinkedList.md#popvalueatindex)
- [popValuesToSubList](CircularDoublyLinkedList.md#popvaluestosublist)
- [pushArrayToHead](CircularDoublyLinkedList.md#pusharraytohead)
- [pushArrayToIndex](CircularDoublyLinkedList.md#pusharraytoindex)
- [pushArrayToTail](CircularDoublyLinkedList.md#pusharraytotail)
- [pushToHead](CircularDoublyLinkedList.md#pushtohead)
- [pushToIndex](CircularDoublyLinkedList.md#pushtoindex)
- [pushToTail](CircularDoublyLinkedList.md#pushtotail)
- [size](CircularDoublyLinkedList.md#size)
- [toArray](CircularDoublyLinkedList.md#toarray)

## Constructors

### constructor

• **new CircularDoublyLinkedList**<`T`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

#### Inherited from

[DoublyLinkedList](DoublyLinkedList.md).[constructor](DoublyLinkedList.md#constructor)

## Properties

### headNode

• `Protected` `Optional` **headNode**: [`IDoublyLinkedListNode`](../interfaces/IDoublyLinkedListNode.md)<`T`\>

#### Inherited from

[DoublyLinkedList](DoublyLinkedList.md).[headNode](DoublyLinkedList.md#headnode)

#### Defined in

[classes/lists/DoublyLinkedList.ts:7](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L7)

___

### numberOfNodes

• `Protected` **numberOfNodes**: `number` = `0`

#### Inherited from

[DoublyLinkedList](DoublyLinkedList.md).[numberOfNodes](DoublyLinkedList.md#numberofnodes)

#### Defined in

[classes/lists/DoublyLinkedList.ts:9](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L9)

___

### tailNode

• `Protected` `Optional` **tailNode**: [`IDoublyLinkedListNode`](../interfaces/IDoublyLinkedListNode.md)<`T`\>

#### Inherited from

[DoublyLinkedList](DoublyLinkedList.md).[tailNode](DoublyLinkedList.md#tailnode)

#### Defined in

[classes/lists/DoublyLinkedList.ts:8](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L8)

## Methods

### clear

▸ **clear**(): `void`

Clears the list such that it contains no nodes

#### Returns

`void`

#### Inherited from

[DoublyLinkedList](DoublyLinkedList.md).[clear](DoublyLinkedList.md#clear)

#### Defined in

[classes/lists/DoublyLinkedList.ts:11](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L11)

___

### contains

▸ **contains**(`value`): `boolean`

Compares the value to each node, and returns if any were found to be equal

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`boolean`

#### Inherited from

[DoublyLinkedList](DoublyLinkedList.md).[contains](DoublyLinkedList.md#contains)

#### Defined in

[classes/lists/DoublyLinkedList.ts:325](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L325)

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

[DoublyLinkedList](DoublyLinkedList.md).[copyLinkedListValuesToHead](DoublyLinkedList.md#copylinkedlistvaluestohead)

#### Defined in

[classes/lists/CircularDoublyLinkedList.ts:6](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/CircularDoublyLinkedList.ts#L6)

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

[DoublyLinkedList](DoublyLinkedList.md).[copyLinkedListValuesToIndex](DoublyLinkedList.md#copylinkedlistvaluestoindex)

#### Defined in

[classes/lists/DoublyLinkedList.ts:53](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L53)

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

[DoublyLinkedList](DoublyLinkedList.md).[copyLinkedListValuesToTail](DoublyLinkedList.md#copylinkedlistvaluestotail)

#### Defined in

[classes/lists/CircularDoublyLinkedList.ts:15](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/CircularDoublyLinkedList.ts#L15)

___

### copyValuesToSubList

▸ **copyValuesToSubList**(`startIndex`, `endIndex`): [`CircularDoublyLinkedList`](CircularDoublyLinkedList.md)<`T`\>

{@inheritdoc IReadonlyLinkedList.copyValuesToSubList}

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |

#### Returns

[`CircularDoublyLinkedList`](CircularDoublyLinkedList.md)<`T`\>

#### Overrides

[DoublyLinkedList](DoublyLinkedList.md).[copyValuesToSubList](DoublyLinkedList.md#copyvaluestosublist)

#### Defined in

[classes/lists/CircularDoublyLinkedList.ts:24](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/CircularDoublyLinkedList.ts#L24)

___

### doCopyValuesToSubList

▸ `Protected` **doCopyValuesToSubList**(`startIndex`, `endIndex`, `subList`): [`DoublyLinkedList`](DoublyLinkedList.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |
| `subList` | [`DoublyLinkedList`](DoublyLinkedList.md)<`T`\> |

#### Returns

[`DoublyLinkedList`](DoublyLinkedList.md)<`T`\>

#### Inherited from

[DoublyLinkedList](DoublyLinkedList.md).[doCopyValuesToSubList](DoublyLinkedList.md#docopyvaluestosublist)

#### Defined in

[classes/lists/DoublyLinkedList.ts:622](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L622)

___

### doPopValuesToSubList

▸ `Protected` **doPopValuesToSubList**(`startIndex`, `endIndex`, `subList`): [`DoublyLinkedList`](DoublyLinkedList.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |
| `subList` | [`DoublyLinkedList`](DoublyLinkedList.md)<`T`\> |

#### Returns

[`DoublyLinkedList`](DoublyLinkedList.md)<`T`\>

#### Inherited from

[DoublyLinkedList](DoublyLinkedList.md).[doPopValuesToSubList](DoublyLinkedList.md#dopopvaluestosublist)

#### Defined in

[classes/lists/DoublyLinkedList.ts:648](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L648)

___

### getBackwardIndexAndNodeTupleIterator

▸ `Protected` **getBackwardIndexAndNodeTupleIterator**(): `IterableFunction`<`LuaTuple`<[`number`, [`IDoublyLinkedListNode`](../interfaces/IDoublyLinkedListNode.md)<`T`\>]\>\>

#### Returns

`IterableFunction`<`LuaTuple`<[`number`, [`IDoublyLinkedListNode`](../interfaces/IDoublyLinkedListNode.md)<`T`\>]\>\>

#### Inherited from

[DoublyLinkedList](DoublyLinkedList.md).[getBackwardIndexAndNodeTupleIterator](DoublyLinkedList.md#getbackwardindexandnodetupleiterator)

#### Defined in

[classes/lists/DoublyLinkedList.ts:725](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L725)

___

### getBackwardIterator

▸ **getBackwardIterator**(): `IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

{@inheritdoc IReadonlyDoublyLinkedList.getBackwardIterator}

**`remarks`** Because this iterator includes an index, it will not loop despite being
a circular list

#### Returns

`IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

#### Overrides

[DoublyLinkedList](DoublyLinkedList.md).[getBackwardIterator](DoublyLinkedList.md#getbackwarditerator)

#### Defined in

[classes/lists/CircularDoublyLinkedList.ts:47](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/CircularDoublyLinkedList.ts#L47)

___

### getBackwardValuesIterator

▸ **getBackwardValuesIterator**(): `IterableFunction`<`T`\>

Gets an iterator to be used in making looping over values in the list possible.
Will just return each value.
Iterator will loop from tail value to head value.

#### Returns

`IterableFunction`<`T`\>

#### Inherited from

[DoublyLinkedList](DoublyLinkedList.md).[getBackwardValuesIterator](DoublyLinkedList.md#getbackwardvaluesiterator)

#### Defined in

[classes/lists/DoublyLinkedList.ts:148](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L148)

___

### getForwardIndexAndNodeTupleIterator

▸ `Protected` **getForwardIndexAndNodeTupleIterator**(): `IterableFunction`<`LuaTuple`<[`number`, [`IDoublyLinkedListNode`](../interfaces/IDoublyLinkedListNode.md)<`T`\>]\>\>

#### Returns

`IterableFunction`<`LuaTuple`<[`number`, [`IDoublyLinkedListNode`](../interfaces/IDoublyLinkedListNode.md)<`T`\>]\>\>

#### Inherited from

[DoublyLinkedList](DoublyLinkedList.md).[getForwardIndexAndNodeTupleIterator](DoublyLinkedList.md#getforwardindexandnodetupleiterator)

#### Defined in

[classes/lists/DoublyLinkedList.ts:707](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L707)

___

### getForwardIterator

▸ **getForwardIterator**(): `IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

{@inheritdoc IReadonlyLinkedList.getForwardIterator}

**`remarks`** Because this iterator includes an index, it will not loop despite being
a circular list

#### Returns

`IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

#### Overrides

[DoublyLinkedList](DoublyLinkedList.md).[getForwardIterator](DoublyLinkedList.md#getforwarditerator)

#### Defined in

[classes/lists/CircularDoublyLinkedList.ts:75](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/CircularDoublyLinkedList.ts#L75)

___

### getForwardValuesIterator

▸ **getForwardValuesIterator**(): `IterableFunction`<`T`\>

Gets an iterator to be used in making looping over values in the list possible.
Will just return each value.
Iterator will loop from head value to tail value.

#### Returns

`IterableFunction`<`T`\>

#### Inherited from

[DoublyLinkedList](DoublyLinkedList.md).[getForwardValuesIterator](DoublyLinkedList.md#getforwardvaluesiterator)

#### Defined in

[classes/lists/DoublyLinkedList.ts:170](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L170)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Gets whether the list is empty (i.e. no head node)

#### Returns

`boolean`

#### Inherited from

[DoublyLinkedList](DoublyLinkedList.md).[isEmpty](DoublyLinkedList.md#isempty)

#### Defined in

[classes/lists/DoublyLinkedList.ts:179](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L179)

___

### moveNodesFromDoublyLinkedListToHead

▸ **moveNodesFromDoublyLinkedListToHead**(`otherDoublyLinkedList`): `void`

Moves the nodes from the input list into this list at the head of this list,
such that the head of the input list is the new head of this list and all other
nodes follow in order and the previous head of this list is attached as the
next node following the tail of the input list and vice versa.
The input list is cleared in the process.

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherDoublyLinkedList` | [`DoublyLinkedList`](DoublyLinkedList.md)<`T`\> |

#### Returns

`void`

#### Overrides

[DoublyLinkedList](DoublyLinkedList.md).[moveNodesFromDoublyLinkedListToHead](DoublyLinkedList.md#movenodesfromdoublylinkedlisttohead)

#### Defined in

[classes/lists/CircularDoublyLinkedList.ts:98](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/CircularDoublyLinkedList.ts#L98)

___

### moveNodesFromDoublyLinkedListToIndex

▸ **moveNodesFromDoublyLinkedListToIndex**(`index`, `otherDoublyLinkedList`): `void`

Moves the nodes from the input list into this list at the given index in this list,
such that the head of the input list is now at the given index of this list and all other
nodes follow in order and the previous node, if any, at the given index of this list is
attached as the next node following the tail of the input list and vice versa.
The input list is cleared in the process.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | - |
| `otherDoublyLinkedList` | [`DoublyLinkedList`](DoublyLinkedList.md)<`T`\> | The input list |

#### Returns

`void`

#### Inherited from

[DoublyLinkedList](DoublyLinkedList.md).[moveNodesFromDoublyLinkedListToIndex](DoublyLinkedList.md#movenodesfromdoublylinkedlisttoindex)

#### Defined in

[classes/lists/DoublyLinkedList.ts:221](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L221)

___

### moveNodesFromDoublyLinkedListToTail

▸ **moveNodesFromDoublyLinkedListToTail**(`otherDoublyLinkedList`): `void`

Moves the nodes from the input list into this list at the tail of this list,
such that the tail of the input list is the new tail of this list and all other
nodes follow in order and the head of the input list is attached as the
next node following the prior tail of this list and vice versa.
The input list is cleared in the process.

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherDoublyLinkedList` | [`DoublyLinkedList`](DoublyLinkedList.md)<`T`\> |

#### Returns

`void`

#### Overrides

[DoublyLinkedList](DoublyLinkedList.md).[moveNodesFromDoublyLinkedListToTail](DoublyLinkedList.md#movenodesfromdoublylinkedlisttotail)

#### Defined in

[classes/lists/CircularDoublyLinkedList.ts:109](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/CircularDoublyLinkedList.ts#L109)

___

### peekValueAtHead

▸ **peekValueAtHead**(): `undefined` \| `T`

Peeks at the value in the head node of the list without modifying the list

#### Returns

`undefined` \| `T`

#### Inherited from

[DoublyLinkedList](DoublyLinkedList.md).[peekValueAtHead](DoublyLinkedList.md#peekvalueathead)

#### Defined in

[classes/lists/DoublyLinkedList.ts:298](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L298)

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

#### Inherited from

[DoublyLinkedList](DoublyLinkedList.md).[peekValueAtIndex](DoublyLinkedList.md#peekvalueatindex)

#### Defined in

[classes/lists/DoublyLinkedList.ts:302](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L302)

___

### peekValueAtTail

▸ **peekValueAtTail**(): `undefined` \| `T`

Peeks at the value in the tail node of the list without modifying the list

#### Returns

`undefined` \| `T`

#### Inherited from

[DoublyLinkedList](DoublyLinkedList.md).[peekValueAtTail](DoublyLinkedList.md#peekvalueattail)

#### Defined in

[classes/lists/DoublyLinkedList.ts:321](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L321)

___

### popHeadValue

▸ **popHeadValue**(): `undefined` \| `T`

Pops the head node off the list and returns the value, if any

#### Returns

`undefined` \| `T`

#### Overrides

[DoublyLinkedList](DoublyLinkedList.md).[popHeadValue](DoublyLinkedList.md#popheadvalue)

#### Defined in

[classes/lists/CircularDoublyLinkedList.ts:120](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/CircularDoublyLinkedList.ts#L120)

___

### popTailValue

▸ **popTailValue**(): `undefined` \| `T`

Pops the tail node off the list and returns the value, if any

#### Returns

`undefined` \| `T`

#### Overrides

[DoublyLinkedList](DoublyLinkedList.md).[popTailValue](DoublyLinkedList.md#poptailvalue)

#### Defined in

[classes/lists/CircularDoublyLinkedList.ts:135](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/CircularDoublyLinkedList.ts#L135)

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

[DoublyLinkedList](DoublyLinkedList.md).[popValueAtIndex](DoublyLinkedList.md#popvalueatindex)

#### Defined in

[classes/lists/DoublyLinkedList.ts:379](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L379)

___

### popValuesToSubList

▸ **popValuesToSubList**(`startIndex`, `endIndex`): [`CircularDoublyLinkedList`](CircularDoublyLinkedList.md)<`T`\>

{@inheritdoc ILinkedList.popValuesToSubList}

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |

#### Returns

[`CircularDoublyLinkedList`](CircularDoublyLinkedList.md)<`T`\>

#### Overrides

[DoublyLinkedList](DoublyLinkedList.md).[popValuesToSubList](DoublyLinkedList.md#popvaluestosublist)

#### Defined in

[classes/lists/CircularDoublyLinkedList.ts:150](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/CircularDoublyLinkedList.ts#L150)

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

[DoublyLinkedList](DoublyLinkedList.md).[pushArrayToHead](DoublyLinkedList.md#pusharraytohead)

#### Defined in

[classes/lists/CircularDoublyLinkedList.ts:168](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/CircularDoublyLinkedList.ts#L168)

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

[DoublyLinkedList](DoublyLinkedList.md).[pushArrayToIndex](DoublyLinkedList.md#pusharraytoindex)

#### Defined in

[classes/lists/DoublyLinkedList.ts:460](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L460)

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

[DoublyLinkedList](DoublyLinkedList.md).[pushArrayToTail](DoublyLinkedList.md#pusharraytotail)

#### Defined in

[classes/lists/CircularDoublyLinkedList.ts:179](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/CircularDoublyLinkedList.ts#L179)

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

[DoublyLinkedList](DoublyLinkedList.md).[pushToHead](DoublyLinkedList.md#pushtohead)

#### Defined in

[classes/lists/CircularDoublyLinkedList.ts:190](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/CircularDoublyLinkedList.ts#L190)

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

[DoublyLinkedList](DoublyLinkedList.md).[pushToIndex](DoublyLinkedList.md#pushtoindex)

#### Defined in

[classes/lists/DoublyLinkedList.ts:550](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L550)

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

[DoublyLinkedList](DoublyLinkedList.md).[pushToTail](DoublyLinkedList.md#pushtotail)

#### Defined in

[classes/lists/CircularDoublyLinkedList.ts:197](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/CircularDoublyLinkedList.ts#L197)

___

### size

▸ **size**(): `number`

Returns the total size of the list

#### Returns

`number`

#### Inherited from

[DoublyLinkedList](DoublyLinkedList.md).[size](DoublyLinkedList.md#size)

#### Defined in

[classes/lists/DoublyLinkedList.ts:608](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/DoublyLinkedList.ts#L608)

___

### toArray

▸ **toArray**(): `T`[]

Iterates over the elements and puts their values into an array in the same order

#### Returns

`T`[]

The array with the same values in the same order

#### Overrides

[DoublyLinkedList](DoublyLinkedList.md).[toArray](DoublyLinkedList.md#toarray)

#### Defined in

[classes/lists/CircularDoublyLinkedList.ts:204](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/master/src/classes/lists/CircularDoublyLinkedList.ts#L204)
