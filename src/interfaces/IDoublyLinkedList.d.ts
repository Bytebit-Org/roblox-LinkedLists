import { ILinkedList } from "./ILinkedList";
import { IReadonlyDoublyLinkedList } from "./IReadonlyDoublyLinkedList";

export interface IDoublyLinkedList<T extends defined> extends IReadonlyDoublyLinkedList<T>, ILinkedList<T> {
	/**
	 * {@inheritdoc IReadonlyLinkedList.copyValuesToSubList}
	 */
	copyValuesToSubList(startIndex: number, endIndex: number): IDoublyLinkedList<T>;

	/**
	 * {@inheritdoc ILinkedList.popValuesToSubList}
	 */
	popValuesToSubList(startIndex: number, endIndex: number): IDoublyLinkedList<T>;
}
