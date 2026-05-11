import Hero from '../common/hero'
import Category from '../common/category'
import TopSelling from '../common/topSelling'
import EasyAndFast from '../common/easyFast'
import Testimonials from '../common/testimonials'
import Logos from '../common/logos'
import Banner from '../common/banner'

const Outlet = () => {
  return (
    <div  className='w-full  z-40   flex flex-col  gap-4 '>
      <Hero />
      <Category />
      <TopSelling />
      <EasyAndFast />
      <Testimonials />
      <Logos />
      <Banner />
    </div>
  )
}

export default Outlet
