import { ILinkedListNode } from "interfaces/ILinkedListNode";

export interface IReadonlyLinkedListNode<T extends defined> extends Readonly<ILinkedListNode<T>> {}
