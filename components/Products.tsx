import Image from 'next/image'

const Products = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="w-11/12 mx-auto md:w-full">
      <div className="rounded-xl bg-white p-8 w-full">
        <Image
          src={image}
          alt={title}
          width={254}
          height={186}
          className="w-full h-48 object-cover rounded-xl"
          priority
        />
      </div>
      <div className="rounded-xl bg-white p-3 mt-5 w-full">
        <h1 className="text-lg text-center capitalize">{title}</h1>
      </div>
    </div>
  )
}

export default Products
