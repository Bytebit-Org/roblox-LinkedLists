import { ILinkedListNode } from "./ILinkedListNode";

export interface IDoublyLinkedListNode<T extends defined> extends ILinkedListNode<T> {
	/**
	 * A reference to the next node, or "right" neighbor, from this node
	 */
	nextNode: IDoublyLinkedListNode<T> | undefined;

	/**
	 * A reference to the previous node, or "left" neighbor, from this node
	 */
	previousNode: IDoublyLinkedListNode<T> | undefined;
}
