import * as test from "tape"

import split from "../src/splitOnSpaces"

test("splitOnSpaces", (t) => {
  t.deepEqual(split("select"), ["select"], "single word")

  t.deepEqual(split("select 1"), ["select", " ", "1"], "single space")

  t.deepEqual(split("select  1"), ["select", "  ", "1"], "multiple spaces")

  t.deepEqual(split("select	1"), ["select", "\t", "1"], "tab")

  t.end()
})
