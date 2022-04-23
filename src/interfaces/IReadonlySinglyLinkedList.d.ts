import { IReadonlyLinkedList } from "./IReadonlyLinkedList";

export interface IReadonlySinglyLinkedList<T extends defined> extends IReadonlyLinkedList<T> {
	/**
	 * {@inheritdoc IReadonlyLinkedList.copyValuesToSubList}
	 */
	copyValuesToSubList(startIndex: number, endIndex: number): IReadonlySinglyLinkedList<T>;

	/**
	 * {@inheritdoc IReadonlyLinkedList.filter}
	 */
	filter(
		callback: (value: T, index: number, list: IReadonlySinglyLinkedList<T>) => boolean | undefined,
	): IReadonlySinglyLinkedList<T>;

	/**
	 * {@inheritdoc IReadonlyLinkedList.find}
	 */
	find(
		predicate: (value: T, index: number, list: IReadonlySinglyLinkedList<T>) => boolean | undefined,
	): T | undefined;

	/**
	 * {@inheritdoc IReadonlyLinkedList.findIndex}
	 */
	findIndex(predicate: (value: T, index: number, list: IReadonlySinglyLinkedList<T>) => boolean | undefined): number;

	/**
	 * {@inheritdoc IReadonlyLinkedList.forEach}
	 */
	forEach(callback: (value: T, index: number, list: IReadonlySinglyLinkedList<T>) => void): void;

	/**
	 * {@inheritdoc IReadonlyLinkedList.map}
	 */
	map<U extends defined>(
		callback: (value: T, index: number, list: IReadonlySinglyLinkedList<T>) => U,
	): IReadonlySinglyLinkedList<U>;

	/**
	 * {@inheritdoc IReadonlyLinkedList.reduce}
	 */
	reduce<U>(
		callback: (accumulator: U, currentValue: T, currentIndex: number, list: IReadonlySinglyLinkedList<T>) => U,
		initialValue: U,
	): U;

	/**
	 * {@inheritdoc IReadonlyLinkedList.some}
	 */
	some(callback: (value: T, index: number, list: IReadonlySinglyLinkedList<T>) => boolean | undefined): boolean;
}
