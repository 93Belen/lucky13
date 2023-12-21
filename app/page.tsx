import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className='bg-blue absolute top-0 h-screen w-screen' >
      <Image className='mix-blend-overlay object-cover h-full w-full object-center'  alt='' height={2000} width={2000} src={'/IMG_6059 2.jpg.jpg'} />
    </div>
    </>
  )
}
