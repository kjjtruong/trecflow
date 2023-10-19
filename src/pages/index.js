import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>    
    {/* Hero */}
    <section className="relatve">
      {/**  Container **/}
      <div className="bg-black mx-auto w-full px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/** Heading Div **/}
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
          <h1 className="text-white mb-4 text-4xl font-bold md:text-6xl leading-relaxed md:leading-tight">
            Pushing every aspect of your life to be better
          </h1>
        </div>
        {/** Image Div **/}
        <div className="relative max-w-7xl mx-auto h-[512px]">
          <StaticImage
            src="../images/retreat2020Photo2.jpeg"
            alt=""
            className="inline-block h-full w-full rounded-xl object-cover sm:rounded-2xl"
          />          
        </div>
      </div>      
    </section>

    <section id="mystory">
      {/*<!-- Container -->*/}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/*<!-- Component -->*/}
        <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 lg:grid-cols-2">
          {/*<!-- Heading Div -->*/}
          <div className="max-w-[720px]">
            <h5 className="mb-4 text-md font-semibold text-orange-500 uppercase">
              What is TRECFLOW and who is Jan Jaffer?
            </h5>
            <h2 className="mb-4 text-3xl font-semibold md:text-5xl md:leading-tight">
              My story is to be better. Not best.
            </h2>
            <p className="text-xl mb-6 max-w-[480px] md:mb-10 lg:mb-12">
              Born in St. John&apos;s Nfld, Jan was only two when the family
              moved to Calgary. He is the son of first-generation immigrants who
              had to flee Uganda as refugees, then lived in the UK before making
              Canada their final home. He was raised in a family that instilled
              in him strong values of hard work and giving back through
              volunteering from a young age. Tennis was a big part of his life
              during junior high and high school. Playing competitively at the
              provincial level taught Jan the importance of mental strength and
              the value of positive affirmation during tough matches.
            </p>
          </div>
          {/*<!-- Image Div -->*/}
          <div className="relative left-4 h-full max-h-[560px] w-[85%] overflow-visible md:left-0 md:w-[95%] lg:w-full">
            <StaticImage
              src="../images/jan-retreat-photo.jpeg"
              alt="Dr. Jan Jaffer speaking at the 2020 TREC Dental staff retreat"
              className="relative mx-auto block h-full w-full max-w-[800px] -rotate-[3.5deg] rounded-2xl object-cover"
            />
            <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative">
      {/* -- Container -- */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* -- Component -- */}
        <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 lg:grid-cols-2">
          {/* -- Image Div -- */}
          <div className="relative left-4 h-full max-h-[560px] w-[85%] md:left-0 md:w-[95%] lg:w-full order-last lg:order-first">
            <StaticImage
              src="../images/jan-presentation-photo.jpeg"
              alt="Dr. Jan Jaffer doing a wellness presentation"
              className="mx-auto block h-full w-full max-w-[800px] rotate-[3.5deg] rounded-2xl object-cover"
            />
            <div className="absolute bottom-0 left-[-16px] right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
          </div>
          {/* -- Heading Div -- */}
          <div className="max-w-[720px] lg:max-w-[842px]">
            <p className="text-xl mb-6 max-w-[480px] md:mb-10 lg:mb-12">
              Having decided at an early age that he wanted to follow his
              father&apos;s footsteps into a career in dentistry, Jan wasted no
              time in achieving this goal. Right out of high school, he
              completed the 5-year accelerated dental program at the University
              of the Pacific in San Francisco, where he graduated with his
              doctorate in 2002 at the age of 22. Upon graduation he was
              admitted into the OKU &#40;Omega Kappa Upsilon&#41; Fraternity for
              the top 10% of the graduating class.
            </p>
          </div>
        </div>
      </div>
      {/* -- BG Image --*/}
      <img
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6391689c5d1aa134d3ee64ab_Frame%20427322638.svg"
        alt=""
        className="bottom-0 left-auto right-0 top-auto hidden max-[991px]:-z-[1] lg:absolute lg:inline-block"
      />
    </section>

    <section>
      {/*<!-- Container -->*/}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/*<!-- Component -->*/}
        <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 lg:grid-cols-2">
          {/*<!-- Heading Div -->*/}
          <div className="max-w-[720px]">
            <p className="text-xl mb-6 max-w-[480px] md:mb-10 lg:mb-12">
              Upon graduating from dental school, Jan joined his father&apos;s
              family dental practice and was mentored on how to build and
              nurture caring relationships. He took the lead in converting the
              practice to be totally digital and paperless in 2003. It is this
              ethos of hard work, integrity and giving back to his patients,
              staff and the community, that has led Jan to develop the TREC
              Dental Partnership that operates 18 dental clinics in the Calgary
              area. All the TREC Clinics have a reputation for being beautifully
              designed and well-operated leading-edge facilities.
            </p>
          </div>
          {/*<!-- Image Div -->*/}
          <div className="relative left-4 h-full max-h-[560px] w-[85%] overflow-visible md:left-0 md:w-[95%] lg:w-full">
            <StaticImage
              src="../images/lip-photo.jpeg"
              alt="Dr. Jan Jaffer on the cover of LIPS"
              className="relative mx-auto block h-full w-full max-w-[800px] -rotate-[3.5deg] rounded-2xl object-cover"
            />
            <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative">
      {/* -- Container -- */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* -- Component -- */}
        <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 lg:grid-cols-2">
          {/* -- Image Div -- */}
          <div className="relative left-4 h-full max-h-[560px] w-[85%] md:left-0 md:w-[95%] lg:w-full order-last lg:order-first">
            <StaticImage
              src="../images/cups-photo.jpeg"
              alt=""
              className="mx-auto block h-full w-full max-w-[800px] rotate-[3.5deg] rounded-2xl object-cover"
            />
            <div className="absolute bottom-0 left-[-16px] right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
          </div>
          {/* -- Heading Div -- */}
          <div className="max-w-[720px] lg:max-w-[842px]">
            <p className="text-xl mb-6 max-w-[480px] md:mb-10 lg:mb-12">
              All of Jan&apos;s partners at these clinics share his passion for
              social consciousness and they are all actively involved in giving
              back to the community. In 2018, TREC Dental partnered with CUPS to
              operate a free dental clinic in Calgary providing care to some of
              Calgary&apos;s neediest citizens.
            </p>
          </div>
        </div>
      </div>
      {/* -- BG Image --*/}
      <img
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6391689c5d1aa134d3ee64ab_Frame%20427322638.svg"
        alt=""
        className="bottom-0 left-auto right-0 top-auto hidden max-[991px]:-z-[1] lg:absolute lg:inline-block"
      />
    </section>

    <section>
      {/*<!-- Container -->*/}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/*<!-- Component -->*/}
        <div className="grid grid-cols-1 items-center gap-12 sm:gap-20 lg:grid-cols-2">
          {/*<!-- Heading Div -->*/}
          <div className="max-w-[720px]">
            <p className="text-xl mb-6 max-w-[480px] md:mb-10 lg:mb-12">
              Jan regularly volunteers with Kindness in Action, Dentistry For
              All and the Alex Bus. He has been on 14 overseas dental missions
              to perform dentistry in remote communities in Guatemala, Peru,
              Tibet, Morocco and Ecuador. Jan is also very active in his local
              community. He is currently the Chair of the World Partnership Walk
              Calgary. He is passionate about health and fitness. He absolutely
              loves Crossfit and is the co-owner of TREC Fit Lab, a gym in
              Calgary that helps others get fit and healthy.
            </p>
          </div>
          {/*<!-- Image Div -->*/}
          <div className="relative left-4 h-full max-h-[560px] w-[85%] overflow-visible md:left-0 md:w-[95%] lg:w-full">
            <StaticImage
              src="../images/guatemala-photo.jpeg"
              alt="Dr. Jan Jaffer and Dr. Betty Pan on Dentistry For All Guatemal trip"
              className="relative mx-auto block h-full w-full max-w-[800px] -rotate-[3.5deg] rounded-2xl object-cover"
            />
            <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
          </div>
        </div>
      </div>
    </section>

    {/* PODCASTS */}
    <section id="podcasts">
      {/* -- Container -- */}
      <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/*-- Component -- */}
        <div className="mx-auto flex-col flex max-w-3xl items-center text-center mb-8 md:mb-12 lg:mb-16">
          <h5 className="mb-4 text-md font-semibold text-orange-500 uppercase">
            Podcasts & videos
          </h5>
          <h2 className="font-bold text-3xl md:text-5xl md:leading-tight">
            Listen to past interviews
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch">
          <div className="bg-black rounded-xl p-8 md:p-10 gap-0">
            <iframe
              src="https://open.spotify.com/embed/episode/41BsYnBUXXlTC4Z4E30l75?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="bg-black rounded-xl p-8 md:p-10 gap-0">
            <iframe
              src="https://open.spotify.com/embed/episode/3tyrBzJjA6vmmBxSd9jI3t?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="bg-black rounded-xl p-8 md:p-10 gap-0">
            <iframe
              src="https://open.spotify.com/embed/episode/2qcRhxZSVSzvi2iBqvDzvG?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="bg-black rounded-xl p-8 md:p-10 gap-0">
            <iframe
              src="https://open.spotify.com/embed/episode/6DSTJxsWiSqe6IK377wsX0?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    {/* PAST TALKS & EVENTS */}
    <section id="events">
      {/** Container **/}
      <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/**-- Component --**/}
        <div className="text-center mb-6 md:mb-10 lg:mb-12">
          <h5 className="text-md font-semibold text-orange-500 uppercase">
            Past talks & events
          </h5>
        </div>
        <div className="grid max-[479px]:justify-items-start grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-12 md:gap-6">
          <div className="flex items-center justify-center">
            <StaticImage
              src="../images/logo-henry-schein.png"
              alt="Henry Schein logo"
              className="inline-block"
            />
          </div>
          <div className="flex items-center justify-center">
            <StaticImage
              src="../images/logo_aga_khan.png"
              alt="Aga Khan Foundation Logo"
              className="inline-block"
            />
          </div>
          <div className="flex items-center justify-center">
            <StaticImage
              src="../images/logo_my_bite.png"
              alt="MyBite Logo"
              className="inline-block"
            />
          </div>
          <div className="flex items-center justify-center">
            <StaticImage
              src="../images/logo_straumann.png"
              alt="Straumann Logo"
              className="inline-block"
            />
          </div>
          <div className="flex items-center justify-center">
            <StaticImage
              src="../images/logo_pacific_dental_conference.png"
              alt="Pacific Dental Conference logo"
              className="inline-block"
            />
          </div>
        </div>
      </div>
    </section>

    {/* COACHING & SPEAKING */}
    <section id="speaking">
      {/* -- Container -- */}
      <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/*-- Component -- */}
        <div className="mx-auto flex-col">
          <h5 className="mb-4 text-md font-semibold text-orange-500 uppercase">
            Coaching & speaking
          </h5>
          <h2 className="font-bold text-3xl md:text-5xl mb-4 md:leading-tight">
            Help your team be better
          </h2>
          <div className="mb-8 md:mb-12 lg:mb-16">
            <p className="text-lg">
              Teaching is a passion of Jan&apos;s. He has always had a mindset
              of abundance. It is through this vision that he helps other
              organizations reach their potential. Continuous Improvement is the
              “C” in TREC, which to Jan means learning and then sharing this
              knowledge.
            </p>
            <p className="text-lg">
              Jan has been invited to speak at national meetings on practice
              management and team empowerment. He truly believes that successful
              enterprises grow by having amazing teams &#40;the “T” in TREC&#41;
              that work to make each other on the team better.
            </p>
            <p className="text-lg">
              Jan is currently a lecturer with Straumann Dental in the field of
              restorative implant dentistry. He also works with Henry Schein to
              teach other dentists on how to run better organizations.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch">
          <div className="bg-[#f2f2f7] rounded-xl p-8 md:p-10 gap-0">
            <div className="flex-row flex items-center justify-between">
              <p className="mr-4 bg-[#c4c4c4] px-4 py-2 font-semibold uppercase rounded-md">
                Speaking topic
              </p>
            </div>
            <div className="mb-10 mt-4 w-full bg-[#c4c4c4] h-0.5"></div>
            <div className="max-w-lg">
              <p className="text-xl font-semibold">
                Building the Ultimate Team
              </p>
              <p className="text-[#636262]">
                In the lecture, &apos;Building the Ultimate Team&apos;, Dr.
                Jaffer explores the crucial elements required to establish a
                successful dental team. Drawing from his extensive experience,
                he discusses the importance of effective communication and
                collaboration within the team to ensure optimal patient care and
                satisfaction. Attendees will gain valuable insights on improving
                teamwork, fostering a positive work environment, and ultimately
                enhancing the overall success of their dental practices.
              </p>
            </div>
          </div>
          <div className="bg-[#f2f2f7] rounded-xl p-8 md:p-10 gap-0">
            <div className="flex-row flex items-center justify-between">
              <p className="mr-4 bg-[#c4c4c4] px-4 py-2 font-semibold uppercase rounded-md">
                Speaking topic
              </p>
            </div>
            <div className="mb-10 mt-4 w-full bg-[#c4c4c4] h-0.5"></div>
            <div className="max-w-lg">
              <p className="text-xl font-semibold">
                5 Characteristics of an Ideal Team Member
              </p>
              <p className="text-[#636262]">
                In the lecture, '5 Characteristics of an Ideal Team Member', Dr.
                Jaffer uncovers the essential traits that contribute to the
                success of a team member. Drawing upon real-life examples and
                research, he delves into qualities such as reliability,
                adaptability, strong communication skills, accountability, and a
                positive attitude that are vital for individuals seeking to
                become valuable assets in any team setting. Attendees can expect
                to gather practical insights and strategies to identify and
                develop these characteristics, ultimately fostering a highly
                effective and harmonious team environment.
              </p>
            </div>
          </div>
          <div className="bg-[#f2f2f7] rounded-xl p-8 md:p-10 gap-0">
            <div className="flex-row flex items-center justify-between">
              <p className="mr-4 bg-[#c4c4c4] px-4 py-2 font-semibold uppercase rounded-md">
                Speaking topic
              </p>
            </div>
            <div className="mb-10 mt-4 w-full bg-[#c4c4c4] h-0.5"></div>
            <div className="max-w-lg">
              <p className="text-xl font-semibold">
                How Bonuses are detrimental to Organizations (and What You Can
                Do Instead)
              </p>
              <p className="text-[#636262]">
                In the lecture, 'How Bonuses are Detrimental to Organizations',
                Dr. Jan Jaffer, challenges the traditional belief that bonuses
                are effective motivators for employees. Through extensive
                research and case studies, he explores the unintended
                consequences of bonus systems, including fostering a short-term
                mindset, diminishing intrinsic motivation, and creating
                unhealthy competition within teams. Attendees will gain a fresh
                perspective on incentivization strategies and learn alternative
                approaches to cultivate a more engaged and sustainable
                organizational culture.
              </p>
            </div>
          </div>
          <div className="bg-[#f2f2f7] rounded-xl p-8 md:p-10 gap-0">
            <div className="flex-row flex items-center justify-between">
              <p className="mr-4 bg-[#c4c4c4] px-4 py-2 font-semibold uppercase rounded-md">
                Speaking topic
              </p>
            </div>
            <div className="mb-10 mt-4 w-full bg-[#c4c4c4] h-0.5"></div>
            <div className="max-w-lg">
              <p className="text-xl font-semibold">Limitless Possibilities </p>
              <p className="text-[#636262]">
                In the captivating lecture, 'Limitless Possibilities', Dr.
                Jaffer takes attendees on a transformative journey to unlock
                their full potential. Drawing from personal experiences and
                cutting-edge research, Dr. Jaffer explores the power of mindset,
                resilience, and embracing uncertainty, inspiring audiences to
                push past self-imposed limitations. This engaging talk offers
                practical strategies and tools for individuals to overcome
                obstacles, pursue their dreams, and create a future filled with
                limitless possibilities.
              </p>
            </div>
          </div>
          <div className="bg-[#f2f2f7] rounded-xl p-8 md:p-10 gap-0">
            <div className="flex-row flex items-center justify-between">
              <p className="mr-4 bg-[#c4c4c4] px-4 py-2 font-semibold uppercase rounded-md">
                Speaking topic
              </p>
            </div>
            <div className="mb-10 mt-4 w-full bg-[#c4c4c4] h-0.5"></div>
            <div className="max-w-lg">
              <p className="text-xl font-semibold">
                Building a Values Based Organization
              </p>
              <p className="text-[#636262]">
                In the enlightening lecture, 'Building a Values Based
                Organization', Dr. Jaffer delves into the significance of
                establishing a culture rooted in strong values within dental
                practices. Drawing from firsthand experience and case studies,
                he highlights how aligning organizational values with the
                mission and vision not only enhances patient care but also
                drives employee engagement and loyalty. Attendees can expect to
                gain valuable insights into creating a values-driven environment
                that fosters teamwork, ethical decision-making, and long-term
                success in the dental field.
              </p>
            </div>
          </div>
          <div className="bg-[#f2f2f7] rounded-xl p-8 md:p-10 gap-0">
            <div className="flex-row flex items-center justify-between">
              <p className="mr-4 bg-[#c4c4c4] px-4 py-2 font-semibold uppercase rounded-md">
                Speaking topic
              </p>
            </div>
            <div className="mb-1  0 mt-4 w-full bg-[#c4c4c4] h-0.5"></div>
            <div className="max-w-lg">
              <p className="text-xl font-semibold">
                Maximizing Your Dental Practice's Bottom Line: Strategies for
                Financial Success
              </p>
              <p className="text-[#636262]">
                This comprehensive course is designed for dentists and practice
                owners seeking to enhance their understanding and utilization of
                key factors that contribute to a thriving dental practice. Led
                by TREC Dental's CEO, Dr. Jan Jaffer, this lecture will provide
                valuable insights and practical tips to help you improve your
                practice's financial performance and overall profitability. Key
                topics covered in this course include understanding and
                leveraging Key Performance Indicators (KPIs), utilizing
                technology to streamline operations, and optimizing the
                contribution of your team members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* TESTIMONIAL */}
    <section id="testimonials">
      {/* -- Container -- */}
      <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/*-- Component -- */}
        <div className="mx-auto flex-col">
          <h5 className="mb-4 text-md font-semibold text-orange-500 uppercase">
            Praise
          </h5>
          <h2 className="font-bold text-3xl md:text-5xl mb-4 md:leading-tight">
            What people say about TRECFLOW.
          </h2>
          <div className="mb-8 md:mb-12 lg:mb-16">
            <p className="text-2xl">
              "Jan Jaffer has lectured on behalf of Straumann on a variety of
              topics, and each time he has delivered superior content via a
              well-planned presentation. Dr. Jaffer is engaging and informative
              as a speaker. He knows how to create a dynamic lecture, and his
              interaction with the audience makes for an enjoyable learning
              environment."
            </p>
            <h6 className="uppercase">— Meghann Fallon, Territory Manager</h6>
          </div>
        </div>
      </div>
    </section>

    {/* CONTACT */}
    <section id="contact">
      {/** Container **/}
      <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/**-- Component --**/}
        <div className="text-center mb-6 md:mb-10 lg:mb-12">
          <h5 className="mb-4 text-md font-semibold text-orange-500 uppercase">
            Reach out
          </h5>
          <h2 className="font-bold text-3xl md:text-5xl mb-4">
            Get in touch with me
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          <div className="flex items-center justify-center">
            <a
              href="https://ca.linkedin.com/in/jan-jaffer-5ab70674"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="https://img.icons8.com/metro/52/000000/linkedin.png" />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://www.instagram.com/dr.trec/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="https://img.icons8.com/metro/52/000000/instagram-new.png" />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://www.facebook.com/janjaffer"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="https://img.icons8.com/metro/52/000000/facebook.png" />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a href="mailto:drjan@trecflow.com">
              <img src="https://img.icons8.com/metro/52/000000/open-envelope.png" />
            </a>
          </div>          
        </div>
      </div>
    </section>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
