export default function Footer(){
    return (
        <footer className='bg-blue p-2 md:p-7 w-full h-[50vh] md:h-[20vh] grid grid-cols-[25%_75%] grid-rows-[20%_40%_40%] md:grid-cols-[20%_40%_40%] md:grid-rows-[80%_20%]'>
            <div className='bg-white h-[100%] w-[100%] col-span-2 md:col-start-2 md:col-span-1'>

            </div>
            <div className='bg-lightblue h-[100%] w-[100%] md:col-start-3'>

            </div>
            <div className='bg-black h-[100%] w-[100%] md:col-start-1 md:row-start-1'>

            </div>
            <div className='bg-yellow h-[100%] w-[100%] row-start-2 row-span-2 md:row-span-1 md:col-start-3 md:row-start-2'>

            </div>
        </footer>
    )
}