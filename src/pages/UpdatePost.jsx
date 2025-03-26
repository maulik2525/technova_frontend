import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UpdatePost() {
  const [imageFileUploading, setImageFileUploading] = useState(false);
  const { currentUser, error, loading } = useSelector((state) => state.user);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/post/getposts?postId=${postId}`);
        const data = await res.json();
        if (!res.ok) {
          setPublishError(data.message);
          return;
        }
        setPublishError(null);
        setFormData(data.posts[0]);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPost();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        payload.append(key, value);
      });

      if (file) {
        payload.append("image", file);
        const fileExtension = file.name.split(".").pop();
        payload.append("mediaType", `.${fileExtension}`);
      }

      const res = await fetch(`/api/post/updatepost/${postId}/${currentUser._id}`, {
        method: "PUT",
        body: payload, // Send FormData directly
      });

      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      setPublishError(null);
      navigate(`/post/${data.slug}`);
    } catch (error) {
      setPublishError("Something went wrong with updating the blog");
    }
  };

  return (
    <div className="p-3 max-w-7xl w-full mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Update post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            value={formData.title}
          />
          <Select
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            value={formData.category}
          >
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="typescript">TypeScript</option>
            <option value="nodejs">Node.js</option>
            <option value="expressjs">Express.js</option>
            <option value="vuejs">Vue.js</option>
            <option value="angular">Angular</option>
            <option value="svelte">Svelte</option>
            <option value="graphql">GraphQL</option>
            <option value="mongodb">MongoDB</option>
            <option value="firebase">Firebase</option>
            <option value="mysql">MySQL</option>
            <option value="postgresql">PostgreSQL</option>
            <option value="tailwindcss">Tailwind CSS</option>
            <option value="bootstrap">Bootstrap</option>
            <option value="webdev">Web Development</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Full Stack</option>
            <option value="devops">DevOps</option>
            <option value="uiux">UI/UX Design</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="datascience">Data Science</option>
            <option value="machinelearning">Machine Learning</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="csharp">C#</option>
            <option value="golang">Go</option>
            <option value="php">PHP</option>
          </Select>
        </div>

        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*,video/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        {formData.image && (
          <img
            src={formData.image}
            alt="upload"
            className="w-full h-auto object-cover"
          />
        )}

        <ReactQuill
          theme="snow"
          value={formData.content}
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          onChange={(value) => setFormData({ ...formData, content: value })}
        />

        <Button
          type="submit"
          className="w-40 text-sm lg:text-base font-medium montserrat text-gray-800 hover:text-white bg-white hover:bg-gray-800 border border- duration-1000 transition-all mx-auto"
          outline
          disabled={loading || imageFileUploading}
        >
          {loading ? "Loading..." : "Update"}
        </Button>

        {publishError && (
          <Alert color="failure" className="mt-1">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}

















// import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { useEffect, useState } from "react";
// import "react-circular-progressbar/dist/styles.css";
// import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import {
//   updateStart,
//   updateSuccess,
//   updateFailure,
//   deleteUserStart,
//   deleteUserSuccess,
//   deleteUserFailure,
//   signoutSuccess,
// } from "../redux/user/userSlice";
// import { json, Link } from "react-router-dom";

// export default function UpdatePost() {
//   const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
//   const [imageFileUploading, setImageFileUploading] = useState(false);
//   const { currentUser, error, loading } = useSelector((state) => state.user);
//   const [file, setFile] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [publishError, setPublishError] = useState(null);
//   const { postId } = useParams();
//   const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
//   const [updateUserError, setUpdateUserError] = useState(null);
//   const navigate = useNavigate();
//   // const { currentUser } = useSelector((state) => state.user);

//   useEffect(() => {
//     try {
//       const fetchPost = async () => {
//         const res = await fetch(`/api/post/getposts?postId=${postId}`);
//         const data = await res.json();
//         if (!res.ok) {
//           console.log(data.message);
//           setPublishError(data.message);
//           return;
//         }
//         if (res.ok) {
//           setPublishError(null);
//           setFormData(data.posts[0]);
//         }
//       };

//       fetchPost();
//     } catch (error) {
//       console.log(error.message);
//     }
//   }, [postId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = new FormData();
//       Object.entries(formData).forEach(([key, value]) => {
//         payload.append(key, value);
//       });
//       payload.append("image", file);
//       console.log("formData",formData)
//       const res = await fetch(
//         `/api/post/updatepost/postId${postId}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });
        
      
//       const data = await res.json();
//       if (!res.ok) {
//         setPublishError(data.message);
//         return;
//       }

//       setPublishError(null);
//       // navigate(`/post/${data.slug}`);
//     } catch (error) {
//       setPublishError("Something went wrong with the update blog");
//     }
//   };
//   return (
//     <div className="p-3 max-w-7xl w-full mx-auto min-h-screen">
//       <h1 className="text-center text-3xl my-7 font-semibold">Update post</h1>
//       <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//         <div className="flex flex-col gap-4 sm:flex-row justify-between">
//           <TextInput
//             type="text"
//             placeholder="Title"
//             required
//             id="title"
//             className="flex-1"
//             onChange={(e) =>
//               setFormData({ ...formData, title: e.target.value })
//             }
//             value={formData.title}
//           />
//           <Select
//             onChange={(e) =>
//               setFormData({ ...formData, category: e.target.value })
//             }
//             value={formData.category}
//           >
//             <option value="html">HTML</option>
//             <option value="css">CSS</option>
//             <option value="typescript">TypeScript</option>
//             <option value="nodejs">Node.js</option>
//             <option value="expressjs">Express.js</option>
//             <option value="vuejs">Vue.js</option>
//             <option value="angular">Angular</option>
//             <option value="svelte">Svelte</option>
//             <option value="graphql">GraphQL</option>
//             <option value="mongodb">MongoDB</option>
//             <option value="firebase">Firebase</option>
//             <option value="mysql">MySQL</option>
//             <option value="postgresql">PostgreSQL</option>
//             <option value="tailwindcss">Tailwind CSS</option>
//             <option value="bootstrap">Bootstrap</option>
//             <option value="webdev">Web Development</option>
//             <option value="frontend">Frontend</option>
//             <option value="backend">Backend</option>
//             <option value="fullstack">Full Stack</option>
//             <option value="devops">DevOps</option>
//             <option value="uiux">UI/UX Design</option>
//             <option value="cybersecurity">Cybersecurity</option>
//             <option value="datascience">Data Science</option>
//             <option value="machinelearning">Machine Learning</option>
//             <option value="python">Python</option>
//             <option value="java">Java</option>
//             <option value="csharp">C#</option>
//             <option value="golang">Go</option>
//             <option value="php">PHP</option>

//           </Select>
//         </div>
//         <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
//           <FileInput
//             type="file"
//             accept="image/*"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>
//         {formData.image && (
//           <img
//             src={formData.image}
//             alt="upload"
//             className="w-full h-72 object-cover"
//           />
//         )}
//         <ReactQuill
//           theme="snow"
//           value={formData.content}
//           placeholder="Write something..."
//           className="h-72 mb-12"
//           required
//           onChange={(value) => {
//             setFormData({ ...formData, content: value });
//           }}
//         />
//          <Button
//           type="submit"
//           className="w-40 text-sm lg:text-base font-medium montserrat text-gray-800 hover:text-white mx-auto"
//           outline
//           disabled={loading || imageFileUploading}>
//           {loading ? "Loading..." : "Update"}
//         </Button>
                
//         {updateUserSuccess && (
//           <Alert color="success" className="mt-5">
//             {updateUserSuccess}
//           </Alert>
//         )}
//         {updateUserError && (
//           <Alert color="failure" className="mt-1">
//             {updateUserError}
//           </Alert>
//         )}
//       {error && (
//         <Alert color="failure" className="mt-1">
//           {error}
//         </Alert>
//       )}
//       </form>
//     </div>
//   );
// }
