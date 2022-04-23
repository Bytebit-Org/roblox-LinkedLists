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
	 * Returns the elements of this list in a new list of the same type
	 * that meet the condition specified in a callback function.
	 * @param callback A function that accepts up to three arguments.
	 * The filter method calls the callback function one
	 * time for each element in this list.
	 */
	filter(
		callback: (value: T, index: number, list: IReadonlyLinkedList<T>) => boolean | undefined,
	): IReadonlyLinkedList<T>;

	/**
	 * Returns the value of the first element in this listwhere predicate is true,
	 * and undefined otherwise.
	 * @param predicate find calls predicate once for each element of this list, in ascending
	 * order, until it finds one where predicate returns true. If such an element is found, find
	 * immediately returns that element value. Otherwise, find returns undefined.
	 */
	find(predicate: (value: T, index: number, list: IReadonlyLinkedList<T>) => boolean | undefined): T | undefined;

	/**
	 * Returns the index of the first element in this that satisfies the provided testing function. Otherwise, it
	 * returns -1, indicating no element passed the test.
	 * @param predicate findIndex calls predicate once for each element of this list, in ascending
	 * order, until it finds one where predicate returns true. If such an element is found, find
	 * immediately returns the index at which it was found. Otherwise, find returns -1.
	 */
	findIndex(predicate: (value: T, index: number, list: IReadonlyLinkedList<T>) => boolean | undefined): number;

	/**
	 * Performs the specified action for each element in this list.
	 * @param callback  A function that accepts up to three arguments. forEach calls the callback function one time for
	 * each element in this list.
	 */
	forEach(callback: (value: T, index: number, list: IReadonlyLinkedList<T>) => void): void;

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
	 * Returns whether this list includes a certain element.
	 * @param searchElement The element to search for.
	 * @param fromIndex The position in this list at which to begin searching for searchElement.
	 */
	includes(searchElement: T, fromIndex?: number): boolean;

	/**
	 * Returns the index of the first occurrence of a value in this list, else returns -1.
	 * @param searchElement The value to locate in this list.
	 * @param fromIndex The list index at which to begin the search. If fromIndex is omitted, the search starts at
	 * index 1.
	 */
	indexOf(searchElement: T, fromIndex?: number): number;

	/**
	 * Gets whether the list is empty (i.e. no head node)
	 */
	isEmpty(): boolean;

	/**
	 * Calls a defined callback function on each element of this list, and returns a new list of the same type that contains the results.
	 * @param callback A function that accepts up to three arguments. The map method calls the callback function one
	 * time for each element in this list.
	 */
	map<U extends defined>(
		callback: (value: T, index: number, list: IReadonlyLinkedList<T>) => U,
	): IReadonlyLinkedList<U>;

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
	 * Calls the specified callback function for all the elements in this list. The return value of the callback function
	 * is the accumulated result, and is provided as an argument in the next call to the callback function.
	 * @param callback A function that accepts up to four arguments. The reduce method calls the callback function one
	 * time for each element in this list.
	 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The
	 * first call to the callback function provides this value as an argument instead of this list value.
	 */
	reduce<U>(
		callback: (accumulator: U, currentValue: T, currentIndex: number, list: IReadonlyLinkedList<T>) => U,
		initialValue: U,
	): U;

	/**
	 * Returns the total size of the list
	 */
	size(): number;

	/**
	 * Returns whether the specified callback function returns true for any element of this list.
	 * Returns false for empty lists.
	 * @param callback A function that accepts up to three arguments. The some method calls the callback function for
	 * each element in this list until the callback returns true, or until the end of this list.
	 */
	some(callback: (value: T, index: number, list: IReadonlyLinkedList<T>) => boolean | undefined): boolean;

	/**
	 * Iterates over the elements and puts their values into an array in the same order
	 * @returns The array with the same values in the same order
	 */
	toArray(): Array<T>;
}
