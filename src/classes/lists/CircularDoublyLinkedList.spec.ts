/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/// <reference types="@rbxts/testez/globals" />

import { CircularDoublyLinkedList } from "./CircularDoublyLinkedList";
import { runUniversalLinkedListTests } from "./reusable-tests/UniversalLinkedListTests";

export = () => {
	runUniversalLinkedListTests(() => new CircularDoublyLinkedList(), describe, it, expect);
};
