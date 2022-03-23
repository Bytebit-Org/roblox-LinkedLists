import { SinglyLinkedListNode } from "classes/nodes/SinglyLinkedListNode";
import { ISinglyLinkedList } from "interfaces/ISinglyLinkedList";
import { IReadonlyLinkedList } from "interfaces/IReadonlyLinkedList";
import { ISinglyLinkedListNode } from "interfaces/ISinglyLinkedListNode";
import { NodeValue } from "types/NodeValue";

export class SinglyLinkedList<T extends NodeValue> implements ISinglyLinkedList<T> {
	protected headNode?: ISinglyLinkedListNode<T>;
	protected tailNode?: ISinglyLinkedListNode<T>;
	protected numberOfNodes = 0;

	public clear() {
		this.headNode = undefined;
		this.tailNode = undefined;
		this.numberOfNodes = 0;
	}

	public copyLinkedListValuesToHead(valuesList: IReadonlyLinkedList<T>) {
		if (valuesList.isEmpty()) {
			return;
		}

		const priorHeadNode = this.headNode;

		let mostRecentNode: ISinglyLinkedListNode<T> | undefined;

		for (const value of valuesList.getForwardValuesIterator()) {
			const newestNode = new SinglyLinkedListNode(value);

			if (mostRecentNode === undefined) {
				newestNode.nextNode = priorHeadNode;
				this.headNode = newestNode;
			} else {
				newestNode.nextNode = priorHeadNode;
				mostRecentNode.nextNode = newestNode;
			}

			mostRecentNode = newestNode;
		}

		if (this.tailNode === undefined) {
			this.tailNode = mostRecentNode;
		}

		this.numberOfNodes += valuesList.size();
	}

	public copyLinkedListValuesToIndex(index: number, valuesList: IReadonlyLinkedList<T>) {
		if (index < 1) {
			throw `Provided index, ${index}, is less than 1`;
		}

		if (index > this.numberOfNodes + 1) {
			throw `Provided index, ${index}, is out of range of list with ${this.numberOfNodes} elements`;
		}

		if (valuesList.isEmpty()) {
			return;
		}

		if (index === 1) {
			// just the same as pushing to head
			this.copyLinkedListValuesToHead(valuesList);
			return;
		}

		if (index === this.numberOfNodes + 1) {
			// just the same as pushing to tail
			this.copyLinkedListValuesToTail(valuesList);
			return;
		}

		let previousNode = this.headNode!; // at this point we know this isn't pushing to be the head node and the list is not empty
		for (const [currentIndex, currentNode] of this.getForwardIndexAndNodeTupleIterator()) {
			if (currentIndex === index) {
				for (const value of valuesList.getForwardValuesIterator()) {
					const newNode = new SinglyLinkedListNode(value);

					previousNode.nextNode = newNode;
					newNode.nextNode = currentNode;

					previousNode = newNode;
				}

				break;
			} else {
				previousNode = currentNode;
			}
		}

		this.numberOfNodes += valuesList.size();
	}

	public copyLinkedListValuesToTail(valuesList: IReadonlyLinkedList<T>) {
		if (valuesList.isEmpty()) {
			return;
		}

		for (const value of valuesList.getForwardValuesIterator()) {
			const newNode = new SinglyLinkedListNode(value);

			if (this.tailNode === undefined) {
				this.headNode = newNode;
			} else {
				this.tailNode.nextNode = newNode;
			}

			this.tailNode = newNode;
		}

		this.numberOfNodes += valuesList.size();
	}

	public getForwardIterator() {
		const iterateNodes = this.getForwardIndexAndNodeTupleIterator();

		return (() => {
			const [index, nextNode] = iterateNodes();
			if (nextNode?.value === undefined) {
				return undefined;
			} else {
				return [index, nextNode.value] as LuaTuple<[number, T]>;
			}
		}) as IterableFunction<LuaTuple<[number, T]>>;
	}

