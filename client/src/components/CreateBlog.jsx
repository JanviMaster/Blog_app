// import React, { useState } from "react";
// import React, { useState, useContext } from "react";
// import { BlogContext } from "../contexts/BlogContext";
// import { useNavigate } from "react-router-dom";

// const CreateBlog = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [category, setCategory] = useState("");
//   const [image, setImage] = useState(null);
//   const [fileName, setFileName] = useState("");

//   const { addBlog } = useContext(BlogContext);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const blog = {
//       title,
//       content,
//       category,
//       image: image ? URL.createObjectURL(image) : null,
//     };

//     addBlog(blog);

//     // Reset fields
//     setTitle("");
//     setContent("");
//     setCategory("");
//     setImage(null);
//     setFileName("");

//     // Navigate to Projects page
//     navigate("/projects");
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setFileName(file.name);
//     }
//   };
// // const CreateBlog = () => {
//   // const [title, setTitle] = useState("");
//   // const [content, setContent] = useState("");
//   // const [category, setCategory] = useState("");
//   // const [image, setImage] = useState(null);
//   // const [fileName, setFileName] = useState("");

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   const formData = new FormData();
//   //   formData.append("title", title);
//   //   formData.append("content", content);
//   //   formData.append("category", category);
//   //   if (image) {
//   //     formData.append("image", image);
//   //   }

//   //   console.log("Submitting Blog:", {
//   //     title,
//   //     content,
//   //     category,
//   //     image,
//   //   });

//   //   setTitle("");
//   //   setContent("");
//   //   setCategory("");
//   //   setImage(null);
//   //   setFileName("");
//   // };

//   // const handleFileChange = (e) => {
//   //   const file = e.target.files[0];
//   //   if (file) {
//   //     setImage(file);
//   //     setFileName(file.name);
//   //   }
//   // };

//   return (
//     <>
//       <div className="max-w-4xl mx-auto p-[4px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-md mt-6">
//         <div className="p-5 bg-white rounded-xl">
//           <h2 className="text-2xl font-bold mb-3">Create a Blog Post</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               placeholder="Blog Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full p-2 border rounded"
//               required
//             />

//             <textarea
//               placeholder="Write your blog content here..."
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               rows={8}
//               className="w-full p-2 border rounded"
//               required
//             />

//             <input
//               type="text"
//               placeholder="Category (optional)"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-full p-2 border rounded"
//             />

//             <div className="space-y-1">
//               <input
//                 id="fileUpload"
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 className="hidden"
//               />
//               <label
//                 htmlFor="fileUpload"
//                 className="cursor-pointer inline-block px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-800 transition"
//               >
//                 Choose File
//               </label>
//               <span className="ml-2 text-sm text-gray-700">
//                 {fileName || "No file chosen"}
//               </span>
//             </div>

//             <center>
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-white py-2 px-60 rounded hover:bg-blue-700"
//               >
//                 Publish Blog
//               </button>
//             </center>
//           </form>
//         </div>
//       </div>
//       <div>
//         <br />
//       </div>
//     </>
//   );
// };

// export default CreateBlog;
