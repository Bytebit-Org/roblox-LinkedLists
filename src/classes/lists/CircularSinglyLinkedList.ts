import { SinglyLinkedListNode } from "classes/nodes/SinglyLinkedListNode";
import { IReadonlyLinkedList } from "interfaces/IReadonlyLinkedList";
import { NodeValue } from "types/NodeValue";
import { SinglyLinkedList } from "classes/lists/SinglyLinkedList";
import { ISinglyLinkedListNode } from "interfaces/ISinglyLinkedListNode";

export class CircularSinglyLinkedList<T extends NodeValue> extends SinglyLinkedList<T> {
	public copyLinkedListValuesToHead(valuesList: IReadonlyLinkedList<T>) {
		super.copyLinkedListValuesToHead(valuesList);

		if (this.headNode !== undefined && this.tailNode !== undefined) {
			this.tailNode.nextNode = this.headNode;
		}
	}

	public copyLinkedListValuesToTail(valuesList: IReadonlyLinkedList<T>) {
		super.copyLinkedListValuesToTail(valuesList);

		if (this.headNode !== undefined && this.tailNode !== undefined) {
			this.tailNode.nextNode = this.headNode;
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

		if (oldHeadNode === this.tailNode) {
			// the list only had one element
			this.headNode = undefined;
			this.tailNode = undefined;
		} else {
			this.headNode = oldHeadNode.nextNode;
			this.tailNode!.nextNode = this.headNode;
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
			// the list only had one element
			this.headNode = undefined;
			this.tailNode = undefined;
		} else {
			// set tail node to the last node still in here by
			// iterating and finding which node points to the old tail node
			for (const [_, node] of this.getForwardIndexAndNodeTupleIterator()) {
				if (node.nextNode === oldTailNode) {
					this.tailNode = node;
					break;
				}
			}
			this.tailNode!.nextNode = this.headNode;
		}

		return tailValue;
	}

	public popValueAtIndex(index: number) {
		if (index <= 1) {
			throw `Provided index, ${index}, is less than 0`;
		}

		let numberOfNodesSeen = 0;
		let previousNode: ISinglyLinkedListNode<T> | undefined;
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
				}

				return value;
			} else {
				previousNode = currentNode;
			}

			if (currentNode === this.tailNode) {
				break;
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

		this.tailNode!.nextNode = this.headNode;
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

		this.tailNode!.nextNode = this.headNode;
	}

	public pushToHead(value: T) {
		const newNode = new SinglyLinkedListNode(value);
		newNode.nextNode = this.headNode;
		this.headNode = newNode;

		if (this.tailNode === undefined) {
			this.tailNode = newNode;
		}

		this.tailNode.nextNode = this.headNode;
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
				const newNode = new SinglyLinkedListNode(value);
				previousNode.nextNode = newNode;
				newNode.nextNode = currentNode;
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
		const newNode = new SinglyLinkedListNode(value);

		if (this.tailNode === undefined) {
			this.headNode = newNode;
		} else {
			this.tailNode.nextNode = newNode;
		}

		this.tailNode = newNode;
		this.tailNode.nextNode = this.headNode;
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
