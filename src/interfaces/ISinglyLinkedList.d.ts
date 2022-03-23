import { ILinkedList } from "interfaces/ILinkedList";
import { IReadonlySinglyLinkedList } from "./IReadonlySinglyLinkedList";

export interface ISinglyLinkedList<T extends defined> extends IReadonlySinglyLinkedList<T>, ILinkedList<T> {
	/**
	 * {@inheritdoc IReadonlyLinkedList.copyValuesToSubList}
	 */
	copyValuesToSubList(startIndex: number, exclusiveEndIndex: number): ISinglyLinkedList<T>;

	/**
	 * {@inheritdoc ILinkedList.popValuesToSubList}
	 */
	popValuesToSubList(startIndex: number, exclusiveEndIndex: number): ISinglyLinkedList<T>;
}
