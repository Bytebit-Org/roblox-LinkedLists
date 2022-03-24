import { ILinkedList } from "interfaces/ILinkedList";
import { IReadonlySinglyLinkedList } from "interfaces/IReadonlySinglyLinkedList";

export interface ISinglyLinkedList<T extends defined> extends IReadonlySinglyLinkedList<T>, ILinkedList<T> {
	/**
	 * {@inheritdoc IReadonlyLinkedList.copyValuesToSubList}
	 */
	copyValuesToSubList(startIndex: number, endIndex: number): ISinglyLinkedList<T>;

	/**
	 * {@inheritdoc ILinkedList.popValuesToSubList}
	 */
	popValuesToSubList(startIndex: number, endIndex: number): ISinglyLinkedList<T>;
}
