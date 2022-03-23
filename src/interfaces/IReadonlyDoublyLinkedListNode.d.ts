import { IReadonlyLinkedListNode } from "interfaces/IReadonlyLinkedListNode";

export interface IReadonlyDoublyLinkedListNode<T extends defined> extends IReadonlyLinkedListNode<T> {
	nextNode: IReadonlyDoublyLinkedListNode<T> | undefined;
	previousNode: IReadonlyDoublyLinkedListNode<T> | undefined;
}
