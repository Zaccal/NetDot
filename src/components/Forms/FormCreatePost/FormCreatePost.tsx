import { PostType } from "../../../types/Interfaces"
import { useContext, useState } from "react"
import Global from "../../../context/Global"
import { Form } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Text from "../../Error/Text/Text"
import { getDisignDate } from '../../../utils/utilsFn'
import classes from './FormCreatePost.module.css'

const FormCreatePost = () => {
  const date = new Date()

  const {localStore, setLocalStore} = useContext(Global)
  const [rootClassesInputs, setRootClassesInputs] = useState<string[]>(['form-control'])
  const [rootClassesLabel, setRootClassesLabel] = useState<string[]>(['form-label'])
  const [visibleError, setVisibleError] = useState<boolean>(false)
  const [dataFromInputs, setDataFromInputs] = useState<PostType>({
    postTitle: '',
    postBody: '',
    authorLogin: localStore.User.userLogin,
    postId: Date.now(),
    createdDate: '',
    userId: 'itIsYou'
  })

  const createPost = () => {
    if (!!dataFromInputs.postTitle && !!dataFromInputs.postBody) {
      const newPost = {
        ...dataFromInputs, 
        postId: Date.now(), 
        createdDate: `${getDisignDate(date.getDay())}.${getDisignDate(date.getMonth() + 1)}.${date.getFullYear()}`
      }
      
      setLocalStore({...localStore, myPosts: [newPost, ...localStore.myPosts]})
      
      setDataFromInputs({
        postTitle: '',
        postBody: '',
        authorLogin: localStore.User.userLogin,
        postId: 0,
        createdDate: '',
        userId: 'itIsYou',
      })

      setRootClassesInputs(rootClassesInputs.filter(rootClaassInput => rootClaassInput !== classes.dangerInput))
      setRootClassesLabel(rootClassesLabel.filter(rootClassLabel => rootClassLabel !== 'text-danger'))
      setVisibleError(false)
    }
    
    else {
      setRootClassesInputs([...rootClassesInputs, classes.dangerInput])
      setRootClassesLabel([...rootClassesLabel, 'text-danger'])
      setVisibleError(true)
    }
  }

  return (
    <Form>
      <Form.Group className="mt-5 mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className={rootClassesLabel.join(' ')}>Title</Form.Label>
        <Form.Control value={dataFromInputs.postTitle} className={rootClassesInputs.join(' ')} type="text" placeholder="Title" onChange={event => setDataFromInputs({...dataFromInputs, postTitle: event.target.value})}/>
        <Text visible={visibleError}>*Title input must be something</Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className={rootClassesLabel.join(' ')}>Content</Form.Label>
        <Form.Control value={dataFromInputs.postBody} className={rootClassesInputs.join(' ')} as="textarea" rows={3} onChange={event => setDataFromInputs({...dataFromInputs, postBody: event.target.value})}/>
        <Text visible={visibleError}>*Content input must be something</Text>
      </Form.Group>
      <Button onClick={createPost} className="col-12" style={{height: 45}}>Create post</Button>
    </Form>
  )
}

export default FormCreatePost