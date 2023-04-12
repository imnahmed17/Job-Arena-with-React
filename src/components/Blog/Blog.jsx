import React from 'react';
import Banner2 from '../Banner/Banner2';

const Blog = () => {
    return (
        <div>
            {/* Sub Banner */}
            <div className='bg-banner'>
                <Banner2>Blog</Banner2>
            </div>

            {/* Questions and Answers */}
            <div className='my-container mt-5'>
                <div className='max-w-screen-xl sm:mx-auto'>
                    <div className='grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2'>
                        <div className='space-y-8'>
                            <div>
                                <p className='mb-4 text-xl font-medium'>When should you use context API?</p>
                                <p className='text-gray-700 text-justify'>
                                    Context API is a feature in React that allows you to pass data through the component tree without having to pass props down manually at every level. We should use Context API in React when we have:
                                    <br />
                                    <br />
                                    <ul className='dashed-list'>
                                        <li>Data that needs to be shared across multiple components.</li>
                                        <li>Nested components that make passing props down cumbersome.</li>
                                        <li>Complex data structures that would be difficult to manage with prop drilling.</li>
                                    </ul>
                                </p>
                            </div>
                            <div>
                                <p className='mb-4 text-xl font-medium'>What is useRef?</p>
                                <p className='text-gray-700 text-justify'>
                                    useRef is a React hook that allows us to create a mutable variable that persists across component renders. It can be used to get a reference to a DOM node or element within a functional component, and manipulate it directly, without having to traverse the React component hierarchy.
                                    <br />
                                    <br />
                                    It's commonly used for setting focus on an input field, managing animations, integrating with third-party libraries, and more.
                                </p>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div>
                                <p className='mb-4 text-xl font-medium'>What is a custom hook?</p>
                                <p className='text-gray-700 text-justify'>
                                    Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. 
                                    <br />
                                    <br />
                                    Custom hooks are named with the prefix "use" and can be used to extract stateful logic and side effects from components into separate functions. By providing an easy way to share logic between components, custom hooks can help simplify code and reduce duplication.
                                </p>
                            </div>
                            <div>
                                <p className='mb-4 text-xl font-medium'>What is useMemo?</p>
                                <p className='text-gray-700 text-justify'>
                                    useMemo is a hook in React that memoizes the result of a function so that it's only recomputed when one of its dependencies changes. It's used to optimize performance by avoiding unnecessary recalculations. 
                                    <br />
                                    <br />
                                    useMemo should be used sparingly because caching can also add overhead and memory usage. Only use it for functions that are computationally expensive or depend on expensive external data sources.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;