import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';


const Contact = () => {
  return (
 <div  className="bg-gradient-to-r from-cyan-200 to-pink-500 flex h-screen flex-col">
<Header></Header>
      <h1 className="p-16 text-center text-2xl">This is Contact Page</h1>
      <Footer></Footer>
    </div>
  )
}

export default Contact
