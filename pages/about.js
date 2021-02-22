import { withRouter } from 'next/router' 
function About({router}) {
    return (
        <div>
        <div>About Page</div>
        <div>接收到参数为：{router.query.name}</div>
      </div>
    )
 }

 export default withRouter(About)