import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ReadMoreText } from "../ui/ReadMoreText";

export default function Testimonials() {
 const testimonials = [
   {
     name: "Jitendra and Priya Bhargav",
     text: "Preparing to become parents was overwhelming- the procedures, the wait and especially, the cost. We were in two minds till our doctor suggested Finnova’s smart EMI option. We got the loan instantly. After 2 months of treatment, we are expecting! We could come so far because of Finnova.",
     stars: 5,
     disease: "IVF Couple",
   },
   {
     name: "Prof M Srinivasan",
     text: "My father needed a pacemaker and our insurance cover was for ₹ 3 lakh. The treatment, however, was for ₹ 4 lakh. It was a medical emergency we were not prepared for. We asked the hospital to help us. They shared my details with Finnova. The team called me back, checked my eligibility on the call after I shared the KYC. And the very day, I was given the confirmation that I was eligible for a loan of ₹ 1 lakh. Dad got the surgery and the insurance company and Finnova paid the hospital for the treatment. It was a hassle-free experience with Finnova.",
     stars: 4,
     disease: "Heart Surgery",
   },
   {
     name: "Sumona Vishwakarma",
     text: "I met with an accident. I needed root canal treatment and implants. The expenses were sudden and we had all the family savings on my brother’s admission in MBA. The treatment was urgent as my front teeth were broken. Then the dentist told us about Finnova. I instantly found out I was eligible and the dentists were paid on time! Look at me now, I am smiling again with confidence.",
     stars: 3,
     disease: "Dental Support",
   },
   
 ];

  return (
    <section className="py-4 md:py-12 bg-purplePrimary" id="testimonials">
      <div className="container max-w-6xl mx-auto text-center">
        {/* center the slider and constrain width so it looks like your screenshot */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-5xl p-4">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000, disableOnInteraction: true }}
              // use a custom pagination container rendered below the Swiper
              pagination={{ el: ".testimonial-pagination", clickable: true }}
              spaceBetween={20}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 3 }, // single centered card like screenshot
              }}
              className="testimonial-swiper"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i} className="flex justify-center">
                  <div className="bg-white border rounded-3xl shadow-sm p-6 max-w-sm w-full min-h-[200px] flex flex-col justify-between text-left">
                    <h3 className="text-lg font-semibold text-purpleSecondary mb-2">
                      {t.disease}
                    </h3>

                    <ReadMoreText text={t.text} />

                    <p className="text-darkGray mb-4 text-sm text-right">
                      - {t.name}
                    </p>

                    <div className="flex gap-1">
                      {[...Array(t.stars)].map((_, idx) => (
                        <svg
                          key={idx}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="w-5 h-5 text-yellow-500"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.071 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.071 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* custom pagination container: dots will be placed here */}
            <div className="testimonial-pagination flex justify-center mt-6 "></div>
          </div>
        </div>
      </div>
    </section>
  );
}
