import { ILinkedListNode } from "./ILinkedListNode";

export interface IReadonlyLinkedListNode<T extends defined> extends Readonly<ILinkedListNode<T>> {}
