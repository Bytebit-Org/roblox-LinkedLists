[@rbxts/linked-lists](../README.md) / DoublyLinkedList

# Class: DoublyLinkedList<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Hierarchy

- **`DoublyLinkedList`**

  ↳ [`CircularDoublyLinkedList`](CircularDoublyLinkedList.md)

## Implements

- [`IDoublyLinkedList`](../interfaces/IDoublyLinkedList.md)<`T`\>

## Table of contents

### Constructors

- [constructor](DoublyLinkedList.md#constructor)

### Properties

- [headNode](DoublyLinkedList.md#headnode)
- [numberOfNodes](DoublyLinkedList.md#numberofnodes)
- [tailNode](DoublyLinkedList.md#tailnode)

### Methods

- [clear](DoublyLinkedList.md#clear)
- [copyLinkedListValuesToHead](DoublyLinkedList.md#copylinkedlistvaluestohead)
- [copyLinkedListValuesToIndex](DoublyLinkedList.md#copylinkedlistvaluestoindex)
- [copyLinkedListValuesToTail](DoublyLinkedList.md#copylinkedlistvaluestotail)
- [copyValuesToSubList](DoublyLinkedList.md#copyvaluestosublist)
- [doCopyValuesToSubList](DoublyLinkedList.md#docopyvaluestosublist)
- [doPopValuesToSubList](DoublyLinkedList.md#dopopvaluestosublist)
- [getBackwardIndexAndNodeTupleIterator](DoublyLinkedList.md#getbackwardindexandnodetupleiterator)
- [getBackwardIterator](DoublyLinkedList.md#getbackwarditerator)
- [getBackwardValuesIterator](DoublyLinkedList.md#getbackwardvaluesiterator)
- [getForwardIndexAndNodeTupleIterator](DoublyLinkedList.md#getforwardindexandnodetupleiterator)
- [getForwardIterator](DoublyLinkedList.md#getforwarditerator)
- [getForwardValuesIterator](DoublyLinkedList.md#getforwardvaluesiterator)
- [isEmpty](DoublyLinkedList.md#isempty)
- [moveNodesFromDoublyLinkedListToHead](DoublyLinkedList.md#movenodesfromdoublylinkedlisttohead)
- [moveNodesFromDoublyLinkedListToIndex](DoublyLinkedList.md#movenodesfromdoublylinkedlisttoindex)
- [moveNodesFromDoublyLinkedListToTail](DoublyLinkedList.md#movenodesfromdoublylinkedlisttotail)
- [peekValueAtHead](DoublyLinkedList.md#peekvalueathead)
- [peekValueAtIndex](DoublyLinkedList.md#peekvalueatindex)
- [peekValueAtTail](DoublyLinkedList.md#peekvalueattail)
- [popHeadValue](DoublyLinkedList.md#popheadvalue)
- [popTailValue](DoublyLinkedList.md#poptailvalue)
- [popValueAtIndex](DoublyLinkedList.md#popvalueatindex)
- [popValuesToSubList](DoublyLinkedList.md#popvaluestosublist)
- [pushArrayToHead](DoublyLinkedList.md#pusharraytohead)
- [pushArrayToIndex](DoublyLinkedList.md#pusharraytoindex)
- [pushArrayToTail](DoublyLinkedList.md#pusharraytotail)
- [pushToHead](DoublyLinkedList.md#pushtohead)
- [pushToIndex](DoublyLinkedList.md#pushtoindex)
- [pushToTail](DoublyLinkedList.md#pushtotail)
- [size](DoublyLinkedList.md#size)
- [toArray](DoublyLinkedList.md#toarray)

## Constructors

### constructor

• **new DoublyLinkedList**<`T`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `defined` |

## Properties

### headNode

• `Protected` `Optional` **headNode**: [`IDoublyLinkedListNode`](../interfaces/IDoublyLinkedListNode.md)<`T`\>

#### Defined in

[classes/lists/DoublyLinkedList.ts:7](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L7)

___

### numberOfNodes

• `Protected` **numberOfNodes**: `number` = `0`

#### Defined in

[classes/lists/DoublyLinkedList.ts:9](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L9)

___

### tailNode

• `Protected` `Optional` **tailNode**: [`IDoublyLinkedListNode`](../interfaces/IDoublyLinkedListNode.md)<`T`\>

#### Defined in

[classes/lists/DoublyLinkedList.ts:8](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L8)

## Methods

### clear

▸ **clear**(): `void`

Clears the list such that it contains no nodes

#### Returns

`void`

#### Implementation of

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[clear](../interfaces/IDoublyLinkedList.md#clear)

#### Defined in

[classes/lists/DoublyLinkedList.ts:11](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L11)

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

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[copyLinkedListValuesToHead](../interfaces/IDoublyLinkedList.md#copylinkedlistvaluestohead)

#### Defined in

[classes/lists/DoublyLinkedList.ts:17](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L17)

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

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[copyLinkedListValuesToIndex](../interfaces/IDoublyLinkedList.md#copylinkedlistvaluestoindex)

#### Defined in

[classes/lists/DoublyLinkedList.ts:53](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L53)

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

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[copyLinkedListValuesToTail](../interfaces/IDoublyLinkedList.md#copylinkedlistvaluestotail)

#### Defined in

[classes/lists/DoublyLinkedList.ts:104](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L104)

___

### copyValuesToSubList

▸ **copyValuesToSubList**(`startIndex`, `endIndex`): [`DoublyLinkedList`](DoublyLinkedList.md)<`T`\>

{@inheritdoc IReadonlyLinkedList.copyValuesToSubList}

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |

#### Returns

[`DoublyLinkedList`](DoublyLinkedList.md)<`T`\>

#### Implementation of

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[copyValuesToSubList](../interfaces/IDoublyLinkedList.md#copyvaluestosublist)

#### Defined in

[classes/lists/DoublyLinkedList.ts:131](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L131)

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

#### Defined in

[classes/lists/DoublyLinkedList.ts:612](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L612)

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

#### Defined in

[classes/lists/DoublyLinkedList.ts:638](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L638)

___

### getBackwardIndexAndNodeTupleIterator

▸ `Protected` **getBackwardIndexAndNodeTupleIterator**(): `IterableFunction`<`LuaTuple`<[`number`, [`IDoublyLinkedListNode`](../interfaces/IDoublyLinkedListNode.md)<`T`\>]\>\>

#### Returns

`IterableFunction`<`LuaTuple`<[`number`, [`IDoublyLinkedListNode`](../interfaces/IDoublyLinkedListNode.md)<`T`\>]\>\>

#### Defined in

[classes/lists/DoublyLinkedList.ts:715](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L715)

___

### getBackwardIterator

▸ **getBackwardIterator**(): `IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

Gets an iterator to be used in making looping over values in the list possible.
Will return lua tuples of the 1-based index and the value.
Iterator will loop from tail value to head value.

#### Returns

`IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

#### Implementation of

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[getBackwardIterator](../interfaces/IDoublyLinkedList.md#getbackwarditerator)

#### Defined in

[classes/lists/DoublyLinkedList.ts:135](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L135)

___

### getBackwardValuesIterator

▸ **getBackwardValuesIterator**(): `IterableFunction`<`T`\>

Gets an iterator to be used in making looping over values in the list possible.
Will just return each value.
Iterator will loop from tail value to head value.

#### Returns

`IterableFunction`<`T`\>

#### Implementation of

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[getBackwardValuesIterator](../interfaces/IDoublyLinkedList.md#getbackwardvaluesiterator)

#### Defined in

[classes/lists/DoublyLinkedList.ts:148](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L148)

___

### getForwardIndexAndNodeTupleIterator

▸ `Protected` **getForwardIndexAndNodeTupleIterator**(): `IterableFunction`<`LuaTuple`<[`number`, [`IDoublyLinkedListNode`](../interfaces/IDoublyLinkedListNode.md)<`T`\>]\>\>

#### Returns

`IterableFunction`<`LuaTuple`<[`number`, [`IDoublyLinkedListNode`](../interfaces/IDoublyLinkedListNode.md)<`T`\>]\>\>

#### Defined in

[classes/lists/DoublyLinkedList.ts:697](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L697)

___

### getForwardIterator

▸ **getForwardIterator**(): `IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

Gets an iterator to be used in making looping over values in the list possible.
Will return lua tuples of the 1-based index and the value.
Iterator will loop from head value to tail value.

#### Returns

`IterableFunction`<`LuaTuple`<[`number`, `T`]\>\>

#### Implementation of

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[getForwardIterator](../interfaces/IDoublyLinkedList.md#getforwarditerator)

#### Defined in

[classes/lists/DoublyLinkedList.ts:157](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L157)

___

### getForwardValuesIterator

▸ **getForwardValuesIterator**(): `IterableFunction`<`T`\>

Gets an iterator to be used in making looping over values in the list possible.
Will just return each value.
Iterator will loop from head value to tail value.

#### Returns

`IterableFunction`<`T`\>

#### Implementation of

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[getForwardValuesIterator](../interfaces/IDoublyLinkedList.md#getforwardvaluesiterator)

#### Defined in

[classes/lists/DoublyLinkedList.ts:170](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L170)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Gets whether the list is empty (i.e. no head node)

#### Returns

`boolean`

#### Implementation of

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[isEmpty](../interfaces/IDoublyLinkedList.md#isempty)

#### Defined in

[classes/lists/DoublyLinkedList.ts:179](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L179)

___

### moveNodesFromDoublyLinkedListToHead

▸ **moveNodesFromDoublyLinkedListToHead**(`otherDoublyLinkedList`): `void`

Moves the nodes from the input list into this list at the head of this list,
such that the head of the input list is the new head of this list and all other
nodes follow in order and the previous head of this list is attached as the
next node following the tail of the input list and vice versa.
The input list is cleared in the process.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherDoublyLinkedList` | [`DoublyLinkedList`](DoublyLinkedList.md)<`T`\> | The input list |

#### Returns

`void`

#### Defined in

[classes/lists/DoublyLinkedList.ts:191](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L191)

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

#### Defined in

[classes/lists/DoublyLinkedList.ts:221](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L221)

___

### moveNodesFromDoublyLinkedListToTail

▸ **moveNodesFromDoublyLinkedListToTail**(`otherDoublyLinkedList`): `void`

Moves the nodes from the input list into this list at the tail of this list,
such that the tail of the input list is the new tail of this list and all other
nodes follow in order and the head of the input list is attached as the
next node following the prior tail of this list and vice versa.
The input list is cleared in the process.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherDoublyLinkedList` | [`DoublyLinkedList`](DoublyLinkedList.md)<`T`\> | The input list |

#### Returns

`void`

#### Defined in

[classes/lists/DoublyLinkedList.ts:276](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L276)

___

### peekValueAtHead

▸ **peekValueAtHead**(): `undefined` \| `T`

Peeks at the value in the head node of the list without modifying the list

#### Returns

`undefined` \| `T`

#### Implementation of

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[peekValueAtHead](../interfaces/IDoublyLinkedList.md#peekvalueathead)

#### Defined in

[classes/lists/DoublyLinkedList.ts:298](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L298)

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

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[peekValueAtIndex](../interfaces/IDoublyLinkedList.md#peekvalueatindex)

#### Defined in

[classes/lists/DoublyLinkedList.ts:302](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L302)

___

### peekValueAtTail

▸ **peekValueAtTail**(): `undefined` \| `T`

Peeks at the value in the tail node of the list without modifying the list

#### Returns

`undefined` \| `T`

#### Implementation of

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[peekValueAtTail](../interfaces/IDoublyLinkedList.md#peekvalueattail)

#### Defined in

[classes/lists/DoublyLinkedList.ts:321](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L321)

___

### popHeadValue

▸ **popHeadValue**(): `undefined` \| `T`

Pops the head node off the list and returns the value, if any

#### Returns

`undefined` \| `T`

#### Implementation of

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[popHeadValue](../interfaces/IDoublyLinkedList.md#popheadvalue)

#### Defined in

[classes/lists/DoublyLinkedList.ts:325](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L325)

___

### popTailValue

▸ **popTailValue**(): `undefined` \| `T`

Pops the tail node off the list and returns the value, if any

#### Returns

`undefined` \| `T`

#### Implementation of

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[popTailValue](../interfaces/IDoublyLinkedList.md#poptailvalue)

#### Defined in

[classes/lists/DoublyLinkedList.ts:347](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L347)

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

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[popValueAtIndex](../interfaces/IDoublyLinkedList.md#popvalueatindex)

#### Defined in

[classes/lists/DoublyLinkedList.ts:369](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L369)

___

### popValuesToSubList

▸ **popValuesToSubList**(`startIndex`, `endIndex`): [`DoublyLinkedList`](DoublyLinkedList.md)<`T`\>

{@inheritdoc ILinkedList.popValuesToSubList}

#### Parameters

| Name | Type |
| :------ | :------ |
| `startIndex` | `number` |
| `endIndex` | `number` |

#### Returns

[`DoublyLinkedList`](DoublyLinkedList.md)<`T`\>

#### Implementation of

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[popValuesToSubList](../interfaces/IDoublyLinkedList.md#popvaluestosublist)

#### Defined in

[classes/lists/DoublyLinkedList.ts:412](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L412)

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

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[pushArrayToHead](../interfaces/IDoublyLinkedList.md#pusharraytohead)

#### Defined in

[classes/lists/DoublyLinkedList.ts:416](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L416)

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

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[pushArrayToIndex](../interfaces/IDoublyLinkedList.md#pusharraytoindex)

#### Defined in

[classes/lists/DoublyLinkedList.ts:450](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L450)

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

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[pushArrayToTail](../interfaces/IDoublyLinkedList.md#pusharraytotail)

#### Defined in

[classes/lists/DoublyLinkedList.ts:501](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L501)

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

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[pushToHead](../interfaces/IDoublyLinkedList.md#pushtohead)

#### Defined in

[classes/lists/DoublyLinkedList.ts:523](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L523)

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

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[pushToIndex](../interfaces/IDoublyLinkedList.md#pushtoindex)

#### Defined in

[classes/lists/DoublyLinkedList.ts:540](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L540)

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

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[pushToTail](../interfaces/IDoublyLinkedList.md#pushtotail)

#### Defined in

[classes/lists/DoublyLinkedList.ts:581](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L581)

___

### size

▸ **size**(): `number`

Returns the total size of the list

#### Returns

`number`

#### Implementation of

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[size](../interfaces/IDoublyLinkedList.md#size)

#### Defined in

[classes/lists/DoublyLinkedList.ts:598](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L598)

___

### toArray

▸ **toArray**(): `T`[]

Iterates over the elements and puts their values into an array in the same order

#### Returns

`T`[]

The array with the same values in the same order

#### Implementation of

[IDoublyLinkedList](../interfaces/IDoublyLinkedList.md).[toArray](../interfaces/IDoublyLinkedList.md#toarray)

#### Defined in

[classes/lists/DoublyLinkedList.ts:602](https://github.com/Bytebit-Org/roblox-LinkedLists/blob/633ec9e/src/classes/lists/DoublyLinkedList.ts#L602)
