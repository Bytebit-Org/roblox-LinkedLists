import { IDoublyLinkedListNode } from "interfaces/IDoublyLinkedListNode";
import { NodeValue } from "types/NodeValue";

export class DoublyLinkedListNode<T extends NodeValue> implements IDoublyLinkedListNode<T> {
	public nextNode: DoublyLinkedListNode<T> | undefined;
	public previousNode: DoublyLinkedListNode<T> | undefined;

	public constructor(public value: T, previousNode?: DoublyLinkedListNode<T>, nextNode?: DoublyLinkedListNode<T>) {
		this.previousNode = previousNode;
		this.nextNode = nextNode;
	}
}
