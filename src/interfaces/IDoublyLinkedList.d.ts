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
	 * {@inheritdoc ILinkedList.sort}
	 */
	sort(compareFunction?: (a: T, b: T) => boolean): IDoublyLinkedList<T>;
}
