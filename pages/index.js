import React from 'react'
class Page extends React.Component {
  constructor(props) {
    console.log(props, 33)
    super(props)
	}
  static async getInitialProps ({ req, query }) {
    console.log(query, 1211)
    return {
      articles: query.list,
      total: query.total + 1
    }
  }
  render () {
    console.log(this.props, 232)
    return (
      <div>
        <div>Next stars:{this.props.total}</div>
      </div>
    )
  }
}

export default Page
