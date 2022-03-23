import { NodeValue } from "types/NodeValue";
import { ILinkedList } from "interfaces/ILinkedList";
import { IReadonlyDoublyLinkedList } from "interfaces/IReadonlyDoublyLinkedList";

export interface IDoublyLinkedList<T extends NodeValue> extends IReadonlyDoublyLinkedList<T>, ILinkedList<T> {}
