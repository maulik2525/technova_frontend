import { Button, Select, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    category: 'uncategorized',
  });

  console.log(sidebarData);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const sortFromUrl = urlParams.get('sort');
    const categoryFromUrl = urlParams.get('category');
    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
    }

    const fetchPosts = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/post/getposts?${searchQuery}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
        if (data.posts.length === 9) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };
    fetchPosts();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === 'searchTerm') {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }
    if (e.target.id === 'sort') {
      const order = e.target.value || 'desc';
      setSidebarData({ ...sidebarData, sort: order });
    }
    if (e.target.id === 'category') {
      const category = e.target.value || 'uncategorized';
      setSidebarData({ ...sidebarData, category });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', sidebarData.searchTerm);
    urlParams.set('sort', sidebarData.sort);
    urlParams.set('category', sidebarData.category);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/post/getposts?${searchQuery}`);
    if (!res.ok) {
      return;
    }
    if (res.ok) {
      const data = await res.json();
      setPosts([...posts, ...data.posts]);
      if (data.posts.length === 9) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  };
  return (
    <div className="w-full">
      <div className="max-w-[1480px] w-full px-5 mx-auto">
        <div className=''>
          <div className='p-7 w-full shadow-md my-3'>
            <form className='flex justify-between flex-wrap gap-5' onSubmit={handleSubmit}>
              <div className='flex items-center gap-2'>
                <label className='whitespace-nowrap font-semibold'>
                  Search Term:
                </label>
                <TextInput
                  placeholder='Search...'
                  id='searchTerm'
                  type='text'
                  value={sidebarData.searchTerm}
                  onChange={handleChange}/>
              </div>
              <div className='flex items-center gap-2'>
                <label className='font-semibold'>Sort:</label>
                <Select onChange={handleChange} value={sidebarData.sort} id='sort'>
                  <option value='desc'>Latest</option>
                  <option value='asc'>Oldest</option>
                </Select>
              </div>
              <div className='flex items-center gap-2'>
                <label className='font-semibold'>Category:</label>
                <Select
                  onChange={handleChange}
                  value={sidebarData.category}
                  id='category'>
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
              <Button type='submit' outline gradientDuoTone='purpleToPink' className='montserrat text-base font-medium bg-gradient-to-r from-[#2aceb6] to-blue-400 border border-transparent hover:bg-white'>
                Apply Filters
              </Button>
            </form>
          </div>
          <div className="">
              <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 fraunces p-3 my-5">
                Posts results:
              </h1>
            <div className="flex flex-col justify-center w-fit">
              <div className="flex justify-center flex-wrap gap-10 mx-auto my-5 w-fit">
                {!loading && posts.length === 0 && (
                  <p className="text-xl text-gray-500 col-span-3 text-center">No Blog Posts Found.</p>
                )}
                {loading && (
                  <p className="text-xl text-gray-500 col-span-3 text-center">Loading...</p>
                )}
                {!loading &&
                  posts &&
                  posts.map((post) => <PostCard key={post._id} post={post} />)}
              </div>
              {showMore && (
                <button
                  onClick={handleShowMore}
                  className="w-40 text-lg font-medium text-teal-500 hover:text-white bg-white hover:bg-gradient-to-r from-[#2aceb6] to-blue-400 border border-teal-500 rounded-xl duration-500 transition-all p-2 px-5 mx-auto">
                  Show More
                </button>
              )}
            </div> 
          </div>   
        </div>
      </div>  
    </div>  
  );
}
