import Expectation from "@rbxts/testez/src/Expectation";
import { SinglyLinkedList } from "../SinglyLinkedList";

export function runSinglyLinkedListTests(
	createList: <T extends defined>() => SinglyLinkedList<T>,
	describe: (phrase: string, callback: () => void) => void,
	it: (phrase: string, callback: () => void) => void,
	expect: <T>(value: T) => Expectation<T>,
) {
	describe("moveNodesFromSinglyLinkedListToHead", () => {
		it("moveNodesFromSinglyLinkedListToHead - should do nothing if the input list is empty", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const list2 = createList();

			list1.moveNodesFromSinglyLinkedListToHead(list2);

			expect(list1.size()).to.equal(arrayInput1.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);
		});

		it("moveNodesFromSinglyLinkedListToHead - should change head value and change size and clear input list", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.moveNodesFromSinglyLinkedListToHead(list2);

			expect(list1.size()).to.equal(arrayInput1.size() + arrayInput2.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput2[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);

			expect(list2.size()).to.equal(0);
			expect(list2.peekValueAtHead()).to.never.be.ok();
			expect(list2.peekValueAtTail()).to.never.be.ok();
		});

		it("moveNodesFromSinglyLinkedListToHead - should keep elements in order", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.moveNodesFromSinglyLinkedListToHead(list2);

			for (const [index, value] of list1.getForwardIterator()) {
				if (index <= arrayInput2.size()) {
					expect(value).to.equal(arrayInput2[index - 1]);
				} else {
					expect(value).to.equal(arrayInput1[index - arrayInput2.size() - 1]);
				}
			}
		});
	});

	describe("moveNodesFromSinglyLinkedListToIndex", () => {
		it("moveNodesFromSinglyLinkedListToIndex - should do nothing if the input list is empty", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const list2 = createList();

			list1.moveNodesFromSinglyLinkedListToIndex(2, list2);

			expect(list1.size()).to.equal(arrayInput1.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);
		});

		it("moveNodesFromSinglyLinkedListToIndex - should change head value when given index 1 and change size and clear the input list", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.moveNodesFromSinglyLinkedListToIndex(1, list2);

			expect(list1.size()).to.equal(arrayInput1.size() + arrayInput2.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput2[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);

			expect(list2.size()).to.equal(0);
			expect(list2.peekValueAtHead()).to.never.be.ok();
			expect(list2.peekValueAtTail()).to.never.be.ok();
		});

		it("moveNodesFromSinglyLinkedListToIndex - should not change head or tail when given an index in the middle and change size and clear the input list", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.moveNodesFromSinglyLinkedListToIndex(2, list2);

			expect(list1.size()).to.equal(arrayInput1.size() + arrayInput2.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);

			expect(list2.size()).to.equal(0);
			expect(list2.peekValueAtHead()).to.never.be.ok();
			expect(list2.peekValueAtTail()).to.never.be.ok();
		});

		it("moveNodesFromSinglyLinkedListToIndex - should change tail value when given index size + 1 and change size and clear the input list", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.moveNodesFromSinglyLinkedListToIndex(arrayInput1.size() + 1, list2);

			expect(list1.size()).to.equal(arrayInput1.size() + arrayInput2.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput2[2]);

			expect(list2.size()).to.equal(0);
			expect(list2.peekValueAtHead()).to.never.be.ok();
			expect(list2.peekValueAtTail()).to.never.be.ok();
		});

		it("moveNodesFromSinglyLinkedListToIndex - should keep elements in order when given index 1", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.moveNodesFromSinglyLinkedListToIndex(1, list2);

			for (const [index, value] of list1.getForwardIterator()) {
				if (index <= arrayInput2.size()) {
					expect(value).to.equal(arrayInput2[index - 1]);
				} else {
					expect(value).to.equal(arrayInput1[index - arrayInput2.size() - 1]);
				}
			}
		});

		it("moveNodesFromSinglyLinkedListToIndex - should keep elements in order when given an index in the middle", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.moveNodesFromSinglyLinkedListToIndex(2, list2);

			for (const [index, value] of list1.getForwardIterator()) {
				if (index === 1) {
					expect(value).to.equal(arrayInput1[0]);
				} else if (index <= arrayInput2.size() + 1) {
					expect(value).to.equal(arrayInput2[index - 2]);
				} else {
					expect(value).to.equal(arrayInput1[index - arrayInput2.size() - 1]);
				}
			}
		});

		it("moveNodesFromSinglyLinkedListToIndex - should keep elements in order when given index size + 1", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.moveNodesFromSinglyLinkedListToIndex(arrayInput1.size() + 1, list2);

			for (const [index, value] of list1.getForwardIterator()) {
				if (index <= arrayInput1.size()) {
					expect(value).to.equal(arrayInput1[index - 1]);
				} else {
					expect(value).to.equal(arrayInput2[index - arrayInput1.size() - 1]);
				}
			}
		});
	});

	describe("moveNodesFromSinglyLinkedListToTail", () => {
		it("moveNodesFromSinglyLinkedListToTail - should do nothing if the input list is empty", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const list2 = createList();

			list1.moveNodesFromSinglyLinkedListToTail(list2);

			expect(list1.size()).to.equal(arrayInput1.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);
		});

		it("moveNodesFromSinglyLinkedListToTail - should change tail value and change size and clear input list", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.moveNodesFromSinglyLinkedListToTail(list2);

			expect(list1.size()).to.equal(arrayInput1.size() + arrayInput2.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput2[2]);

			expect(list2.size()).to.equal(0);
			expect(list2.peekValueAtHead()).to.never.be.ok();
			expect(list2.peekValueAtTail()).to.never.be.ok();
		});

		it("moveNodesFromSinglyLinkedListToTail - should keep elements in order", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.moveNodesFromSinglyLinkedListToTail(list2);

			for (const [index, value] of list1.getForwardIterator()) {
				if (index <= arrayInput1.size()) {
					expect(value).to.equal(arrayInput1[index - 1]);
				} else {
					expect(value).to.equal(arrayInput2[index - arrayInput1.size() - 1]);
				}
			}
		});
	});
}
