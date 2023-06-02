import process from "process";
import { expect, test } from "vitest";

import { cwd } from "../src/lib";

test("cwd", () => expect(process.cwd()).toBe(cwd()));
