import { NodeValue } from "types/NodeValue";
import { ILinkedList } from "interfaces/ILinkedList";
import { IReadonlyLinkedList } from "interfaces/IReadonlyLinkedList";

export interface ISinglyLinkedList<T extends NodeValue> extends IReadonlyLinkedList<T>, ILinkedList<T> {}
