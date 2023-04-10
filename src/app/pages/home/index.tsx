import { APP_TITLE } from "app/App"
import Articles from "app/challenges/react/Fetch/Articles/articles."
import UseForceUpdateTest from "app/challenges/react/Implement/useForceUpdate/useForceUpdate"
import { Table } from "app/challenges/react/Refactor/Table/Table"
import Button from "app/ui/common/Button/Button"
import { Helmet } from "react-helmet"

function HomePage() {
  return (
    <>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>

      <h1></h1>
      <h2>Articles</h2>
      <Articles />
      <h2>UseForceUpdateTest</h2>
      <UseForceUpdateTest />
      <h2>Table</h2>
      <Table
        head={["Cats", "Dogs", "Non-binary"]}
        info={[
          {
            row1: "Meow",
            row2: "Gaw",
            row3: "A horse"
          },
          {
            row1: "Mrrrr",
            row2: "Hgagw",
            row3: "Tomato"
          },
          {
            row1: "AAAAAAAAAAAAAAah",
            row2: "UwaUwa",
            row3: "Dabmledor"
          }
        ]}
      />
      <h2>Modal Popup</h2>
      <Button>Open Popup</Button>
    </>
  )
}

export default HomePage
