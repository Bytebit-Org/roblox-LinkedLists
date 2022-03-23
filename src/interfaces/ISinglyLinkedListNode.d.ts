import { ILinkedListNode } from "interfaces/ILinkedListNode";
import { NodeValue } from "types/NodeValue";

export interface ISinglyLinkedListNode<T extends NodeValue> extends ILinkedListNode<T> {
	/**
	 * A reference to the next node, or "right" neighbor, from this node
	 */
	nextNode: ISinglyLinkedListNode<T> | undefined;
}
