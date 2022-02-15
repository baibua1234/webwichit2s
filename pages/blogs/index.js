import Head from 'next/head'
import { Container } from 'react-bootstrap';
import TodoNavbar from 'pages/navbar'
import BlogsReadFromStore from '@/components/cloudFirestore/BlogsRead';
import BlogWrite from '@/components/cloudFirestore/BlogWrite'

const Blogs = () => {
  //const [blog, setBlog] = useState()
  return (
    <Container fluid>
    <Head>
      <title>This is Blog Page</title>
    </Head>
    <TodoNavbar />

    <main>
      <h1> My Blog </h1>
      <BlogWrite />
      <BlogsReadFromStore />
    </main>

    <footer></footer>
  </Container>
  )
}

export default Blogs
