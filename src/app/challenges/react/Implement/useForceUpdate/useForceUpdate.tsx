import Button from "app/ui/common/Button/Button"
import Box from "app/ui/layouts/Box/Box"
import { useRef } from "react"

// Implementation
// ...

// Tests

function UseForceUpdateTest() {
  const counterRef = useRef(0)
  const forceUpdate = useForceUpdate()

  function add() {
    counterRef.current += 1
  }

  return (
    <Box>
      <span><strong>Counter:</strong> {counterRef.current}</span>
      <Button onClick={add}>Add 1</Button>
      <Button onClick={forceUpdate}>Force Update</Button>
    </Box>
  )
}

export default UseForceUpdateTest