	public getForwardValuesIterator() {
		const iterateNodes = this.getForwardIndexAndNodeTupleIterator();

		return (() => {
			const [_, nextNode] = iterateNodes();
			return nextNode?.value;
		}) as IterableFunction<T>;
	}

	public isEmpty() {
		return this.headNode === undefined;
	}

	/**
	 * Moves the nodes from the input list into this list at the head of this list,
	 * such that the head of the input list is the new head of this list and all other
	 * nodes follow in order and the previous head of this list is attached as the
	 * next node following the tail of the input list.
	 * The input list is cleared in the process.
	 * @param otherSinglyLinkedList The input list
	 */
	public moveNodesFromSinglyLinkedListToHead(otherSinglyLinkedList: SinglyLinkedList<T>) {
		if (otherSinglyLinkedList.isEmpty()) {
			return;
		}

		const priorHeadNode = this.headNode;

		this.headNode = otherSinglyLinkedList.headNode;
		otherSinglyLinkedList.tailNode!.nextNode = priorHeadNode;

		if (this.tailNode === undefined) {
			// this list was empty
			this.tailNode = otherSinglyLinkedList.tailNode;
		}

		this.numberOfNodes += otherSinglyLinkedList.numberOfNodes;

		otherSinglyLinkedList.clear();
	}

	/**
	 * Moves the nodes from the input list into this list at the given index in this list,
	 * such that the head of the input list is now at the given index of this list and all other
	 * nodes follow in order and the previous node, if any, at the given index of this list is
	 * attached as the next node following the tail of the input list.
	 * The input list is cleared in the process.
	 * @param otherSinglyLinkedList The input list
	 */
	public moveNodesFromSinglyLinkedListToIndex(index: number, otherSinglyLinkedList: SinglyLinkedList<T>) {
		if (index < 1) {
			throw `Provided index, ${index}, is less than 1`;
		}

		if (index > this.numberOfNodes + 1) {
			throw `Provided index, ${index}, is out of range of list with ${this.numberOfNodes} elements`;
		}

		if (otherSinglyLinkedList.isEmpty()) {
			return;
		}

		if (index === 1) {
			// same as moving to head
			this.moveNodesFromSinglyLinkedListToHead(otherSinglyLinkedList);
			return;
		}

		if (index === this.numberOfNodes + 1) {
			// same as moving to tail
			this.moveNodesFromSinglyLinkedListToTail(otherSinglyLinkedList);
			return;
		}

		let previousNode = this.headNode!; // at this point we know this isn't pushing to be the head node and the list is not empty
		for (const [currentIndex, currentNode] of this.getForwardIndexAndNodeTupleIterator()) {
			if (currentIndex === index) {
				previousNode.nextNode = otherSinglyLinkedList.headNode;
				otherSinglyLinkedList.tailNode!.nextNode = currentNode;
				break;
			} else {
				previousNode = currentNode;
			}
		}

		this.numberOfNodes += otherSinglyLinkedList.numberOfNodes;

		otherSinglyLinkedList.clear();
	}

	/**
	 * Moves the nodes from the input list into this list at the tail of this list,
	 * such that the tail of the input list is the new tail of this list and all other
	 * nodes follow in order and the head of the input list is attached as the
	 * next node following the prior tail of this list.
	 * The input list is cleared in the process.
	 * @param otherSinglyLinkedList The input list
	 */
	public moveNodesFromSinglyLinkedListToTail(otherSinglyLinkedList: SinglyLinkedList<T>) {
		if (otherSinglyLinkedList.isEmpty()) {
			return;
		}

		const priorTailNode = this.tailNode;

		this.tailNode = otherSinglyLinkedList.tailNode;

		if (priorTailNode !== undefined) {
			priorTailNode.nextNode = otherSinglyLinkedList.headNode;
		} else {
			// this list was empty
			this.headNode = otherSinglyLinkedList.headNode;
		}

		this.numberOfNodes += otherSinglyLinkedList.numberOfNodes;

		otherSinglyLinkedList.clear();
	}

