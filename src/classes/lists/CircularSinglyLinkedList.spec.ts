/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/// <reference types="@rbxts/testez/globals" />

import { CircularSinglyLinkedList } from "./CircularSinglyLinkedList";
import { runCircularLinkedListTests } from "./reusable-tests/CircularLinkedListTests";
import { runUniversalLinkedListTests } from "./reusable-tests/UniversalLinkedListTests";

export = () => {
	runCircularLinkedListTests(() => new CircularSinglyLinkedList(), describe, it, expect);
	runUniversalLinkedListTests(() => new CircularSinglyLinkedList(), describe, it, expect);
};
