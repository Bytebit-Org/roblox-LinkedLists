import { IReadonlyLinkedList } from "interfaces/IReadonlyLinkedList";

export interface IReadonlyDoublyLinkedList<T extends defined> extends IReadonlyLinkedList<T> {
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
}
