import { useState } from 'react'
import { db } from '@/lib/firebase/initFirebase'
import { collection, addDoc } from "firebase/firestore"

export default () => {
  const [title,       setTitle]       = useState('test title')
  const [description, setDescription] = useState('test description')
  const [like,        setLike]        = useState('like')
  const [read,        setRead]        = useState('read')

  const changeTitle = (e) => setTitle(e.target.value)
  const changeDescription = (e) => setDescription(e.target.value)
  const changeLike = (e) => setLike(e.target.value)
  const changeRead = (e) => setRead(e.target.value)

  const click = async (e) => {
    console.log(e)
    try {
      await addDoc(collection(db, "blogs"), {
        title: title,
        description: description,
        like: like,
        read: read,
      })
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div>
    <h1> Blog Write </h1>
    <ul>
      <li> <input onChange={changeTitle} type="text" name="title" /> { title }</li>
      <li> <input onChange={changeDescription} type="text" name="description" /> { description }</li>
      <li> <input onChange={changeLike} type="number" name="like" /> { like }</li>
      <li> <input onChange={changeRead} type="number" name="read" /> { read }</li>
      <li> <button onClick={click} variant="secondary" >Submit</button></li>
    </ul>
    </div>
  )
}
