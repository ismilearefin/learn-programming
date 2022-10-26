import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="flex flex-col my-5 ">    
                <div className="grid p-5 card bg-base-300 rounded-box place-items-center">
                    <h3 className='text-2xl font-bold'>what is cors?</h3>
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div> 
                <div className="divider"></div> 
                <div className="grid p-5 card bg-base-300 rounded-box place-items-center">
                    <h3 className='text-2xl font-bold'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p>Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps. Here's why you should use it! Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</p>
                    <p>- Auth0, MongoDB, Passport and Okta are the most popular alternatives and competitors to Firebase Authentication.</p>
                </div>
            </div>
            <div className="divider"></div> 
            <div className="flex flex-col my-5 ">    
                <div className="grid p-5 card bg-base-300 rounded-box place-items-center">
                    <h3 className='text-2xl font-bold'>How does the private route work?</h3>
                    <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
                </div> 
                <div className="divider"></div> 
                <div className="grid p-5 card bg-base-300 rounded-box place-items-center">
                    <h3 className='text-2xl font-bold'>What is Node? How does Node work?</h3>
                    <p> Node “uses an event-driven, non-blocking I/O model.” In practice, this means that Node is built well to handle asynchronous JavaScript code to perform many asynchronous activities such as reading and writing to the file system, handling connections to database servers, or handling requests as a web server.To handle asynchronous code, Node uses a callback-based system. Node functions and methods that will implement some asynchronous activity take a callback function. This callback will be called whenever the asynchronous operation has resolved. By convention, the first argument of this callback is an error placeholder. If an error occurred in the asynchronous operation occurred (trying to read a non-existent file, for example), the error argument will be an Error object, but it will be null if no error occurs.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;