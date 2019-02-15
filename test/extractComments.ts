import * as test from "tape"

import extract from "../src/extractComments"

test("extractComments", (t) => {
  t.deepEqual(extract("select"), ["select"], "single word")

  t.deepEqual(
    extract(`
select 1 -- ok
/* comment */
from foo -- comment
`), ["\n", "select 1 ", "-- ok", "\n", "/* comment */", "\n", "from foo ", "-- comment", "\n"],
    "comments on many rows"
  )

  t.end()
})
