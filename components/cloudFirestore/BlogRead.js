import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase/initFirebase'
import { collection, doc, DocumentSnapshot, getDoc } from "firebase/firestore"
import { useUser } from '@/lib/firebase/useUser'
import { CardGroup , Card } from 'react-bootstrap'

// blog
const BlogReadFromStore = () => {
    const [blog, setBlog] = useState()

    useEffect( async () => {
        try {
          const blogDoc = doc(db, "blogs", "7sdXWFLXpkPxF5Vi3hWD")
          await getDoc(blogDoc).then((doc) => {
            if (doc.exists()) {
              console.log(doc.data())
              setBlog(doc.data())
            }
          })
          //alert('ไปเอา blog มาสำเร็จ')
        } catch (error) {
            console.log(error)
            alert(error)
        }
    } )

    return (
      //   <div style={{ margin: '5px 0' }}>
      //     <h1> Blog Read from Store </h1>
      // {blog? 
      //   <>
      //   <ul>
      //     <li> { blog.title }</li>
      //     <li> { blog.description }</li>
      //     <li> { blog.like }</li>
      //     <li> { blog.read }</li>
      //     <li> { blog.date }</li>
      //   </ul>
      //   </>
        
      //   :
      //   <>
      //     <p> ยังไม่มี blog </p>
      //   </>
      // }
      //   </div>


 <div>
   {blog?
   <>
<CardGroup>
<Card style={{width:"80rem"}}>
    <Card.Img variant="top" src="https://img-global.cpcdn.com/recipes/9212ad1484c76e24/680x482cq70/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%A2%E0%B8%B3%E0%B9%84%E0%B8%81%E0%B9%81%E0%B8%8B%E0%B8%9A.jpg" />
    <Card.Body>
      <Card.Title>{blog.title}</Card.Title>
      <Card.Text>
        {blog.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://img.kapook.com/u/2017/surauch/cooking/p_14.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{width:"80rem"}}>
    <Card.Img variant="top" src="https://img-global.cpcdn.com/recipes/9212ad1484c76e24/680x482cq70/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%A2%E0%B8%B3%E0%B9%84%E0%B8%81%E0%B9%81%E0%B8%8B%E0%B8%9A.jpg" />
    <Card.Body>
      <Card.Title>{blog.title}</Card.Title>
      <Card.Text>
        {blog.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{width:"80rem"}}>
    <Card.Img variant="top" src="https://img-global.cpcdn.com/recipes/9212ad1484c76e24/680x482cq70/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%A2%E0%B8%B3%E0%B9%84%E0%B8%81%E0%B9%81%E0%B8%8B%E0%B8%9A.jpg" />
    <Card.Body>
      <Card.Title>{blog.title}</Card.Title>
      <Card.Text>
        {blog.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{width:"80rem"}}>
    <Card.Img variant="top" src="https://img-global.cpcdn.com/recipes/9212ad1484c76e24/680x482cq70/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%A2%E0%B8%B3%E0%B9%84%E0%B8%81%E0%B9%81%E0%B8%8B%E0%B8%9A.jpg" />
    <Card.Body>
      <Card.Title>{blog.title}</Card.Title>
      <Card.Text>
        {blog.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{width:"80rem"}}>
    <Card.Img variant="top" src="https://img-global.cpcdn.com/recipes/9212ad1484c76e24/680x482cq70/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%A2%E0%B8%B3%E0%B9%84%E0%B8%81%E0%B9%81%E0%B8%8B%E0%B8%9A.jpg" />
    <Card.Body>
      <Card.Title>{blog.title}</Card.Title>
      <Card.Text>
        {blog.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
   </>
   :
   <>
     <p> ยังไม่มี blog </p>
    </>
}
</div>
    )
}

export default BlogReadFromStore