import React from 'react';
import { useForm} from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("process.env.REACT_APP_FORMSPREE_URL");
console.log("the stat3e is ",state)
  return (
    <div id="Contact" className="flex justify-center items-center h-screen bg-bgColor text-white">
      <div className="grid grid-cols-2 gap-10 p-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">GET IN TOUCH</h2>
          <p className="mb-2">Tamil Nadu</p>
          <p className="mb-2">IIT Hyderabad, Telangana</p>
          <p className="mb-2">
  <a href="mailto:mkaif7736@gmail.com" className=" hover:underline">
    mkaif7736@gmail.com
  </a>
</p>
<p className="mb-2">
  <a href="mailto:ic22btech11005@iith.ac.in" className=" hover:underline">
    ic22btech11005@iith.ac.in
  </a>
</p>

          <h3 className="text-2xl font-bold mt-6">Downloads</h3>
          <p>Resume</p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                className="w-1/2 p-2 bg-gray-800 border border-gray-600 focus:outline-none focus:border-white" 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                className="w-1/2 p-2 bg-gray-800 border border-gray-600 focus:outline-none focus:border-white" 
              />
            </div>
            <input 
              type="text" 
              name="subject"
              placeholder="Subject" 
              className="w-full p-2 bg-gray-800 border border-gray-600 focus:outline-none focus:border-white" 
            />
            <textarea 
              name="message"
              placeholder="Message" 
              className="w-full p-2 h-40 bg-gray-800 border border-gray-600 focus:outline-none focus:border-white"
            ></textarea>
            <button 
              type="submit" 
              className="w-full p-2 bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
          {state.succeeded && <p>Message sent successfully!</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
