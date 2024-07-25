import CardsGrid from "./sections/Myprojects/page";
import Education from "./sections/Education/page";
import Form from "./sections/Contact_form/page"
import Footer from "./sections/Footer/page"
import WorkExperience from "./sections/Work_Section/page"
import Sec from "./sections/Sec/page"
import Navbar from "./sections/Navbar/page";
import Profile from "./sections/Intro/page"
import Landing from "./sections/Landing/page";
function App() {


  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Landing/>
        <Profile />
        <CardsGrid />
        <Education />
         <Sec />
        <WorkExperience />
        <Form />
        <Footer />
      </div>
    </>
  )
}

export default App
