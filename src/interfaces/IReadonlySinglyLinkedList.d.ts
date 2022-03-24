import { IReadonlyLinkedList } from "interfaces/IReadonlyLinkedList";

export interface IReadonlySinglyLinkedList<T extends defined> extends IReadonlyLinkedList<T> {
	/**
	 * {@inheritdoc IReadonlyLinkedList.copyValuesToSubList}
	 */
	copyValuesToSubList(startIndex: number, endIndex: number): IReadonlySinglyLinkedList<T>;
}
