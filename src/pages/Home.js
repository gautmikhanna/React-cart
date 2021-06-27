import Products from '../components/Products'

const Home = () => {
return (
    <>
    <div className="hero py-16">
<div className="container mx-auto flex items-center justify-centre">
<div className="w-1/2" style={{padding:40}}>
<h6 className="text-lg"><en> Are You Hungry?</en> </h6>
<h1 className="text-3xl md:text-6xl font-bold ">Don't Wait !</h1>
<button className="px-6 py-3 rounded-full text-white font-bold mt-4 bg-pink-400 hover:bg-pink-600">Order Now</button>
</div>
<div lassName="w-1/2">
    <img className="w-4/5" style={{width:375,padding:30}} src="/images/home.png" alt="ice" />
</div>
</div>
<div className="pb-24"></div>
<Products />
    </div>
    </>
)
}

export default Home;