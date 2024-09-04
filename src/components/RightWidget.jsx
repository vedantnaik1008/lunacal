
import Tabs from './Tabs'
import Gallery from './Gallery'

const RightWidget = () => {
  return (
      <section className=''>
          <Tabs />
          <hr className='mt-6 mb-4 w-[85%] mx-auto rounded-[2.45933px] shadow-[0px_4px_4px_#00000054]' />
          <Gallery />
          <hr className='mt-6 mb-4 w-[85%] mx-auto rounded-[2.45933px] shadow-[0px_4px_4px_#00000054]' />
      </section>
  );
}

export default RightWidget
