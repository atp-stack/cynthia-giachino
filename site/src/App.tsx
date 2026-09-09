import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Books from './components/Books'
import Quote from './components/Quote'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Books />
        <Quote />
      </main>
      <Footer />
    </div>
  )
}
