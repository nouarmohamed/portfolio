import React from 'react'

const ReviewCard = ({name, role, image, feedback, position}) => {
  return (
    <div style={{ "--position": position } as React.CSSProperties} className='item border-3 border-blue-950 rounded-2xl shadow-md p-10 bg-[#04071D]'>
        <p className='text-2xl max-w-2xl'>{feedback}</p>
        <div className='flex justify-between items-center mt-10'>
            <div className='flex gap-5 items-center'>
                <img src={image} alt={name} className='rounded-full size-22'/>
                <div>
                    <h2 className='text-2xl font-semibold'>{name}</h2>
                    <p className='text-gray-400 font-semibold text-lg'>{role}</p>
                </div>
            </div>
            <div className="flex gap-2">
                {Array(5).fill(null).map((_, i) => (
                    <img
                        key={i}
                        src="/star.png"
                        alt="Star Rating"
                        className="size-9"
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default ReviewCard