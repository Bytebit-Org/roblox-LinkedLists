import { IReadonlyLinkedList } from "interfaces/IReadonlyLinkedList";
import { NodeValue } from "types/NodeValue";
import { DoublyLinkedList } from "classes/lists/DoublyLinkedList";

export class CircularDoublyLinkedList<T extends NodeValue> extends DoublyLinkedList<T> {
	public copyLinkedListValuesToHead(valuesList: IReadonlyLinkedList<T>) {
		super.copyLinkedListValuesToHead(valuesList);

		if (this.headNode !== undefined && this.tailNode !== undefined) {
			this.tailNode.nextNode = this.headNode;
			this.headNode.previousNode = this.tailNode;
		}
	}

	public copyLinkedListValuesToTail(valuesList: IReadonlyLinkedList<T>) {
		super.copyLinkedListValuesToTail(valuesList);

		if (this.headNode !== undefined && this.tailNode !== undefined) {
			this.tailNode.nextNode = this.headNode;
			this.headNode.previousNode = this.tailNode;
		}
	}

	public moveNodesFromDoublyLinkedListToHead(otherDoublyLinkedList: DoublyLinkedList<T>) {
		if (otherDoublyLinkedList.isEmpty()) {
			return;
		}

		super.moveNodesFromDoublyLinkedListToHead(otherDoublyLinkedList);

		this.tailNode!.nextNode = this.headNode;
		this.headNode!.previousNode = this.tailNode;
	}

	public moveNodesFromDoublyLinkedListToTail(otherDoublyLinkedList: DoublyLinkedList<T>) {
		if (otherDoublyLinkedList.isEmpty()) {
			return;
		}

		super.moveNodesFromDoublyLinkedListToTail(otherDoublyLinkedList);

		this.tailNode!.nextNode = this.headNode;
		this.headNode!.previousNode = this.tailNode;
	}

	public popHeadValue() {
		if (this.headNode === undefined) {
			return undefined;
		}

		const headValue = super.popHeadValue();

		if (this.headNode !== undefined && this.tailNode !== undefined) {
			this.tailNode.nextNode = this.headNode;
			this.headNode.previousNode = this.tailNode;
		}

		return headValue;
	}

	public popTailValue() {
		if (this.tailNode === undefined) {
			return undefined;
		}

		const tailValue = super.popTailValue();

		if (this.headNode !== undefined && this.tailNode !== undefined) {
			this.tailNode.nextNode = this.headNode;
			this.headNode.previousNode = this.tailNode;
		}

		return tailValue;
	}

	public pushArrayToHead(valuesArray: readonly T[]) {
		if (valuesArray.isEmpty()) {
			return;
		}

		super.pushArrayToHead(valuesArray);

		this.tailNode!.nextNode = this.headNode;
		this.headNode!.previousNode = this.tailNode;
	}

	public pushArrayToTail(valuesArray: readonly T[]) {
		if (valuesArray.isEmpty()) {
			return;
		}

		super.pushArrayToTail(valuesArray);

		this.tailNode!.nextNode = this.headNode;
		this.headNode!.previousNode = this.tailNode;
	}

	public pushToHead(value: T) {
		super.pushToHead(value);

		this.tailNode!.nextNode = this.headNode;
		this.headNode!.previousNode = this.tailNode;
	}

	public pushToTail(value: T) {
		super.pushToTail(value);

		this.tailNode!.nextNode = this.headNode;
		this.headNode!.previousNode = this.tailNode;
	}
}
