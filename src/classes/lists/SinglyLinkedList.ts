import { SinglyLinkedListNode } from "classes/nodes/SinglyLinkedListNode";
import { ISinglyLinkedList } from "interfaces/ISinglyLinkedList";
import { IReadonlyLinkedList } from "interfaces/IReadonlyLinkedList";
import { ISinglyLinkedListNode } from "interfaces/ISinglyLinkedListNode";
import { NodeValue } from "types/NodeValue";

export class SinglyLinkedList<T extends NodeValue> implements ISinglyLinkedList<T> {
	private headNode?: ISinglyLinkedListNode<T>;
	private tailNode?: ISinglyLinkedListNode<T>;

	public clear() {
		this.headNode = undefined;
		this.tailNode = undefined;
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
	}

	public getForwardIterator() {
		const iterateNodes = this.getForwardNodeIterator();

		return (() => {
			const [index, nextNode] = iterateNodes();
			return nextNode?.value !== undefined ? [index, nextNode.value] : undefined;
		}) as IterableFunction<LuaTuple<[number, T]>>;
	}

	public getForwardValuesIterator() {
		const iterateNodes = this.getForwardNodeIterator();

		return (() => {
			const [_, nextNode] = iterateNodes();
			return nextNode?.value;
		}) as IterableFunction<T>;
	}

	public getHeadValue() {
		return this.headNode?.value;
	}

	public getTailValue() {
		return this.tailNode?.value;
	}

	public isEmpty() {
		return this.headNode === undefined;
	}

	public isLengthGreaterThanOrEqualTo(minLength: number) {
		if (minLength <= 0) {
			throw `Invalid input to isLengthGreaterThanOrEqualTo: ${minLength}`;
		}

		let numberOfNodesSeen = 0;

		for (const _ of this.getForwardNodeIterator()) {
			numberOfNodesSeen++;
			if (numberOfNodesSeen === minLength) {
				return true;
			}
		}

		return false;
	}

	public peekValueAtIndex(index: number) {
		if (index <= 1) {
			throw `Index was less than 0`;
		}

		let numberOfNodesSeen = 0;
		for (const [currentIndex, currentNode] of this.getForwardNodeIterator()) {
			numberOfNodesSeen++;

			if (currentIndex === index) {
				return currentNode.value;
			}
		}

		throw `Index ${index} was out of range of list with ${numberOfNodesSeen} elements`;
	}

	public popHeadValue() {
		if (this.headNode === undefined) {
			return undefined;
		}

		const oldHeadNode = this.headNode;
		const headValue = oldHeadNode.value;

		this.headNode = oldHeadNode.nextNode;

		if (oldHeadNode.nextNode === undefined) {
			this.tailNode = undefined;
		}

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
			this.headNode = undefined;
			return;
		}

		// set tail node to the last node still in here by
		// iterating and setting tail node at each step
		for (const [_, node] of this.getForwardNodeIterator()) {
			this.tailNode = node;
		}

		return tailValue;
	}

	public popValueAtIndex(index: number) {
		if (index <= 1) {
			throw `Provided index, ${index}, is less than 0`;
		}

		let numberOfNodesSeen = 0;
		let previousNode: SinglyLinkedListNode<T> | undefined;
		for (const [currentIndex, currentNode] of this.getForwardNodeIterator()) {
			numberOfNodesSeen++;

			if (currentIndex === index) {
				const value = currentNode.value;

				if (previousNode === undefined) {
					// index must have been 1, which is the same as popping the head node
					this.headNode = currentNode.nextNode;
				} else {
					previousNode.nextNode = currentNode.nextNode;
				}

				if (currentNode.nextNode === undefined) {
					// currentNode was the tail node
					this.tailNode = previousNode;
				}

				return value;
			} else {
				previousNode = currentNode;
			}
		}

		throw `Provided index, ${index}, is out of range of list with ${numberOfNodesSeen} elements`;
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
	}

	public pushToHead(value: T) {
		const newNode = new SinglyLinkedListNode(value);
		newNode.nextNode = this.headNode;
		this.headNode = newNode;

		if (this.tailNode === undefined) {
			this.tailNode = newNode;
		}
	}

	public pushToIndex(index: number, value: T) {
		if (index <= 1) {
			throw `Index was less than 0`;
		}

		if (index === 1) {
			// just the same as pushing to head
			this.pushToHead(value);
		}

		let numberOfNodesSeen = 0;
		let previousNode = this.headNode!; // at this point we know this isn't pushing to be the head node
		for (const [currentIndex, currentNode] of this.getForwardNodeIterator()) {
			if (currentIndex === index) {
				const newNode = new SinglyLinkedListNode(value);
				previousNode.nextNode = newNode;
				newNode.nextNode = currentNode;
			} else {
				previousNode = currentNode;
				numberOfNodesSeen++;
			}
		}

		if (index > numberOfNodesSeen + 1) {
			throw `Provided index, ${index}, is out of range of list with ${numberOfNodesSeen} elements`;
		}

		// this is just the same as pushing to tail
		this.pushToTail(value);
	}

	public pushToTail(value: T) {
		const newNode = new SinglyLinkedListNode(value);

		if (this.tailNode === undefined) {
			this.headNode = newNode;
		} else {
			this.tailNode.nextNode = newNode;
		}

		this.tailNode = newNode;
	}

	public size() {
		let numberOfNodesSeen = 0;

		for (const _ of this.getForwardNodeIterator()) {
			numberOfNodesSeen++;
		}

		return numberOfNodesSeen;
	}

	private getForwardNodeIterator(): IterableFunction<LuaTuple<[number, ISinglyLinkedListNode<T>]>> {
		let currentNode = this.headNode;
		let currentIndex = 1;

		return (() => {
			const node = currentNode;
			const index = currentIndex;

			if (node === undefined) {
				return undefined;
			} else {
				currentNode = node.nextNode;
				currentIndex++;
			}

			return [index, node] as LuaTuple<[number, ISinglyLinkedListNode<T>]>;
		}) as IterableFunction<LuaTuple<[number, ISinglyLinkedListNode<T>]>>;
	}
}
