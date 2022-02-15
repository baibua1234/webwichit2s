import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase/initFirebase'
import { orderBy, limit, query, where, collection, getDocs } from "firebase/firestore"

const BlogsReadFromStore = () => {
    const [readCount, setReadCount] = useState(0)
    const [blogs, setBlogs] = useState([])

    useEffect( async () => {
        try {
            await getDocs(query(collection(db, 'blogs'), where('read', '>=', 10), orderBy('read', 'desc'), limit(2))).then( (snapshot) => {
              var docs = []
              var count = 0
              snapshot.forEach((doc) => {
                //console.log(doc.id, doc.data())
                docs.push( { id: doc.id, ...doc.data() } )
                count += doc.data().read
              })

              setBlogs( docs )
              setReadCount( count )
            })
            //alert('ไปเอา blog มาสำเร็จ')
        } catch (error) {
            console.log(error)
            alert(error)
        }
    } )

    return (
        <div style={{ margin: '5px 0' }}>
          <h1> Blog Read from Store </h1>
          <h6> ยอดคนอ่านทั้งหมด { readCount } คน</h6>
          <ul>
            {blogs.map( (blog) =>
              <li key={blog.id}>
                <ul>
                  <li> {blog.id} - { blog.title }</li>
                  <li> { blog.description }</li>
                  <li> { blog.like }</li>
                  <li> { blog.read }</li>
                  <li> { blog.date }</li>
                </ul>
              </li>
            )
            }
          </ul>
        </div>
    )
}

export default BlogsReadFromStore
