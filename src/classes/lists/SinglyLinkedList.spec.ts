/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/// <reference types="@rbxts/testez/globals" />

import { runLinkedListTests } from "./reusable-tests/LinkedListTests";
import { SinglyLinkedList } from "./SinglyLinkedList";

export = () => {
	runLinkedListTests(() => new SinglyLinkedList(), describe, it, expect);
};