	public peekValueAtHead() {
		return this.headNode?.value;
	}

	public peekValueAtIndex(index: number) {
		if (index < 1) {
			throw `Provided index, ${index}, is less than 1`;
		}

		if (index > this.numberOfNodes) {
			throw `Provided index, ${index}, is out of range of list with ${this.numberOfNodes} elements`;
		}

		for (const [currentIndex, currentNode] of this.getForwardIndexAndNodeTupleIterator()) {
			if (currentIndex === index) {
				return currentNode.value;
			}
		}

		// should never get here
		throw `Somehow failed to find index, ${index}, even though it is in bounds`;
	}

	public peekValueAtTail() {
		return this.tailNode?.value;
	}

	public popHeadValue() {
		if (this.headNode === undefined) {
			return undefined;
		}

		const oldHeadNode = this.headNode;
		const headValue = oldHeadNode.value;

		if (oldHeadNode === this.tailNode) {
			// the list only had one element
			this.tailNode = undefined;
		} else {
			this.headNode = oldHeadNode.nextNode;
		}

		this.numberOfNodes--;

		return headValue;
	}

	public popTailValue() {
		if (this.tailNode === undefined) {
			return undefined;
		}

		const oldTailNode = this.tailNode;
		const tailValue = oldTailNode.value;
		this.tailNode = undefined;

		if (oldTailNode === this.headNode) {
			// the list only had one element
			this.headNode = undefined;
		} else {
			// set tail node to the last node still in here by
			// iterating and setting tail node at each step
			for (const [_, node] of this.getForwardIndexAndNodeTupleIterator()) {
				this.tailNode = node;
			}
		}

		this.numberOfNodes--;

		return tailValue;
	}

	public popValueAtIndex(index: number) {
		if (index < 1) {
			throw `Provided index, ${index}, is less than 0`;
		}

		if (index > this.numberOfNodes) {
			throw `Provided index, ${index}, is out of range of list with ${this.numberOfNodes} elements`;
		}

		if (index === 1) {
			// same as popping the head node
			// we know there has to be a head value, so cast is safe
			return this.popHeadValue() as T;
		}

		if (index === this.numberOfNodes) {
			// same as popping the tail node
			// we know there has to be a tail value, so cast is safe
			return this.popTailValue() as T;
		}

		let previousNode: ISinglyLinkedListNode<T> | undefined;
		for (const [currentIndex, currentNode] of this.getForwardIndexAndNodeTupleIterator()) {
			if (currentIndex === index) {
				const value = currentNode.value;

				previousNode!.nextNode = currentNode.nextNode;
				this.numberOfNodes--;

				return value;
			} else {
				previousNode = currentNode;
			}
		}

		// should never get here
		throw `Somehow failed to find index, ${index}, even though it is in bounds`;
	}

	public pushArrayToHead(valuesArray: readonly T[]) {
		if (valuesArray.isEmpty()) {
			return;
		}

		let mostRecentNode: SinglyLinkedListNode<T> | undefined;

		for (const value of valuesArray) {
			const newestNode = new SinglyLinkedListNode(value);

			if (mostRecentNode === undefined) {
				newestNode.nextNode = this.headNode;
				this.headNode = newestNode;
			} else {
				newestNode.nextNode = mostRecentNode.nextNode;
				mostRecentNode.nextNode = newestNode;
			}

			mostRecentNode = newestNode;
		}

		if (this.tailNode === undefined) {
			this.tailNode = mostRecentNode;
		}

		this.numberOfNodes += valuesArray.size();
	}

