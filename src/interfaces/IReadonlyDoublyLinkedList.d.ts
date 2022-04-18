import { IReadonlyLinkedList } from "./IReadonlyLinkedList";

export interface IReadonlyDoublyLinkedList<T extends defined> extends IReadonlyLinkedList<T> {
	/**
	 * {@inheritdoc IReadonlyLinkedList.copyValuesToSubList}
	 */
	copyValuesToSubList(startIndex: number, endIndex: number): IReadonlyDoublyLinkedList<T>;

	/**
	 * {@inheritdoc IReadonlyLinkedList.filter}
	 */
	filter(
		callback: (value: T, index: number, list: IReadonlyDoublyLinkedList<T>) => boolean | undefined,
	): IReadonlyDoublyLinkedList<T>;

	/**
	 * {@inheritdoc IReadonlyLinkedList.find}
	 */
	find<S extends T>(
		predicate: (value: T, index: number, list: IReadonlyDoublyLinkedList<T>) => value is S,
	): S | undefined;

	/**
	 * {@inheritdoc IReadonlyLinkedList.find}
	 */
	find(
		predicate: (value: T, index: number, list: IReadonlyDoublyLinkedList<T>) => boolean | undefined,
	): T | undefined;

	/**
	 * {@inheritdoc IReadonlyLinkedList.findIndex}
	 */
	findIndex(predicate: (value: T, index: number, list: IReadonlyDoublyLinkedList<T>) => boolean | undefined): number;

	/**
	 * {@inheritdoc IReadonlyLinkedList.forEach}
	 */
	forEach(callback: (value: T, index: number, list: IReadonlyDoublyLinkedList<T>) => void): void;

	/**
	 * Gets an iterator to be used in making looping over values in the list possible.
	 * Will return lua tuples of the 1-based index and the value.
	 * Iterator will loop from tail value to head value.
	 */
	getBackwardIterator(): IterableFunction<LuaTuple<[number, T]>>;

	/**
	 * Gets an iterator to be used in making looping over values in the list possible.
	 * Will just return each value.
	 * Iterator will loop from tail value to head value.
	 */
	getBackwardValuesIterator(): IterableFunction<T>;

	/**
	 * {@inheritdoc IReadonlyLinkedList.map}
	 */
	map<U extends defined>(
		callback: (value: T, index: number, list: IReadonlyDoublyLinkedList<T>) => U,
	): IReadonlyDoublyLinkedList<U>;

	/**
	 * {@inheritdoc IReadonlyLinkedList.reduce}
	 */
	reduce(
		this: ReadonlyArray<defined>,
		callback: (accumulator: T, currentValue: T, currentIndex: number, list: IReadonlyDoublyLinkedList<T>) => T,
	): T;

	/**
	 * {@inheritdoc IReadonlyLinkedList.reduce}
	 */
	reduce<U>(
		this: ReadonlyArray<defined>,
		callback: (accumulator: U, currentValue: T, currentIndex: number, list: IReadonlyDoublyLinkedList<T>) => U,
		initialValue: U,
	): U;

	/**
	 * {@inheritdoc IReadonlyLinkedList.some}
	 */
	some(callback: (value: T, index: number, list: IReadonlyDoublyLinkedList<T>) => boolean | undefined): boolean;
}
