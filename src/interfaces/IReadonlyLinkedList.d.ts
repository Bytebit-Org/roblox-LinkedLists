/**
 * Defines the readonly operations available on all linked lists
 */
export interface IReadonlyLinkedList<T extends defined> {
	/**
	 * Copies the values from the given bounds into a sublist of the same type
	 * @param startIndex An inclusive index to start the sub list
	 * @param endIndex An inclusive index to end the sub list
	 * @throws Throws if either index is out of bounds for the list or if startIndex > endIndex
	 */
	copyValuesToSubList(startIndex: number, endIndex: number): IReadonlyLinkedList<T>;

	/**
	 * Gets an iterator to be used in making looping over values in the list possible.
	 * Will return lua tuples of the 1-based index and the value.
	 * Iterator will loop from head value to tail value.
	 */
	getForwardIterator(): IterableFunction<LuaTuple<[number, T]>>;

	/**
	 * Gets an iterator to be used in making looping over values in the list possible.
	 * Will just return each value.
	 * Iterator will loop from head value to tail value.
	 */
	getForwardValuesIterator(): IterableFunction<T>;

	/**
	 * Gets whether the list is empty (i.e. no head node)
	 */
	isEmpty(): boolean;

	/**
	 * Peeks at the value in the head node of the list without modifying the list
	 */
	peekValueAtHead(): T | undefined;

	/**
	 * Peeks at the value from the given index without moving nodes around
	 * @param index The index of the node to peek at and return the value from
	 * @throws Throws if the index is outside the range of the list's length
	 */
	peekValueAtIndex(index: number): T;

	/**
	 * Peeks at the value in the tail node of the list without modifying the list
	 */
	peekValueAtTail(): T | undefined;

	/**
	 * Returns the total size of the list
	 */
	size(): number;

	/**
	 * Iterates over the elements and puts their values into an array in the same order
	 * @returns The array with the same values in the same order
	 */
	toArray(): Array<T>;
}
