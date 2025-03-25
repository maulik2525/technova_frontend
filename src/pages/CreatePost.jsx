import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        payload.append(key, value);
      });
      payload.append("image", file);

      const res = await fetch("/api/post/createPost", {
        method: "POST",
        body: payload,
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
      setPublishError(null);
      navigate(`/post/${data.slug}`);
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <div className="my-7 space-y-5">
        <img src="/tittle.svg" alt="" className="mx-auto zoom-in-zoom-out" />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium lg:font-semibold text-center border-dashed border-black fraunces">
          Create a blog
        </h1>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1 text-lg font-medium text-grey-900 montserrat"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <Select
            className="flex-1 text-lg font-medium text-grey-900 montserrat"
            required
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
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
            multiple
            className="text-base font-medium montserrat"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        {/* Display Image or Video Preview */}
        {file && (
          file.type.startsWith("image/") ? (
            <img src={URL.createObjectURL(file)} alt="preview" className="w-full h-72 object-cover" />
          ) : file.type.startsWith("video/") ? (
            <video controls className="w-full h-72 object-cover">
              <source src={URL.createObjectURL(file)} type={file.type} />
              Your browser does not support the video tag.
            </video>
          ) : null
        )}

        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <Button
          type="submit"
          gradientDuoTone="purpleToPink"
          className="montserrat text-base font-medium bg-gradient-to-r from-green-500 to-blue-500 border border-transparent hover:bg-white"
        >
          Publish
        </Button>
        {publishError && (
          <Alert className="mt-5" color="failure">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}




































// import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
// import { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import "react-circular-progressbar/dist/styles.css";
// import { useNavigate } from "react-router-dom";

// export default function CreatePost() {
//   const [file, setFile] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [publishError, setPublishError] = useState(null);

//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = new FormData();
//       Object.entries(formData).forEach(([key, value]) => {
//         payload.append(key, value);
//       });
//       payload.append("image", file);

//       const res = await fetch("/api/post/createPost", {
//         method: "POST",
//         body: payload,
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         setPublishError(data.message);
//         return;
//       }
//       setPublishError(null);
//       navigate(`/post/${data.slug}`);
//     } catch (error) {
//       setPublishError("Something went wrong");
//     }
//   };
//   return (
//     <div className="p-3 max-w-3xl mx-auto min-h-screen">
//       <div className="my-7 space-y-5">
//         <img src="/tittle.svg" alt="" className="mx-auto zoom-in-zoom-out"/>
//         <h1 className=" text-2xl md:text-3xl lg:text-4xl font-medium lg:font-semibold text-center border-dashed border-black fraunces">Create a blog</h1>
//       </div>
//       <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//         <div className="flex flex-col gap-4 sm:flex-row justify-between">
//           <TextInput
//             type="text"
//             placeholder="Title"
//             required
//             id="title"
//             className="flex-1 text-lg font-medium text-grey-900 montserrat"
//             onChange={(e) =>
//               setFormData({ ...formData, title: e.target.value })
//             }
//           />
//           <Select className="flex-1 text-lg font-medium text-grey-900 montserrat" required
//             onChange={(e) =>
//               setFormData({ ...formData, category: e.target.value })}>
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
//             accept="image/*,video/*"
//             multiple
//             className="text-base font-medium montserrat"
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
//           placeholder="Write something..."
//           className="h-72 mb-12"
//           required
//           onChange={(value) => {
//             setFormData({ ...formData, content: value });
//           }}
//         />
//         <Button type="submit" gradientDuoTone="purpleToPink" className="montserrat text-base font-medium bg-gradient-to-r from-green-500 to-blue-500 border border-transparent hover:bg-white">
//           Publish
//         </Button>
//         {publishError && (
//           <Alert className="mt-5" color="failure">
//             {publishError}
//           </Alert>
//         )}
//       </form>
//     </div>
//   );
// }
