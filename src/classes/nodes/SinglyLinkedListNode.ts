import { ISinglyLinkedListNode } from "interfaces/ISinglyLinkedListNode";

export class SinglyLinkedListNode<T extends defined> implements ISinglyLinkedListNode<T> {
	public nextNode: SinglyLinkedListNode<T> | undefined;

	public constructor(public value: T, nextNode?: SinglyLinkedListNode<T>) {
		this.nextNode = nextNode;
	}
}
