import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase/initFirebase'
import { doc, getDoc } from "firebase/firestore"
import { useUser } from '@/lib/firebase/useUser'

const BlogReadFromStore = () => {
    const [blog, setBlog] = useState()

    useEffect( async () => {
        try {
            const blogDoc = doc(db, "blogs", "yW93IE6lV4K20WUvTS6A")
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
        <div style={{ margin: '5px 0' }}>
          <h1> Blog Read from Store </h1>
      {blog? 
        <>
        <ul>
          <li> { blog.title }</li>
          <li> { blog.description }</li>
          <li> { blog.like }</li>
          <li> { blog.read }</li>
          <li> { blog.date }</li>
        </ul>
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
