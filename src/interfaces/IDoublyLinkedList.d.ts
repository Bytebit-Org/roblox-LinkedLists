import { ILinkedList } from "interfaces/ILinkedList";
import { IReadonlyDoublyLinkedList } from "interfaces/IReadonlyDoublyLinkedList";

export interface IDoublyLinkedList<T extends defined> extends IReadonlyDoublyLinkedList<T>, ILinkedList<T> {}
