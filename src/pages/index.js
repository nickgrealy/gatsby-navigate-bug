import * as React from 'react'
import { navigate } from 'gatsby'

const navTo = {
  page2: (state) => navigate('/page2', { state })
}

const IndexPage = () => {
  return (
    <div>
      <h1>Page 1</h1>
      <div><button onClick={navTo.page2}>BAD - Page reload</button></div>
      <div><button onClick={() => navTo.page2()}>GOOD - Page doesn't reload</button></div>
    </div>
  )
}

export default IndexPage
