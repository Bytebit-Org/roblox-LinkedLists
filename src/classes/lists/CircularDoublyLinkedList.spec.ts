/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/// <reference types="@rbxts/testez/globals" />

import { CircularDoublyLinkedList } from "./CircularDoublyLinkedList";
import { runCircularLinkedListTests } from "./reusable-tests/CircularLinkedListTests";
import { runUniversalLinkedListTests } from "./reusable-tests/UniversalLinkedListTests";

export = () => {
	runCircularLinkedListTests(() => new CircularDoublyLinkedList(), describe, it, expect);
	runUniversalLinkedListTests(() => new CircularDoublyLinkedList(), describe, it, expect);
};
