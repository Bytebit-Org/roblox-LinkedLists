import { IReadonlyLinkedListNode } from "interfaces/IReadonlyLinkedListNode";

export interface IReadonlySinglyLinkedListNode<T extends defined> extends IReadonlyLinkedListNode<T> {
	readonly nextNode: IReadonlySinglyLinkedListNode<T> | undefined;
}
