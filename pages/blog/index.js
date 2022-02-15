import Head from 'next/head'
import { Container } from 'react-bootstrap';
import TodoNavbar from 'pages/navbar'
import BlogReadFromStore from '@/components/cloudFirestore/BlogRead';

const Blog = () => {
  //const [blog, setBlog] = useState()
  return (
    <Container fluid>
    <Head>
      <title>This is Blog Page</title>
    </Head>
    <TodoNavbar />

    <main>
      <h1> My Blog </h1>
      <BlogReadFromStore />
    </main>

    <footer></footer>
  </Container>
  )
}

export default Blog
