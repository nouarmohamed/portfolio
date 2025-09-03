import { testimonials } from "../lib/constants"
import ReviewCard from "./ReviewCard"

const Testimonials = () => {
  return (
    <section className="py-5 sm:py-20" id="testimonials">
        <h1 className="section-header">Voices of <span className='text-violet-500'>Trust</span></h1>
        <div className="slider w-full h-[300px] overflow-hidden">
          <div className="list">
            {testimonials.map((testimonial) => (
                <ReviewCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
    </section>
  )
}

export default Testimonials