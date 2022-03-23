import { ILinkedListNode } from "interfaces/ILinkedListNode";
import { NodeValue } from "types/NodeValue";

export interface IDoublyLinkedListNode<T extends NodeValue> extends ILinkedListNode<T> {
	/**
	 * A reference to the next node, or "right" neighbor, from this node
	 */
	nextNode: IDoublyLinkedListNode<T> | undefined;

	/**
	 * A reference to the previous node, or "left" neighbor, from this node
	 */
	previousNode: IDoublyLinkedListNode<T> | undefined;
}
