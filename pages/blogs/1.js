export default function Blog({post}){
    return (
        <ul>
            <li>{post.title}</li>
        </ul>
      )
}
// 此函数在构建时被调用
export async function getStaticProps() {
    // console.log('then')
    // 调用外部 API 获取博文列表
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()
  const post= {
    id: 1, title: '第一页'
  }
    // 通过返回 { props: { posts } } 对象，Blog 组件
    // 在构建时将接收到 `posts` 参数
    return {
      props: {
        post,
      },
    }
}
  
// 此函数在构建时被调用
export async function getStaticPaths() {
    console.log('first')
    // 调用外部 API 获取博文列表
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()

    const posts = [{ id: 1, title:'第三页'}]
    // 根据博文列表生成所有需要预渲染的路径
    const paths = posts.map((post) => `/blogs/${post.id}`)

    console.log(paths)
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }