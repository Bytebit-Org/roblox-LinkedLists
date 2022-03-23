import { NodeValue } from "types/NodeValue";

export interface ILinkedListNode<T extends NodeValue> {
	/**
	 * The value held within this node
	 */
	value: T;
}
