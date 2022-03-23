import { IReadonlyLinkedList } from "interfaces/IReadonlyLinkedList";
import { NodeValue } from "types/NodeValue";
import { DoublyLinkedList } from "classes/lists/DoublyLinkedList";
import { ILinkedListNode } from "interfaces/ILinkedListNode";

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

	/**
	 * {@inheritdoc IReadonlyDoublyLinkedList.getBackwardIterator}
	 * @remarks Because this iterator includes an index, it will not loop despite being
	 * a circular list
	 */
	public getBackwardIterator() {
		const iterateNodes = this.getBackwardIndexAndNodeTupleIterator();

		let lastTailNodeSeen: ILinkedListNode<T> | undefined;

		return (() => {
			const [index, nextNode] = iterateNodes();
			if (nextNode === this.tailNode) {
				if (nextNode === lastTailNodeSeen) {
					// clearly made a full loop at this point
					return undefined;
				} else {
					// looks like the list has been mutated to have a new tail
					lastTailNodeSeen = nextNode;
				}
			}

			if (nextNode?.value === undefined) {
				return undefined;
			} else {
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

		let lastHeadNodeSeen: ILinkedListNode<T> | undefined;

		return (() => {
			const [index, nextNode] = iterateNodes();
			if (nextNode === this.headNode) {
				if (nextNode === lastHeadNodeSeen) {
					// clearly made a full loop at this point
					return undefined;
				} else {
					// looks like the list has been mutated to have a new head
					lastHeadNodeSeen = nextNode;
				}
			}

			if (nextNode?.value === undefined) {
				return undefined;
			} else {
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
