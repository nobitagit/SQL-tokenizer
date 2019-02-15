import * as test from "tape"

import extract from "../src/extractDashComments"

test("extractDashComments", (t) => {
  t.deepEqual(extract("select"), ["select"], "single word")

  t.deepEqual(
    extract(`
select 1 -- ok
from foo -- comment
`), ["\n", "select 1 ", "-- ok", "\n", "from foo ", "-- comment", "\n"],
  "comments on many rows"
  )

  t.end()
})
