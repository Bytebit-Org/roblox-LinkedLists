import { IReadonlyLinkedListNode } from "interfaces/IReadonlyLinkedListNode";
import { NodeValue } from "types/NodeValue";

export interface IReadonlyDoublyLinkedListNode<T extends NodeValue> extends IReadonlyLinkedListNode<T> {
	nextNode: IReadonlyDoublyLinkedListNode<T> | undefined;
	previousNode: IReadonlyDoublyLinkedListNode<T> | undefined;
}
