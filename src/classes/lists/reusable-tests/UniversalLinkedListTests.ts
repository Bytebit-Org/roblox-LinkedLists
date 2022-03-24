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
		it("popHeadValue - should change response after items are added and after each value is popped off while also changing size", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList<string>();
			expect(list.popHeadValue()).to.never.be.ok();
			expect(list.size()).to.equal(0);

			list.pushArrayToHead(arrayInput);
			expect(list.size()).to.equal(arrayInput.size());

			let i = 0;
			while (i < arrayInput.size()) {
				expect(list.popHeadValue()).to.equal(arrayInput[i++]);
				expect(list.size()).to.equal(arrayInput.size() - i);
			}

			// shouldn't have a head or tail value at this point and should be empty
			expect(list.popHeadValue()).to.never.be.ok();
			expect(list.popTailValue()).to.never.be.ok();
			expect(list.isEmpty()).to.equal(true);
		});
	});

	describe("popTailValue", () => {
		it("popTailValue - should change response after items are added and after each value is popped off while also changing size", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList<string>();
			expect(list.popTailValue()).to.never.be.ok();
			expect(list.size()).to.equal(0);

			list.pushArrayToHead(arrayInput);
			expect(list.size()).to.equal(arrayInput.size());

			let i = arrayInput.size() - 1;
			while (i >= 0) {
				expect(list.popTailValue()).to.equal(arrayInput[i--]);
				expect(list.size()).to.equal(i + 1);
			}

			// shouldn't have a head or tail value at this point and should be empty
			expect(list.popHeadValue()).to.never.be.ok();
			expect(list.popTailValue()).to.never.be.ok();
			expect(list.isEmpty()).to.equal(true);
		});
	});

	describe("popValueAtIndex", () => {
		it("popValueAtIndex - should throw when index is out of bounds", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList<string>();
			expect(() => list.popValueAtIndex(0)).to.throw();
			expect(() => list.popValueAtIndex(1)).to.throw();
			expect(list.size()).to.equal(0);

			list.pushArrayToHead(arrayInput);
			expect(list.size()).to.equal(arrayInput.size());

			expect(() => list.popValueAtIndex(0)).to.throw();
			expect(() => list.popValueAtIndex(arrayInput.size() + 1)).to.throw();

			expect(list.popValueAtIndex(1)).to.equal(arrayInput[0]);
			expect(list.size()).to.equal(arrayInput.size() - 1);
		});

		it("popValueAtIndex - should change response after items are added and after each value is popped off while also changing size", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList<string>();
			expect(() => list.popValueAtIndex(1)).to.throw();
			expect(list.size()).to.equal(0);

			list.pushArrayToHead(arrayInput);
			expect(list.size()).to.equal(arrayInput.size());

			for (let i = 1; i < arrayInput.size() - 1; i++) {
				expect(list.popValueAtIndex(2)).to.equal(arrayInput[i]);
				expect(list.size()).to.equal(arrayInput.size() - i);
			}

			expect(list.popValueAtIndex(2)).to.equal(arrayInput[arrayInput.size() - 1]);
			expect(list.size()).to.equal(1);

			expect(list.popValueAtIndex(1)).to.equal(arrayInput[0]);
			expect(list.size()).to.equal(0);

			expect(() => list.popValueAtIndex(1)).to.throw();

			// shouldn't have a head or tail value at this point and should be empty
			expect(list.popHeadValue()).to.never.be.ok();
			expect(list.popTailValue()).to.never.be.ok();
			expect(list.isEmpty()).to.equal(true);
		});
	});

	describe("pushArrayToHead", () => {
		it("pushArrayToHead - should do nothing if the input array is empty", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = new Array<string>();

			list1.pushArrayToHead(arrayInput2);

			expect(list1.size()).to.equal(arrayInput1.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);
		});

		it("pushArrayToHead - should change head value and change size without affecting the input array", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];

			list1.pushArrayToHead(arrayInput2);

			expect(list1.size()).to.equal(arrayInput1.size() + arrayInput2.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput2[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);

			expect(arrayInput2.size()).to.equal(3);
		});

		it("pushArrayToHead - should keep elements in order", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];

			list1.pushArrayToHead(arrayInput2);

			for (const [index, value] of list1.getForwardIterator()) {
				if (index <= arrayInput2.size()) {
					expect(value).to.equal(arrayInput2[index - 1]);
				} else {
					expect(value).to.equal(arrayInput1[index - arrayInput2.size() - 1]);
				}
			}
		});
	});

	describe("pushArrayToIndex", () => {
		it("pushArrayToIndex - should do nothing if the input array is empty", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = new Array<string>();

			list1.pushArrayToIndex(2, arrayInput2);

			expect(list1.size()).to.equal(arrayInput1.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);
		});

		it("pushArrayToIndex - should change head value when given index 1 and change size without affecting the input array", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];

			list1.pushArrayToIndex(1, arrayInput2);

			expect(list1.size()).to.equal(arrayInput1.size() + arrayInput2.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput2[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);

			expect(arrayInput2.size()).to.equal(3);
		});

		it("pushArrayToIndex - should not change head or tail when given an index in the middle and change size without affecting the input array", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];

			list1.pushArrayToIndex(2, arrayInput2);

			expect(list1.size()).to.equal(arrayInput1.size() + arrayInput2.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);

			expect(arrayInput2.size()).to.equal(3);
		});

		it("pushArrayToIndex - should change tail value when given index size + 1 and change size without affecting the input array", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];

			list1.pushArrayToIndex(arrayInput1.size() + 1, arrayInput2);

			expect(list1.size()).to.equal(arrayInput1.size() + arrayInput2.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput2[2]);

			expect(arrayInput2.size()).to.equal(3);
		});

		it("pushArrayToIndex - should keep elements in order when given index 1", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];

			list1.pushArrayToIndex(1, arrayInput2);

			for (const [index, value] of list1.getForwardIterator()) {
				if (index <= arrayInput2.size()) {
					expect(value).to.equal(arrayInput2[index - 1]);
				} else {
					expect(value).to.equal(arrayInput1[index - arrayInput2.size() - 1]);
				}
			}
		});

		it("pushArrayToIndex - should keep elements in order when given an index in the middle", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];

			list1.pushArrayToIndex(2, arrayInput2);

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

		it("pushArrayToIndex - should keep elements in order when given index size + 1", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];

			list1.pushArrayToIndex(arrayInput1.size() + 1, arrayInput2);

			for (const [index, value] of list1.getForwardIterator()) {
				if (index <= arrayInput1.size()) {
					expect(value).to.equal(arrayInput1[index - 1]);
				} else {
					expect(value).to.equal(arrayInput2[index - arrayInput1.size() - 1]);
				}
			}
		});
	});

	describe("pushArrayToTail", () => {
		it("pushArrayToTail - should do nothing if the input array is empty", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = new Array<string>();

			list1.pushArrayToTail(arrayInput2);

			expect(list1.size()).to.equal(arrayInput1.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput1[2]);
		});

		it("pushArrayToTail - should change tail value and change size without affecting the input array", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];

			list1.pushArrayToTail(arrayInput2);

			expect(list1.size()).to.equal(arrayInput1.size() + arrayInput2.size());
			expect(list1.peekValueAtHead()).to.equal(arrayInput1[0]);
			expect(list1.peekValueAtTail()).to.equal(arrayInput2[2]);

			expect(arrayInput2.size()).to.equal(3);
		});

		it("pushArrayToTail - should keep elements in order", () => {
			const arrayInput1 = ["a", "b", "c"];
			const list1 = createList();
			list1.pushArrayToHead(arrayInput1);

			const arrayInput2 = ["d", "e", "f"];

			list1.pushArrayToTail(arrayInput2);

			for (const [index, value] of list1.getForwardIterator()) {
				if (index <= arrayInput1.size()) {
					expect(value).to.equal(arrayInput1[index - 1]);
				} else {
					expect(value).to.equal(arrayInput2[index - arrayInput1.size() - 1]);
				}
			}
		});
	});

	describe("pushToHead", () => {
		it("pushToHead - should change head value after items are added while also changing size", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList<string>();

			for (let i = 0; i < arrayInput.size(); i++) {
				list.pushToHead(arrayInput[i]);

				expect(list.size()).to.equal(i + 1);
				expect(list.peekValueAtHead()).to.equal(arrayInput[i]);
				expect(list.peekValueAtTail()).to.equal(arrayInput[0]);
			}
		});
	});

	describe("pushToIndex", () => {
		it("pushToIndex - pushing to index 1 should behave like pushToHead", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList<string>();

			for (let i = 0; i < arrayInput.size(); i++) {
				list.pushToIndex(1, arrayInput[i]);

				expect(list.size()).to.equal(i + 1);
				expect(list.peekValueAtHead()).to.equal(arrayInput[i]);
				expect(list.peekValueAtTail()).to.equal(arrayInput[0]);
			}
		});

		it("pushToIndex - pushing to index size + 1 should behave like pushToTail", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList<string>();

			for (let i = 0; i < arrayInput.size(); i++) {
				list.pushToIndex(list.size() + 1, arrayInput[i]);

				expect(list.size()).to.equal(i + 1);
				expect(list.peekValueAtHead()).to.equal(arrayInput[0]);
				expect(list.peekValueAtTail()).to.equal(arrayInput[i]);
			}
		});

		it("pushToIndex - pushing to an index in the middle should not change head or tail but should change size, and all elements should stay in order", () => {
			const headValue = "head";
			const tailValue = "tail";
			const arrayInput = ["a", "b", "c"];

			const list = createList<string>();
			list.pushToHead(headValue);
			list.pushToTail(tailValue);

			for (let i = 0; i < arrayInput.size(); i++) {
				list.pushToIndex(i + 2, arrayInput[i]);

				expect(list.size()).to.equal(i + 3);
				expect(list.peekValueAtIndex(i + 2)).to.equal(arrayInput[i]);
				expect(list.peekValueAtHead()).to.equal(headValue);
				expect(list.peekValueAtTail()).to.equal(tailValue);
			}

			for (let i = 2; i < list.size(); i++) {
				expect(list.peekValueAtIndex(i)).to.equal(arrayInput[i - 2]);
			}
		});
	});

	describe("pushToTail", () => {
		it("pushToTail - should change tail value after items are added while also changing size", () => {
			const arrayInput = ["a", "b", "c"];

			const list = createList<string>();

			for (let i = 0; i < arrayInput.size(); i++) {
				list.pushToTail(arrayInput[i]);

				expect(list.size()).to.equal(i + 1);
				expect(list.peekValueAtHead()).to.equal(arrayInput[0]);
				expect(list.peekValueAtTail()).to.equal(arrayInput[i]);
			}
		});
	});

	describe("toArray", () => {
		it("toArray - should give an array of the same length back with the same order", () => {
			const list = createList();

			expect(list.toArray().size()).to.equal(0);

			const inputArray = ["a", "b", "c"];
			for (let i = 0; i < inputArray.size(); i++) {
				list.pushToTail(inputArray[i]);
				expect(list.toArray().size()).to.equal(i + 1);

				for (const [listIndex, value] of list.getForwardIterator()) {
					expect(value).to.equal(inputArray[listIndex - 1]);
				}
			}
		});
	});
}
