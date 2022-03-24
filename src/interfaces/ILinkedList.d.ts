import { IReadonlyLinkedList } from "interfaces/IReadonlyLinkedList";

/**
 * Defines the operations available on all linked lists
 */
export interface ILinkedList<T extends defined> extends IReadonlyLinkedList<T> {
	/**
	 * Clears the list such that it contains no nodes
	 */
	clear(): void;

	/**
	 * Pushes a new set of nodes to the head of this list with the given values,
	 * with the first value in the input list being placed as the value at the
	 * head of this list
	 * @param valuesList The list of values to put into new nodes in this list
	 */
	copyLinkedListValuesToHead(valuesList: IReadonlyLinkedList<T>): void;

	/**
	 * Pushes a new set of nodes into the list with the given values,
	 * with the first value in the input list going in as the node at the given index
	 * @param index The index of where to push the new values into the list
	 * @param valuesList The list of values to put into new nodes in this list
	 * @throws Throws if the index is outside the range of the list's length
	 */
	copyLinkedListValuesToIndex(index: number, valuesList: IReadonlyLinkedList<T>): void;

	/**
	 * Pushes a new set of nodes to the tail of this list with the given values,
	 * with the last value in the input list being placed as the value at the
	 * tail of this list
	 * @param valuesList The list of values to put into new nodes in this list
	 */
	copyLinkedListValuesToTail(valuesList: IReadonlyLinkedList<T>): void;

	/**
	 * {@inheritdoc IReadonlyLinkedList.copyValuesToSubList}
	 */
	copyValuesToSubList(startIndex: number, endIndex: number): ILinkedList<T>;

	/**
	 * Pops the head node off the list and returns the value, if any
	 */
	popHeadValue(): T | undefined;

	/**
	 * Pops the tail node off the list and returns the value, if any
	 */
	popTailValue(): T | undefined;

	/**
	 * Pops the value from the given index
	 * @param index The index of the node to pop and return the value from
	 * @throws Throws if the index is outside the range of the list's length
	 */
	popValueAtIndex(index: number): T;

	/**
	 * Pops the values from the given bounds into a sublist of the same type
	 * @param startIndex An inclusive index to start the sub list
	 * @param endIndex An inclusive index to end the sub list
	 * @throws Throws if either index is out of bounds for the list or if startIndex > endIndex
	 */
	popValuesToSubList(startIndex: number, endIndex: number): ILinkedList<T>;

	/**
	 * Pushes a new set of nodes to the head of the list with the given values,
	 * with the first value in the array being placed as the value at the head of the list
	 * @param valuesArray The array of values to put into nodes in the list
	 */
	pushArrayToHead(valuesArray: ReadonlyArray<T>): void;

	/**
	 * Pushes a new set of nodes into the list with the given values,
	 * with the first value in the array going in as the node at the given index
	 * @param index The index of where to push the new values into the list
	 * @param valuesArray The array of values to put into nodes in the list
	 * @throws Throws if the index is outside the range of the list's length
	 */
	pushArrayToIndex(index: number, valuesArray: ReadonlyArray<T>): void;

	/**
	 * Pushes a new set of nodes to the tail of the list with the given values,
	 * with the last value in the array being placed as the value at the tail of the list
	 * @param valuesArray The array of values to put into nodes in the list
	 */
	pushArrayToTail(valuesArray: ReadonlyArray<T>): void;

	/**
	 * Pushes a new node to the head of the list with the given value
	 * @param value The value to put into a node in the list
	 */
	pushToHead(value: T): void;

	/**
	 * Pushes a new node to the specified index in the list, shifting all nodes from that
	 * index and up over - thereby incrementing each of their indexes by one.
	 * @param index The index of where to push the new value into the list
	 * @param value The value to put into a node in the list
	 * @throws Throws if the index is outside the range of this list's length + 1
	 */
	pushToIndex(index: number, value: T): void;

	/**
	 * Pushes a new node to the tail of the list with the given value
	 * @param value The value to put into a node in the list
	 */
	pushToTail(value: T): void;
}
