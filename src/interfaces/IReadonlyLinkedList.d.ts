import { NodeValue } from "types/NodeValue";

/**
 * Defines the readonly operations available on all linked lists
 */
export interface IReadonlyLinkedList<T extends NodeValue> {
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
	 * Gets the value at the head of the list, if any
	 */
	getHeadValue(): T | undefined;

	/**
	 * Gets the value at the tail of the list, if any
	 */
	getTailValue(): T | undefined;

	/**
	 * Gets whether the list is empty (i.e. no head node)
	 */
	isEmpty(): boolean;

	/**
	 * Checks whether the list is at as long as the minLength provided by performing a
	 * linear iteration of the nodes up to the minLength or returning false if not able
	 * to do so.
	 * @param minLength The minimum length the list needs to be in order to return true
	 * @throws Throws if the given minLength is non-positive
	 */
	isLengthGreaterThanOrEqualTo(minLength: number): boolean;

	/**
	 * Peeks at the value from the given index without moving nodes around
	 * @param index The index of the node to peek at and return the value from
	 * @throws Throws if the index is outside the range of the list's length
	 */
	peekValueAtIndex(index: number): T;

	/**
	 * Performs a linear iteration of the nodes to compute the total size of the list
	 */
	size(): number;
}
