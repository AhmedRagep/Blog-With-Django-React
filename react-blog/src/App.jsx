
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Main from './layouts/Main'
import HomePage from './pages/Home'
import AddBlogPage from './pages/AddBlog'
import PageNotFound from './pages/PageNotFound'
import DetailPage from './pages/DetailPage'
import EditBlogPage from './pages/EditBlog'
import axios from 'axios'
import { toast } from 'react-toastify'

const App = () => {
  const createBlog = (data) => {
    axios.post('http://127.0.0.1:8000/blogs/',data)
    .then(res => 
      {console.log(res.data)
      toast.success('Add Post Successfully..')
    })
    .catch(err => {console.log(err.message)})
  }

  const changeBlog = (data, slug) => {
    axios.put(`http://127.0.0.1:8000/blogs/${slug}/`,data)
    .then(res => {
      console.log(res.data)
      toast.success('Post Updated Successfully.')
    })
    .catch(err => console.log(err))
  }

  // url لتوجيه العرض بناءا علي 
  const router = createBrowserRouter(createRoutesFromElements(
    // هذه هيا الصفحة الرئيسيه اللتي تضم الاساس
    <Route path='/' element={<Main/>}>
      {/* Outlet هذه المعلومات المتحركه وهيا  */}
      <Route index element={<HomePage/>} />  
      {/* صفحة اضافة منشور */}
      <Route path='/add-blog' element={<AddBlogPage createBlog={createBlog} />} />
      <Route path='/blogs/:slug' element={<DetailPage />} />
      <Route path='/blogs/edit/:slug' element={<EditBlogPage changeBlog={changeBlog}/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Route>
  ))
  return (
    // تحويل المعلومات الي الراوتر
    <RouterProvider router={router} />
  )
}

export default App