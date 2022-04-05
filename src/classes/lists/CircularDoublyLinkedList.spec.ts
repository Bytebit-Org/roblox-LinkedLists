/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/// <reference types="@rbxts/testez/globals" />

import { CircularDoublyLinkedList } from "./CircularDoublyLinkedList";
import { runCircularLinkedListTests } from "./reusable-tests/CircularLinkedListTests";
import { runDoublyLinkedListTests } from "./reusable-tests/DoublyLinkedListTests";
import { runUniversalLinkedListTests } from "./reusable-tests/UniversalLinkedListTests";

const createList = <T extends defined>() => new CircularDoublyLinkedList<T>();

export = () => {
	runCircularLinkedListTests(createList, describe, it, expect);
	runUniversalLinkedListTests(createList, describe, it, expect);
	runDoublyLinkedListTests(createList, describe, it, expect);

	describe("getBackwardIterator", () => {
		it("getBackwardIterator - should return nil for both tuple values on the first call for an empty list", () => {
			const emptyList = createList();
			const backwardIterator = emptyList.getBackwardIterator();
			const [index, value] = backwardIterator();
			expect(index).to.never.be.ok();
			expect(value).to.never.be.ok();
		});

		it("getBackwardIterator - should return exactly as many tuples as there are items in the list", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			let numberOfItemsFromIterator = 0;
			for (const _ of list.getBackwardIterator()) {
				numberOfItemsFromIterator++;
			}

			expect(numberOfItemsFromIterator).to.equal(arrayInput.size());
		});

		it("getBackwardIterator - should return tuples in order as the items were expected", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			let expectedIndex = arrayInput.size();
			for (const [index, value] of list.getBackwardIterator()) {
				expect(index).to.equal(expectedIndex--);
				expect(value).to.equal(arrayInput[index - 1]);
			}
		});

		it("getBackwardIterator - should return the new first value in the tuple when a value is pushed to head", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			const [_0, firstIteratorFirstValue] = list.getBackwardIterator()();
			expect(firstIteratorFirstValue).to.equal(arrayInput[2]);

			const newTailValue = {};
			list.pushToTail(newTailValue);

			const [_1, secondIteratorFirstValue] = list.getBackwardIterator()();
			expect(secondIteratorFirstValue).to.equal(newTailValue);
		});

		it("getBackwardIterator - should continue without skipping over tuples if the current node is deleted while being iterated over", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			for (const [index, value] of list.getBackwardIterator()) {
				expect(value).to.equal(arrayInput[index - 1]);
				list.popTailValue();
			}
		});

		it("getBackwardIterator - should skip over tuples if they are deleted while iterating", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			let numberOfItemsFromIterator = 0;
			for (const [index, value] of list.getBackwardIterator()) {
				numberOfItemsFromIterator++;

				if (index === arrayInput.size()) {
					expect(value).to.equal(arrayInput[2]);
					list.popValueAtIndex(2);
				} else {
					expect(value).to.equal(arrayInput[0]);
				}
			}

			expect(numberOfItemsFromIterator).to.equal(arrayInput.size() - 1);
		});
	});

	describe("getBackwardValuesIterator", () => {
		it("getBackwardValuesIterator - should return nil on the first call for an empty list", () => {
			const emptyList = createList();
			const backwardIterator = emptyList.getBackwardValuesIterator();
			const value = backwardIterator();
			expect(value).to.never.be.ok();
		});

		it("getBackwardValuesIterator - should repeat over values infinitely but continue in order", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			let numberOfItemsFromIterator = 0;
			for (const value of list.getBackwardValuesIterator()) {
				const index = arrayInput.size() - (numberOfItemsFromIterator++ % arrayInput.size()) - 1;
				expect(value).to.equal(arrayInput[index]);

				if (numberOfItemsFromIterator === arrayInput.size() * 11) {
					break;
				}
			}

			expect(numberOfItemsFromIterator).to.equal(arrayInput.size() * 11);
		});

		it("getBackwardValuesIterator - should return the new first value when a value is pushed to head", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			const firstIteratorFirstValue = list.getBackwardValuesIterator()();
			expect(firstIteratorFirstValue).to.equal(arrayInput[2]);

			const newTailValue = {};
			list.pushToTail(newTailValue);

			const secondIteratorFirstValue = list.getBackwardValuesIterator()();
			expect(secondIteratorFirstValue).to.equal(newTailValue);
		});

		it("getBackwardValuesIterator - should continue without skipping over values if the current node is deleted while being iterated over", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			let index = arrayInput.size() - 1;
			for (const value of list.getBackwardValuesIterator()) {
				expect(value).to.equal(arrayInput[index--]);
				list.popTailValue();

				if (value === arrayInput[0]) {
					// because otherwise we'd loop forever
					break;
				}
			}
		});

		it("getBackwardValuesIterator - should skip over values if they are deleted while iterating", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			let numberOfItemsFromIterator = 0;
			for (const value of list.getBackwardValuesIterator()) {
				if (numberOfItemsFromIterator++ === 0) {
					expect(value).to.equal(arrayInput[2]);
					list.popValueAtIndex(2);
				} else {
					expect(value).to.equal(arrayInput[0]);

					// because otherwise we'd loop forever
					break;
				}
			}

			expect(numberOfItemsFromIterator).to.equal(arrayInput.size() - 1);
		});
	});
};
