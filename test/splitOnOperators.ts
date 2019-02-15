import * as test from "tape"
import splitOnOperators from "../src/splitOnOperators"

const split = splitOnOperators(["+", ">="])

test("splitOnOperators", (t) => {
  t.deepEqual(split("select 1+2"), ["select 1", "+", "2"], "simple operator")
  t.deepEqual(split("select 1 >=4"), ["select 1 ", ">=", "4"], "two chars operator")

  t.end()
})
