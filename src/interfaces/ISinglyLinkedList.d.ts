import { ILinkedList } from "./ILinkedList";
import { IReadonlySinglyLinkedList } from "./IReadonlySinglyLinkedList";

export interface ISinglyLinkedList<T extends defined> extends IReadonlySinglyLinkedList<T>, ILinkedList<T> {
	/**
	 * {@inheritdoc IReadonlyLinkedList.copyValuesToSubList}
	 */
	copyValuesToSubList(startIndex: number, endIndex: number): ISinglyLinkedList<T>;

	/**
	 * {@inheritdoc IReadonlyLinkedList.filter}
	 */
	filter(
		callback: (value: T, index: number, list: ISinglyLinkedList<T>) => boolean | undefined,
	): ISinglyLinkedList<T>;

	/**
	 * {@inheritdoc IReadonlyLinkedList.map}
	 */
	map<U extends defined>(
		callback: (value: T, index: number, list: IReadonlySinglyLinkedList<T>) => U,
	): ISinglyLinkedList<U>;

	/**
	 * {@inheritdoc ILinkedList.popValuesToSubList}
	 */
	popValuesToSubList(startIndex: number, endIndex: number): ISinglyLinkedList<T>;

	/**
	 * {@inheritdoc ILinkedList.sort}
	 */
	sort(compareFunction?: (a: T, b: T) => boolean): this;
}
