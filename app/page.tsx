import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className='bg-blue fixed top-0 h-screen w-screen' >
      <div className='absolute top-0 left-0 text-white text-center'>
        <h1>Lucky 13 Rescue</h1>
        <p>You can't change a dog's past, but you can rewrite their future!</p>
        <p>Adopt • Foster • Volunteer • Donate • Advocate</p>
      </div>
      <Image className='mix-blend-overlay object-cover h-full w-full object-center relative top-0'  alt='' height={2000} width={2000} src={'/IMG_6059 2.jpg.jpg'} />
    </div>
    </>
  )
}
