// DetailPage.js
import React, { useEffect, useState } from 'react';
import { FaRegPenToSquare } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { IoReturnUpBack } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom';
import Modal from '../components/Modal';
import axios from 'axios';
import { toast } from 'react-toastify';



const DetailPage = () => {
  const {slug} = useParams()
  const [blog, setBlog] = useState({})


  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/blogs/${slug}`)
    .then(res => {
      console.log(res.data);
      setBlog(res.data)
    })
    .catch(err => {console.log(err.message)})
  }, [])

  // حالة التحكم في عرض المودال الافتراضي مغلق
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(isModalOpen => !isModalOpen)
  }


  const deleteBlog = () => {
    axios.delete(`http://127.0.0.1:8000/blogs/${slug}/`)
    .then(res => {
      console.log(res.data)
      toast.success('Post Deleted Successfully.')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="container mx-auto mt-20 px-4 py-8 border">
      <div className="max-w-2xl mx-auto">
        <Link to="/">
          <span className="flex items-center">
            <IoReturnUpBack fontSize={25}/>
            <p className="ml-1">Back</p>
          </span>
        </Link>
        <h1 className="text-4xl font-extrabold blog-title mt-4 mb-4">{blog.title}</h1>
        <span className="mb-4 flex items-center">
          <Link to={`/blogs/edit/${blog?.slug}`}>
            <button
              type="button"
              className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            >
              <FaRegPenToSquare className="mr-2 text-xl" /> edit
            </button>
          </Link>
          <button
            type="button"
            className="flex items-center focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
            // عند الضغط سوف يظهر المودل
            onClick={toggleModal}
          >
            <MdDelete className="mr-2 text-xl" /> Delete
          </button>
        </span>
        <div className="prose prose-lg blog-body text-justify">
          {blog?.content}
        </div>
      </div>

      {/* عرض المودال وارسال المعلومات لها*/}
      {/* <Modal title={blog?.title} deleteBlog={deleteBlog} isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmDelete} /> */}
      {isModalOpen && <Modal toggleModal={toggleModal} title={blog?.title} deleteBlog={deleteBlog} />}
    </div>

  );
};

export default DetailPage;
