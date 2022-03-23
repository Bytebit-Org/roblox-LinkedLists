import { IDoublyLinkedListNode } from "interfaces/IDoublyLinkedListNode";

export class DoublyLinkedListNode<T extends defined> implements IDoublyLinkedListNode<T> {
	public nextNode: DoublyLinkedListNode<T> | undefined;
	public previousNode: DoublyLinkedListNode<T> | undefined;

	public constructor(public value: T, previousNode?: DoublyLinkedListNode<T>, nextNode?: DoublyLinkedListNode<T>) {
		this.previousNode = previousNode;
		this.nextNode = nextNode;
	}
}
