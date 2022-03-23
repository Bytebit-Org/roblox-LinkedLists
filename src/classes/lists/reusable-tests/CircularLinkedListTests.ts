import Expectation from "@rbxts/testez/src/Expectation";
import { ILinkedList } from "interfaces/ILinkedList";

export function runCircularLinkedListTests(
	createList: () => ILinkedList<object>,
	describe: (phrase: string, callback: () => void) => void,
	it: (phrase: string, callback: () => void) => void,
	expect: <T>(value: T) => Expectation<T>,
) {
	describe("getForwardIterator", () => {
		it("should return nil for both tuple values on the first call for an empty list", () => {
			const emptyList = createList();
			const forwardIterator = emptyList.getForwardIterator();
			const [index, value] = forwardIterator();
			expect(index).to.never.be.ok();
			expect(value).to.never.be.ok();
		});

		it("should return exactly as many tuples as there are items in the list", () => {
			const arrayInput = [{}, {}, {}];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			let numberOfItemsFromIterator = 0;
			for (const _ of list.getForwardIterator()) {
				numberOfItemsFromIterator++;
			}

			expect(numberOfItemsFromIterator).to.equal(arrayInput.size());
		});

		it("should return tuples in order as the items were expected", () => {
			const arrayInput = [{}, {}, {}];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			for (const [index, value] of list.getForwardIterator()) {
				expect(value).to.equal(arrayInput[index - 1]);
			}
		});

		it("should return the new first value in the tuple when a value is pushed to head", () => {
			const arrayInput = [{}, {}, {}];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			const [_0, firstIteratorFirstValue] = list.getForwardIterator()();
			expect(firstIteratorFirstValue).to.equal(arrayInput[0]);

			const newHeadValue = {};
			list.pushToHead(newHeadValue);

			const [_1, secondIteratorFirstValue] = list.getForwardIterator()();
			expect(secondIteratorFirstValue).to.equal(newHeadValue);
		});

		it("should continue without skipping over tuples if the current node is deleted while being iterated over", () => {
			const arrayInput = [{}, {}, {}];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			for (const [index, value] of list.getForwardIterator()) {
				expect(value).to.equal(arrayInput[index - 1]);
				list.popHeadValue();
			}
		});

		it("should skip over tuples if they are deleted while iterating", () => {
			const arrayInput = [{}, {}, {}];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			let numberOfItemsFromIterator = 0;
			for (const [index, value] of list.getForwardIterator()) {
				numberOfItemsFromIterator++;

				if (index === 1) {
					expect(value).to.equal(arrayInput[0]);
					list.popValueAtIndex(2);
				} else {
					expect(value).to.equal(arrayInput[2]);
				}
			}

			expect(numberOfItemsFromIterator).to.equal(arrayInput.size() - 1);
		});
	});

	describe("getForwardValuesIterator", () => {
		it("should return nil on the first call for an empty list", () => {
			const emptyList = createList();
			const forwardIterator = emptyList.getForwardValuesIterator();
			const value = forwardIterator();
			expect(value).to.never.be.ok();
		});

		it("should repeat over values infinitely but continue in order", () => {
			const arrayInput = [{}, {}, {}];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			let numberOfItemsFromIterator = 0;
			for (const value of list.getForwardValuesIterator()) {
				const index = numberOfItemsFromIterator++ % arrayInput.size();
				expect(value).to.equal(arrayInput[index]);

				if (numberOfItemsFromIterator === arrayInput.size() * 11) {
					break;
				}
			}

			expect(numberOfItemsFromIterator).to.equal(arrayInput.size() * 11);
		});

		it("should return the new first value when a value is pushed to head", () => {
			const arrayInput = [{}, {}, {}];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			const firstIteratorFirstValue = list.getForwardValuesIterator()();
			expect(firstIteratorFirstValue).to.equal(arrayInput[0]);

			const newHeadValue = {};
			list.pushToHead(newHeadValue);

			const secondIteratorFirstValue = list.getForwardValuesIterator()();
			expect(secondIteratorFirstValue).to.equal(newHeadValue);
		});

		it("should continue without skipping over values if the current node is deleted while being iterated over", () => {
			const arrayInput = [{}, {}, {}];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			let index = 0;
			for (const value of list.getForwardValuesIterator()) {
				expect(value).to.equal(arrayInput[index++]);
				list.popHeadValue();

				if (value === arrayInput[2]) {
					// because otherwise we'd loop forever
					break;
				}
			}
		});

		it("should skip over values if they are deleted while iterating", () => {
			const arrayInput = [{}, {}, {}];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			let numberOfItemsFromIterator = 0;
			for (const value of list.getForwardValuesIterator()) {
				if (numberOfItemsFromIterator++ === 0) {
					expect(value).to.equal(arrayInput[0]);
					list.popValueAtIndex(2);
				} else {
					expect(value).to.equal(arrayInput[2]);

					// because otherwise we'd loop forever
					break;
				}
			}

			expect(numberOfItemsFromIterator).to.equal(arrayInput.size() - 1);
		});
	});
}
