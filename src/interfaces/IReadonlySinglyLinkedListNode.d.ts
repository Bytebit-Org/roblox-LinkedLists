import { IReadonlyLinkedListNode } from "interfaces/IReadonlyLinkedListNode";
import { NodeValue } from "types/NodeValue";

export interface IReadonlySinglyLinkedListNode<T extends NodeValue> extends IReadonlyLinkedListNode<T> {
	readonly nextNode: IReadonlySinglyLinkedListNode<T> | undefined;
}
