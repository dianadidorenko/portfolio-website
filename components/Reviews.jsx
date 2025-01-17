"use client";
import Image from "next/image";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const reviewsData = [
  {
    avatar: "/assets/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Chef",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex nam atque dolores dicta deserunt",
  },
  {
    avatar: "/assets/reviews/avatar-2.png",
    name: "Evelyn Anderson",
    job: "Interior Design",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex nam atque dolores dicta deserunt",
  },
  {
    avatar: "/assets/reviews/avatar-3.png",
    name: "John Doe",
    job: "Game Dev",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex nam atque dolores dicta deserunt",
  },
  {
    avatar: "/assets/reviews/avatar-4.png",
    name: "Emily Smith",
    job: "Therapist",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex nam atque dolores dicta deserunt",
  },
];

const Reviews = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => (
            <SwiperSlide key={index}>
              <Card className="bg-tertiaty dark:bg-secondary/40 p-8 min-h-[300px]">
                <CardHeader className="p-0 mb-10">
                  <div className="flex items-center gap-x-4">
                    {/* image */}
                    <Image
                      src={person.avatar}
                      width={70}
                      height={70}
                      alt=""
                      priority
                    />
                    {/* name */}
                    <div className="flex flex-col">
                      <CardTitle>{person.name}</CardTitle>
                      <p>{person.job}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className="text-lg text-muted-foreground">
                  {person.review}
                </CardDescription>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
