import Expectation from "@rbxts/testez/src/Expectation";
import { ILinkedList } from "interfaces/ILinkedList";

export function runUniversalLinkedListTests(
	createList: <T extends defined>() => ILinkedList<T>,
	describe: (phrase: string, callback: () => void) => void,
	it: (phrase: string, callback: () => void) => void,
	expect: <T>(value: T) => Expectation<T>,
) {
	describe("clear", () => {
		it("clear - should set head and tail nodes to nil", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			expect(list.peekValueAtHead()).to.equal(arrayInput[0]);
			expect(list.peekValueAtTail()).to.equal(arrayInput[2]);

			list.clear();

			expect(list.peekValueAtHead()).to.never.be.ok();
			expect(list.peekValueAtTail()).to.never.be.ok();
		});

		it("clear - should reset size", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList();
			list.pushArrayToHead(arrayInput);

			expect(list.size()).to.equal(arrayInput.size());

			list.clear();

			expect(list.size()).to.equal(0);
		});
	});

	describe("copyLinkedListValuesToHead", () => {
		it("copyLinkedListValuesToHead - should do nothing if the input list is empty", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const list2 = createList();

			list1.copyLinkedListValuesToHead(list2);

			expect(list1.size()).to.equal(arrayInput1.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);
		});

		it("copyLinkedListValuesToHead - should change head value and change size without affecting the input list", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.copyLinkedListValuesToHead(list2);

			expect(list1.size()).to.equal(arrayInput1.size() + arrayInput2.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput2[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);

			expect(list2.size()).to.equal(arrayInput2.size());
			expect(list2.peekValueAtHead()).to.equal(arrayInput2[0]);
			expect(list2.peekValueAtTail()).to.equal(arrayInput2[2]);
		});

		it("copyLinkedListValuesToHead - should keep elements in order", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.copyLinkedListValuesToHead(list2);

			for (const [index, value] of list1.getForwardIterator()) {
				if (index <= arrayInput2.size()) {
					expect(value).to.equal(arrayInput2[index - 1]);
				} else {
					expect(value).to.equal(arrayInput1[index - arrayInput2.size() - 1]);
				}
			}
		});
	});

	describe("copyLinkedListValuesToIndex", () => {
		it("copyLinkedListValuesToIndex - should do nothing if the input list is empty", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const list2 = createList();

			list1.copyLinkedListValuesToIndex(2, list2);

			expect(list1.size()).to.equal(arrayInput1.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);
		});

		it("copyLinkedListValuesToIndex - should change head value when given index 1 and change size without affecting the input list", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.copyLinkedListValuesToIndex(1, list2);

			expect(list1.size()).to.equal(arrayInput1.size() + arrayInput2.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput2[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);

			expect(list2.size()).to.equal(arrayInput2.size());
			expect(list2.peekValueAtHead()).to.equal(arrayInput2[0]);
			expect(list2.peekValueAtTail()).to.equal(arrayInput2[2]);
		});

		it("copyLinkedListValuesToIndex - should not change head or tail when given an index in the middle and change size without affecting the input list", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.copyLinkedListValuesToIndex(2, list2);

			expect(list1.size()).to.equal(arrayInput1.size() + arrayInput2.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);

			expect(list2.size()).to.equal(arrayInput2.size());
			expect(list2.peekValueAtHead()).to.equal(arrayInput2[0]);
			expect(list2.peekValueAtTail()).to.equal(arrayInput2[2]);
		});

		it("copyLinkedListValuesToIndex - should change tail value when given index size + 1 and change size without affecting the input list", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.copyLinkedListValuesToIndex(arrayInput1.size() + 1, list2);

			expect(list1.size()).to.equal(arrayInput1.size() + arrayInput2.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput2[2]);

			expect(list2.size()).to.equal(arrayInput2.size());
			expect(list2.peekValueAtHead()).to.equal(arrayInput2[0]);
			expect(list2.peekValueAtTail()).to.equal(arrayInput2[2]);
		});

		it("copyLinkedListValuesToIndex - should keep elements in order when given index 1", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.copyLinkedListValuesToIndex(1, list2);

			for (const [index, value] of list1.getForwardIterator()) {
				if (index <= arrayInput2.size()) {
					expect(value).to.equal(arrayInput2[index - 1]);
				} else {
					expect(value).to.equal(arrayInput1[index - arrayInput2.size() - 1]);
				}
			}
		});

		it("copyLinkedListValuesToIndex - should keep elements in order when given an index in the middle", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.copyLinkedListValuesToIndex(2, list2);

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

		it("copyLinkedListValuesToIndex - should keep elements in order when given index size + 1", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.copyLinkedListValuesToIndex(arrayInput1.size() + 1, list2);

			for (const [index, value] of list1.getForwardIterator()) {
				if (index <= arrayInput1.size()) {
					expect(value).to.equal(arrayInput1[index - 1]);
				} else {
					expect(value).to.equal(arrayInput2[index - arrayInput1.size() - 1]);
				}
			}
		});
	});

	describe("copyLinkedListValuesToTail", () => {
		it("copyLinkedListValuesToTail - should do nothing if the input list is empty", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const list2 = createList();

			list1.copyLinkedListValuesToTail(list2);

			expect(list1.size()).to.equal(arrayInput1.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);
		});

		it("copyLinkedListValuesToTail - should change tail value and change size without affecting the input list", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.copyLinkedListValuesToTail(list2);

			expect(list1.size()).to.equal(arrayInput1.size() + arrayInput2.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput2[2]);

			expect(list2.size()).to.equal(arrayInput2.size());
			expect(list2.peekValueAtHead()).to.equal(arrayInput2[0]);
			expect(list2.peekValueAtTail()).to.equal(arrayInput2[2]);
		});

		it("copyLinkedListValuesToTail - should keep elements in order", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];
			const list2 = createList();
			list2.pushArrayToHead(arrayInput2);

			list1.copyLinkedListValuesToTail(list2);

			for (const [index, value] of list1.getForwardIterator()) {
				if (index <= arrayInput1.size()) {
					expect(value).to.equal(arrayInput1[index - 1]);
				} else {
					expect(value).to.equal(arrayInput2[index - arrayInput1.size() - 1]);
				}
			}
		});
	});

	describe("isEmpty", () => {
		it("isEmpty - should change response after items are added and after the list is cleared", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList();
			expect(list.isEmpty()).to.equal(true);

			list.pushArrayToHead(arrayInput);
			expect(list.isEmpty()).to.equal(false);

			list.clear();
			expect(list.isEmpty()).to.equal(true);
		});
	});

	describe("peekValueAtHead", () => {
		it("peekValueAtHead - should change response after items are added and after the list is cleared", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList();
			expect(list.peekValueAtHead()).to.never.be.ok();

			list.pushArrayToHead(arrayInput);
			expect(list.peekValueAtHead()).to.equal(arrayInput[0]);

			list.clear();
			expect(list.peekValueAtHead()).to.never.be.ok();
		});
	});

	describe("peekValueAtIndex", () => {
		it("peekValueAtIndex - should change response after items are added and after the list is cleared for each index", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList();

			for (let i = 0; i < arrayInput.size(); i++) {
				expect(() => list.peekValueAtIndex(i + 1)).to.throw();

				list.pushArrayToHead(arrayInput);
				expect(list.peekValueAtIndex(i + 1)).to.equal(arrayInput[i]);

				list.clear();
				expect(() => list.peekValueAtIndex(i + 1)).to.throw();
			}
		});
	});

	describe("peekValueAtTail", () => {
		it("peekValueAtTail - should change response after items are added and after the list is cleared", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList();
			expect(list.peekValueAtTail()).to.never.be.ok();

			list.pushArrayToHead(arrayInput);
			expect(list.peekValueAtTail()).to.equal(arrayInput[2]);

			list.clear();
			expect(list.peekValueAtTail()).to.never.be.ok();
		});
	});

	describe("popHeadValue", () => {
		warn("Not implemented");
	});

	describe("popTailValue", () => {
		warn("Not implemented");
	});

	describe("popValueAtIndex", () => {
		warn("Not implemented");
	});

	describe("pushArrayToHead", () => {
		warn("Not implemented");
	});

	describe("pushArrayToIndex", () => {
		warn("Not implemented");
	});

	describe("pushArrayToIndex", () => {
		warn("Not implemented");
	});

	describe("pushToHead", () => {
		warn("Not implemented");
	});

	describe("pushToIndex", () => {
		warn("Not implemented");
	});

	describe("pushToIndex", () => {
		warn("Not implemented");
	});
}
