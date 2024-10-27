
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';

const about = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-300 to-blue-500 flex h-screen flex-col"> 
        <Header></Header>
     <h1 className="p-16 text-center text-2xl">This is About Page</h1>
<Footer></Footer>
</div>
  )
}

export default about;
