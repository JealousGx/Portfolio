import NextImage from "next/image";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  testimonial: string;
  avatar: string;
  dateAdded: string;
  rating: number;
  project: string;
}

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  return (
    <section className="mt-16">
      <h2 className="mb-8 text-3xl font-bold">Testimonials</h2>

      <Swiper
        loop={true}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="flex"
      >
        {testimonials.map(testimonial => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;

const TestimonialCard = ({
  id,
  name,
  role,
  avatar,
  testimonial,
}: Testimonial) => {
  return (
    <div
      id={id}
      className="w-full flex flex-col items-center justify-center gap-4"
    >
      <h2 className="text-xl">&quot;{testimonial}&quot;</h2>

      <div className="mt-1 flex items-center space-x-2">
        <div className="mr-1 mt-1">
          <NextImage
            src={avatar}
            alt={`${name}&apos;s Avatar`}
            height={32}
            width={32}
            className="rounded-full filter grayscale"
          />
        </div>

        <p>{name}</p>

        <p className="text-gray-400">| {role}</p>
      </div>
    </div>
  );
};
