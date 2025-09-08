import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ReadMoreText } from "../ui/ReadMoreText";

export default function Testimonials() {
 const testimonials = [
   {
     name: "Hospital Desk",
     text: "We had a patient consulting us for IVF. They had no insurance or financial back-up. On Finnova’s website we filled up a form to get the patient support. The couple’s cashless treatment was processed seamlessly.",
     stars: 4,
     disease: "IVF Partner Hospital",
   },
   {
     name: "Doctor Desk",
     text: "A patient wanted a hair transplant before his wedding but lacked funds. Instead of giving a heavy discount, I reached out to Finnova, a dynamic financial platform by Volo Health Services. The eligibility check was instant, the loan was disbursed the same day, and I could retain my patient.",
     stars: 5,
     disease: "Hair Transplant Partner Clinic ",
   },
   {
     name: "Doctor from partner hospital",
     text: "We had a patient whose liver had failed. He needed a transplant. The insurance cover was for ₹10 lakh. But the treatment cost was ₹16 lakh. The patient had already exhausted his financial resources on ongoing treatment. So, our hospital reached out to Finnova. Finnova stepped in with an effortless and fast loan process. Thanks to them, we could go ahead with the surgery, and the patient has now been discharged.",
     stars: 5,
     disease: "Partner Hospital ",
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
