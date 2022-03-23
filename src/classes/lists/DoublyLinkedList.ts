import { DoublyLinkedListNode } from "classes/nodes/DoublyLinkedListNode";
import { IDoublyLinkedList } from "interfaces/IDoublyLinkedList";
import { IReadonlyLinkedList } from "interfaces/IReadonlyLinkedList";
import { IDoublyLinkedListNode } from "interfaces/IDoublyLinkedListNode";
import { NodeValue } from "types/NodeValue";

export class DoublyLinkedList<T extends NodeValue> implements IDoublyLinkedList<T> {
	protected headNode?: IDoublyLinkedListNode<T>;
	protected tailNode?: IDoublyLinkedListNode<T>;

	public clear() {
		this.headNode = undefined;
		this.tailNode = undefined;
	}

	public copyLinkedListValuesToHead(valuesList: IReadonlyLinkedList<T>) {
		if (valuesList.isEmpty()) {
			return;
		}

		const priorHeadNode = this.headNode;

		let mostRecentNode: IDoublyLinkedListNode<T> | undefined;

		for (const value of valuesList.getForwardValuesIterator()) {
			const newestNode = new DoublyLinkedListNode(value);

			if (mostRecentNode === undefined) {
				newestNode.nextNode = priorHeadNode;
				this.headNode = newestNode;
			} else {
				newestNode.nextNode = priorHeadNode;
				newestNode.previousNode = mostRecentNode;
				mostRecentNode.nextNode = newestNode;
			}

			mostRecentNode = newestNode;
		}

		if (priorHeadNode !== undefined) {
			priorHeadNode.previousNode = mostRecentNode;
		}

		if (this.tailNode === undefined) {
			this.tailNode = mostRecentNode;
		}
	}

	public copyLinkedListValuesToTail(valuesList: IReadonlyLinkedList<T>) {
		if (valuesList.isEmpty()) {
			return;
		}

		let mostRecentNode = this.tailNode;

		for (const value of valuesList.getForwardValuesIterator()) {
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
	}

	public getBackwardValuesIterator() {
		const iterateNodes = this.getBackwardNodeIterator();

		return (() => {
			const nextNode = iterateNodes();
			return nextNode?.value;
		}) as IterableFunction<T>;
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

		for (const _ of this.getForwardIndexAndNodeTupleIterator()) {
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
		for (const [currentIndex, currentNode] of this.getForwardIndexAndNodeTupleIterator()) {
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

		this.headNode = this.headNode.nextNode;

		if (oldHeadNode === this.tailNode) {
			// the list only had one element
			this.tailNode = undefined;
		} else {
			this.headNode!.previousNode = undefined;
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
	}

	public size() {
		let numberOfNodesSeen = 0;

		for (const _ of this.getForwardIndexAndNodeTupleIterator()) {
			numberOfNodesSeen++;
		}

		return numberOfNodesSeen;
	}

	protected getForwardIndexAndNodeTupleIterator(): IterableFunction<LuaTuple<[number, IDoublyLinkedListNode<T>]>> {
		let currentNode: IDoublyLinkedListNode<T> | undefined = undefined;
		let currentIndex = 0;

		return (() => {
			const node = currentNode === undefined ? this.headNode : currentNode.nextNode;
			const index = ++currentIndex;

			if (node === undefined) {
				return undefined;
			}

			currentNode = node;

			return [index, node] as LuaTuple<[number, IDoublyLinkedListNode<T>]>;
		}) as IterableFunction<LuaTuple<[number, IDoublyLinkedListNode<T>]>>;
	}

	protected getBackwardNodeIterator(): IterableFunction<IDoublyLinkedListNode<T>> {
		let currentNode: IDoublyLinkedListNode<T> | undefined = undefined;

		return (() => {
			const node = currentNode === undefined ? this.tailNode : currentNode.previousNode;

			if (node === undefined) {
				return undefined;
			}

			currentNode = node;

			return node;
		}) as IterableFunction<IDoublyLinkedListNode<T>>;
	}
}
