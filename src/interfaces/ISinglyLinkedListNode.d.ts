import { ILinkedListNode } from "interfaces/ILinkedListNode";

export interface ISinglyLinkedListNode<T extends defined> extends ILinkedListNode<T> {
	/**
	 * A reference to the next node, or "right" neighbor, from this node
	 */
	nextNode: ISinglyLinkedListNode<T> | undefined;
}