	public pushArrayToIndex(index: number, valuesArray: readonly T[]) {
		if (index < 1) {
			throw `Provided index, ${index}, is less than 1`;
		}

		if (index > this.numberOfNodes + 1) {
			throw `Provided index, ${index}, is out of range of list with ${this.numberOfNodes} elements`;
		}

		if (valuesArray.isEmpty()) {
			return;
		}

		if (index === 1) {
			// just the same as pushing to head
			this.pushArrayToHead(valuesArray);
			return;
		}

		if (index === this.numberOfNodes + 1) {
			// just the same as pushing to tail
			this.pushArrayToTail(valuesArray);
			return;
		}

		let previousNode = this.headNode!; // at this point we know this isn't pushing to be the head node and the list is not empty
		for (const [currentIndex, currentNode] of this.getForwardIndexAndNodeTupleIterator()) {
			if (currentIndex === index) {
				for (const value of valuesArray) {
					const newNode = new SinglyLinkedListNode(value);

					previousNode.nextNode = newNode;
					newNode.nextNode = currentNode;

					previousNode = newNode;
				}

				break;
			} else {
				previousNode = currentNode;
			}
		}

		this.numberOfNodes += valuesArray.size();
	}

	public pushArrayToTail(valuesArray: readonly T[]) {
		if (valuesArray.isEmpty()) {
			return;
		}

		for (const value of valuesArray) {
			const newNode = new SinglyLinkedListNode(value);

			if (this.tailNode === undefined) {
				this.headNode = newNode;
			} else {
				this.tailNode.nextNode = newNode;
			}

			this.tailNode = newNode;
		}

		this.numberOfNodes += valuesArray.size();
	}

	public pushToHead(value: T) {
		const newNode = new SinglyLinkedListNode(value);
		newNode.nextNode = this.headNode;
		this.headNode = newNode;

		if (this.tailNode === undefined) {
			this.tailNode = newNode;
		}

		this.numberOfNodes++;
	}

	public pushToIndex(index: number, value: T) {
		if (index < 1) {
			throw `Provided index, ${index}, is less than 1`;
		}

		if (index > this.numberOfNodes + 1) {
			throw `Provided index, ${index}, is out of range of list with ${this.numberOfNodes} elements`;
		}

		if (index === 1) {
			// just the same as pushing to head
			this.pushToHead(value);
			return;
		}

		if (index === this.numberOfNodes + 1) {
			// just the same as pushing to tail
			this.pushToTail(value);
			return;
		}

		let previousNode = this.headNode!; // at this point we know this isn't pushing to be the head node and the list is not empty
		for (const [currentIndex, currentNode] of this.getForwardIndexAndNodeTupleIterator()) {
			if (currentIndex === index) {
				const newNode = new SinglyLinkedListNode(value);
				previousNode.nextNode = newNode;
				newNode.nextNode = currentNode;
				this.numberOfNodes++;

				return;
			} else {
				previousNode = currentNode;
			}
		}

		// should never get here
		throw `Somehow failed to find index, ${index}, even though it is in bounds`;
	}

	public pushToTail(value: T) {
		const newNode = new SinglyLinkedListNode(value);

		if (this.tailNode === undefined) {
			this.headNode = newNode;
		} else {
			this.tailNode.nextNode = newNode;
		}

		this.tailNode = newNode;
		this.numberOfNodes++;
	}

	public size() {
		return this.numberOfNodes;
	}

	protected getForwardIndexAndNodeTupleIterator(): IterableFunction<LuaTuple<[number, ISinglyLinkedListNode<T>]>> {
		let currentNode: ISinglyLinkedListNode<T> | undefined = undefined;
		let currentIndex = 0;

		return (() => {
			const node = currentNode === undefined ? this.headNode : currentNode.nextNode;
			const index = ++currentIndex;

			if (node === undefined) {
				return undefined;
			}

			currentNode = node;

			return [index, node] as LuaTuple<[number, ISinglyLinkedListNode<T>]>;
		}) as IterableFunction<LuaTuple<[number, ISinglyLinkedListNode<T>]>>;
	}
}
