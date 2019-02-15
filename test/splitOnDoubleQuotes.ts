import * as test from "tape"
import split from "../src/splitOnDoubleQuotes"

test("splitOnDoubleQuotes", (t) => {
  t.deepEqual(split("select"), ["select"], "single word")
  t.deepEqual(split('select 1 as "my num"'), ["select 1 as ", '"my num"'], "double quotes")

  t.end()
})
