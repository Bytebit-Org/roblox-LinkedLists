import { ILinkedList } from "interfaces/ILinkedList";
import { IReadonlyLinkedList } from "interfaces/IReadonlyLinkedList";

export interface ISinglyLinkedList<T extends defined> extends IReadonlyLinkedList<T>, ILinkedList<T> {}
