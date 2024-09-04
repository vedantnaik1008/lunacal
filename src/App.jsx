import './App.css'
import LeftScreen from './components/LeftScreen';
import RightWidget from './components/rightWidget';

function App() {
    return (
        <main className='bg-[#1E1E1E]'>
            <div className='mx-auto md:w-[80%]  mlg:w-[70%] xl:w-[90%]  py-14 grid md:grid-cols-1 md:gap-4 xl:grid-cols-2 xl:gap-0'>
                <LeftScreen />
                <RightWidget />
            </div>
        </main>
    );
}

export default App
