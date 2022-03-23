/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/// <reference types="@rbxts/testez/globals" />

import { runAcyclicLinkedListTests } from "./reusable-tests/AcyclicLinkedListTests";
import { DoublyLinkedList } from "./DoublyLinkedList";
import { runUniversalLinkedListTests } from "./reusable-tests/UniversalLinkedListTests";

export = () => {
	runAcyclicLinkedListTests(() => new DoublyLinkedList(), describe, it, expect);
	runUniversalLinkedListTests(() => new DoublyLinkedList(), describe, it, expect);
};
