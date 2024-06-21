import CardsGrid from "./sections/Myprojects/projects";
import Education from "./sections/Education/page";
import Form from "./sections/Contact_form/page"
import Footer from "./sections/Footer/page"
function App() {


  return (
    <>
      <div className="bg-white">

        <CardsGrid />
        <Education />
        <Form />
        <Footer />
      </div>
    </>
  )
}

export default App
