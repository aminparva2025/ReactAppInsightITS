import Image from "next/image";
import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import SoftwareDIMG from "@/public/images/InsightITsPics/Insight IT Solutions.gif";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
             AI and Engineers! The teamwork that we Offer for software development!
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Insight IT Solutions is the team you can engage to expand your business while ensuring satisfaction and maintaining focus.
                          </p>
                          <div>
                              <Image
                                  className="max-w-none"
                                  src={SoftwareDIMG}
                                  width={970}
                                  height={254}
                                  alt="Page illustration"
                              />
                          
                 </div>
                      
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Enterprise services
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#0"
                                  >
                                      <span className="relative inline-flex items-center">
                                          before Enterprise
                                          <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                                              -&gt;
                                          </span>
                                      </span>
                   
					
                  </a>
                </div>
              </div>
            </div>
                  </div>
                  <div className="py-12 md:py-20" >
                  I like to add IT Live Logos here
                  </div>
          {/*<ModalVideo  */}
          {/*  thumb={VideoThumb}*/}
          {/*  thumbWidth={1104}*/}
          {/*  thumbHeight={576}*/}
          {/*  thumbAlt="Modal video thumbnail"*/}
          {/*  video="videos//video.mp4"*/}
          {/*  videoWidth={1920}*/}
          {/*  videoHeight={1080}*/}
          {/*/>*/}
        </div>
      </div>
    </section>
  );
}
