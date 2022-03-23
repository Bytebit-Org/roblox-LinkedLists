/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/// <reference types="@rbxts/testez/globals" />

import { runAcyclicLinkedListTests } from "./reusable-tests/AcyclicLinkedListTests";
import { DoublyLinkedList } from "./DoublyLinkedList";

export = () => {
	runAcyclicLinkedListTests(() => new DoublyLinkedList(), describe, it, expect);
};
