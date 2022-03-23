/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/// <reference types="@rbxts/testez/globals" />

import { CircularSinglyLinkedList } from "./CircularSinglyLinkedList";
import { runUniversalLinkedListTests } from "./reusable-tests/UniversalLinkedListTests";

export = () => {
	runUniversalLinkedListTests(() => new CircularSinglyLinkedList(), describe, it, expect);
};
