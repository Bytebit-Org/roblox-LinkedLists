import { ISinglyLinkedListNode } from "interfaces/ISinglyLinkedListNode";
import { NodeValue } from "types/NodeValue";

export class SinglyLinkedListNode<T extends NodeValue> implements ISinglyLinkedListNode<T> {
	public nextNode: SinglyLinkedListNode<T> | undefined;

	public constructor(public value: T, nextNode?: SinglyLinkedListNode<T>) {
		this.nextNode = nextNode;
	}
}
