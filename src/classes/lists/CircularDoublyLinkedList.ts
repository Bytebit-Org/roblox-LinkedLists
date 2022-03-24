import { IReadonlyLinkedList } from "interfaces/IReadonlyLinkedList";
import { DoublyLinkedList } from "classes/lists/DoublyLinkedList";
import { ILinkedListNode } from "interfaces/ILinkedListNode";

export class CircularDoublyLinkedList<T extends defined> extends DoublyLinkedList<T> {
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

	public copyValuesToSubList(startIndex: number, endIndex: number): CircularDoublyLinkedList<T> {
		const subList = super.popValuesToSubList(startIndex, endIndex) as CircularDoublyLinkedList<T>;

		subList.tailNode!.nextNode = subList.headNode;
		subList.headNode!.previousNode = subList.tailNode;

		return subList;
	}

	/**
	 * {@inheritdoc IReadonlyDoublyLinkedList.getBackwardIterator}
	 * @remarks Because this iterator includes an index, it will not loop despite being
	 * a circular list
	 */
	public getBackwardIterator() {
		const iterateNodes = this.getBackwardIndexAndNodeTupleIterator();

		const visitedNodes = new Set<ILinkedListNode<T>>();

		return (() => {
			const [index, nextNode] = iterateNodes();

			if (nextNode?.value === undefined) {
				return undefined;
			} else {
				if (visitedNodes.has(nextNode)) {
					// clearly made a full loop at this point
					return undefined;
				} else {
					visitedNodes.add(nextNode);
				}

				return [index, nextNode.value] as LuaTuple<[number, T]>;
			}
		}) as IterableFunction<LuaTuple<[number, T]>>;
	}

	/**
	 * {@inheritdoc IReadonlyLinkedList.getForwardIterator}
	 * @remarks Because this iterator includes an index, it will not loop despite being
	 * a circular list
	 */
	public getForwardIterator() {
		const iterateNodes = this.getForwardIndexAndNodeTupleIterator();

		const visitedNodes = new Set<ILinkedListNode<T>>();

		return (() => {
			const [index, nextNode] = iterateNodes();

			if (nextNode?.value === undefined) {
				return undefined;
			} else {
				if (visitedNodes.has(nextNode)) {
					// clearly made a full loop at this point
					return undefined;
				} else {
					visitedNodes.add(nextNode);
				}

				return [index, nextNode.value] as LuaTuple<[number, T]>;
			}
		}) as IterableFunction<LuaTuple<[number, T]>>;
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

	public popValuesToSubList(startIndex: number, endIndex: number): CircularDoublyLinkedList<T> {
		const subList = super.popValuesToSubList(startIndex, endIndex) as CircularDoublyLinkedList<T>;

		subList.tailNode!.nextNode = subList.headNode;
		subList.headNode!.previousNode = subList.tailNode;

		return subList;
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

	public toArray() {
		const array = new Array<T>(this.numberOfNodes);

		for (const [index, node] of this.getForwardIndexAndNodeTupleIterator()) {
			if (index > this.numberOfNodes) {
				// made a full loop
				break;
			}

			array[index - 1] = node.value;
		}

		return array;
	}
}
