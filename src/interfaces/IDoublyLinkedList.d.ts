import { ILinkedList } from "./ILinkedList";
import { IReadonlyDoublyLinkedList } from "./IReadonlyDoublyLinkedList";

export interface IDoublyLinkedList<T extends defined> extends ILinkedList<T>, IReadonlyDoublyLinkedList<T> {
	/**
	 * {@inheritdoc IReadonlyLinkedList.copyValuesToSubList}
	 */
	copyValuesToSubList(startIndex: number, endIndex: number): IDoublyLinkedList<T>;

	/**
	 * {@inheritdoc IReadonlyLinkedList.filter}
	 */
	filter(
		callback: (value: T, index: number, list: IDoublyLinkedList<T>) => boolean | undefined,
	): IDoublyLinkedList<T>;

	/**
	 * {@inheritdoc IReadonlyLinkedList.find}
	 */
	find<S extends T>(predicate: (value: T, index: number, list: IDoublyLinkedList<T>) => value is S): S | undefined;

	/**
	 * {@inheritdoc IReadonlyLinkedList.find}
	 */
	find(predicate: (value: T, index: number, list: IDoublyLinkedList<T>) => boolean | undefined): T | undefined;

	/**
	 * {@inheritdoc IReadonlyLinkedList.findIndex}
	 */
	findIndex(predicate: (value: T, index: number, list: IDoublyLinkedList<T>) => boolean | undefined): number;

	/**
	 * {@inheritdoc IReadonlyLinkedList.forEach}
	 */
	forEach(callback: (value: T, index: number, list: IDoublyLinkedList<T>) => void): void;

	/**
	 * {@inheritdoc IReadonlyLinkedList.map}
	 */
	map<U extends defined>(
		callback: (value: T, index: number, list: IReadonlyDoublyLinkedList<T>) => U,
	): IDoublyLinkedList<U>;

	/**
	 * {@inheritdoc ILinkedList.popValuesToSubList}
	 */
	popValuesToSubList(startIndex: number, endIndex: number): IDoublyLinkedList<T>;

	/**
	 * {@inheritdoc IReadonlyLinkedList.reduce}
	 */
	reduce(
		this: ReadonlyArray<defined>,
		callback: (accumulator: T, currentValue: T, currentIndex: number, list: IDoublyLinkedList<T>) => T,
	): T;

	/**
	 * {@inheritdoc IReadonlyLinkedList.reduce}
	 */
	reduce<U>(
		this: ReadonlyArray<defined>,
		callback: (accumulator: U, currentValue: T, currentIndex: number, list: IDoublyLinkedList<T>) => U,
		initialValue: U,
	): U;

	/**
	 * {@inheritdoc IReadonlyLinkedList.some}
	 */
	some(callback: (value: T, index: number, list: IDoublyLinkedList<T>) => boolean | undefined): boolean;

	/**
	 * {@inheritdoc ILinkedList.sort}
	 */
	sort(compareFunction?: (a: T, b: T) => boolean): IDoublyLinkedList<T>;
}
