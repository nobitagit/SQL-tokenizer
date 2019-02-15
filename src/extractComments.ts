import extractDashComments from "./extractDashComments"
import extractStarComments from "./extractStarComments"

export default function extractComments(sql: string): string[] {
  return extractStarComments(sql).reduce((blocks, code) => {
    return blocks.concat(extractDashComments(code))
  }, [])
}
