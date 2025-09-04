
const ReviewCard = ({name, role, image, feedback}) => {
  return (
    <div className='item border border-blue-500 rounded-2xl h-50 sm:h-75 w-100 sm:w-175 shadow-md p-5 sm:p-10 bg-[#04071D]'>
        <p className='text-base sm:text-2xl max-w-sm sm:max-w-2xl'>{feedback}</p>
        <div className='flex justify-between items-center mt-5 sm:mt-10'>
            <div className='flex gap-2 items-center'>
                <img src={image} alt={name} className='rounded-full size-15 sm:size-22' loading="lazy"/>
                <div>
                    <h2 className='text-lg sm:text-2xl font-semibold'>{name}</h2>
                    <p className='text-gray-400 font-semibold text-sm sm:text-lg'>{role}</p>
                </div>
            </div>
            <div className="flex gap-2">
                {Array(5).fill(null).map((_, i) => (
                    <img
                        key={i}
                        src="/star.png"
                        alt="Star Rating"
                        className="size-4 sm:size-9"
                        loading="lazy"
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default ReviewCard