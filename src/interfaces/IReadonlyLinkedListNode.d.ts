import { ILinkedListNode } from "interfaces/ILinkedListNode";
import { NodeValue } from "types/NodeValue";

export interface IReadonlyLinkedListNode<T extends NodeValue> extends Readonly<ILinkedListNode<T>> { }