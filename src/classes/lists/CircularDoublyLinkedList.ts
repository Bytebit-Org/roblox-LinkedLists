import { DoublyLinkedListNode } from "classes/nodes/DoublyLinkedListNode";
import { IReadonlyLinkedList } from "interfaces/IReadonlyLinkedList";
import { NodeValue } from "types/NodeValue";
import { DoublyLinkedList } from "classes/lists/DoublyLinkedList";
import { IDoublyLinkedListNode } from "interfaces/IDoublyLinkedListNode";

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

	public isLengthGreaterThanOrEqualTo(minLength: number) {
		if (minLength <= 0) {
			throw `Invalid input to isLengthGreaterThanOrEqualTo: ${minLength}`;
		}

		let numberOfNodesSeen = 0;

		for (const [_, currentNode] of this.getForwardIndexAndNodeTupleIterator()) {
			numberOfNodesSeen++;
			if (numberOfNodesSeen === minLength) {
				return true;
			}

			if (currentNode === this.tailNode) {
				break;
			}
		}

		return false;
	}

	public peekValueAtIndex(index: number) {
		if (index <= 1) {
			throw `Index was less than 0`;
		}

		let numberOfNodesSeen = 0;
		for (const [currentIndex, currentNode] of this.getForwardIndexAndNodeTupleIterator()) {
			numberOfNodesSeen++;

			if (currentIndex === index) {
				return currentNode.value;
			}

			if (currentNode === this.tailNode) {
				break;
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

		this.headNode = this.headNode.nextNode;

		if (oldHeadNode === this.tailNode) {
			// the list only had one element
			this.tailNode = undefined;
		} else {
			this.headNode!.previousNode = undefined;
		}

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

		const oldTailNode = this.tailNode;
		const tailValue = oldTailNode.value;

		this.tailNode = this.tailNode.previousNode;

		if (oldTailNode === this.headNode) {
			// the list only had one element
			this.headNode = undefined;
		} else {
			this.tailNode!.nextNode = undefined;
		}

		if (this.headNode !== undefined && this.tailNode !== undefined) {
			this.tailNode.nextNode = this.headNode;
			this.headNode.previousNode = this.tailNode;
		}

		return tailValue;
	}

	public popValueAtIndex(index: number) {
		if (index <= 1) {
			throw `Provided index, ${index}, is less than 0`;
		}

		let numberOfNodesSeen = 0;
		let previousNode: IDoublyLinkedListNode<T> | undefined;
		for (const [currentIndex, currentNode] of this.getForwardIndexAndNodeTupleIterator()) {
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

				if (this.headNode !== undefined && this.tailNode !== undefined) {
					this.tailNode.nextNode = this.headNode;
					this.headNode.previousNode = this.tailNode;
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

		let mostRecentNode = this.headNode;

		for (const value of valuesArray) {
			const newestNode = new DoublyLinkedListNode(value);

			if (mostRecentNode === undefined) {
				// the list was empty before this
				this.headNode = newestNode;
			} else {
				newestNode.nextNode = mostRecentNode.nextNode;
				newestNode.previousNode = mostRecentNode;
				mostRecentNode.nextNode = newestNode;
			}

			mostRecentNode = newestNode;
		}

		if (this.tailNode === undefined) {
			this.tailNode = mostRecentNode;
		}

		this.tailNode!.nextNode = this.headNode;
		this.headNode!.previousNode = this.tailNode;
	}

	public pushArrayToTail(valuesArray: readonly T[]) {
		if (valuesArray.isEmpty()) {
			return;
		}

		let mostRecentNode = this.tailNode;

		for (const value of valuesArray) {
			const newestNode = new DoublyLinkedListNode(value);

			if (mostRecentNode === undefined) {
				// the list was empty before this
				this.headNode = newestNode;
			} else {
				newestNode.previousNode = mostRecentNode;
				mostRecentNode.nextNode = newestNode;
			}

			mostRecentNode = newestNode;
		}

		this.tailNode = mostRecentNode;

		this.tailNode!.nextNode = this.headNode;
		this.headNode!.previousNode = this.tailNode;
	}

	public pushToHead(value: T) {
		const priorHeadNode = this.headNode;

		const newNode = new DoublyLinkedListNode(value);
		newNode.nextNode = priorHeadNode;
		this.headNode = newNode;

		if (priorHeadNode === undefined) {
			// the list was empty
			this.tailNode = newNode;
		} else {
			priorHeadNode.previousNode = newNode;
		}

		this.tailNode!.nextNode = this.headNode;
		this.headNode.previousNode = this.tailNode;
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
		for (const [currentIndex, currentNode] of this.getForwardIndexAndNodeTupleIterator()) {
			if (currentIndex === index) {
				const newNode = new DoublyLinkedListNode(value);
				previousNode.nextNode = newNode;
				newNode.previousNode = previousNode;
				newNode.nextNode = currentNode;
				currentNode.previousNode = newNode;
				return;
			} else {
				previousNode = currentNode;
				numberOfNodesSeen++;
			}

			if (currentNode === this.tailNode) {
				break;
			}
		}

		if (index > numberOfNodesSeen + 1) {
			throw `Provided index, ${index}, is out of range of list with ${numberOfNodesSeen} elements`;
		}

		// this is just the same as pushing to tail
		this.pushToTail(value);
	}

	public pushToTail(value: T) {
		const priorTailNode = this.headNode;

		const newNode = new DoublyLinkedListNode(value);
		newNode.previousNode = priorTailNode;
		this.tailNode = newNode;

		if (priorTailNode === undefined) {
			// the list was empty
			this.headNode = newNode;
		} else {
			priorTailNode.nextNode = newNode;
		}

		this.tailNode.nextNode = this.headNode;
		this.headNode!.previousNode = this.tailNode;
	}

	public size() {
		let numberOfNodesSeen = 0;

		for (const [_, currentNode] of this.getForwardIndexAndNodeTupleIterator()) {
			numberOfNodesSeen++;

			if (currentNode === this.tailNode) {
				break;
			}
		}

		return numberOfNodesSeen;
	}
}
