import Image from 'next/image'
import exclaim from '../public/images/exclaim.svg'
import Sparkles from '../components/Sparkle'
import cookieImage from '../public/images/cookies.svg'
import Question from '../components/Question'

export default function Index() {
  return (
    <>
      <header>
        <h5>hackers are back...</h5>
        <h2>
          <Sparkles style={{ display: 'inline-flex' }}>Charlotte Coding Club</Sparkles>
        </h2>
        <h6>Wednesdays, March 15-April 19 &middot; 2:15 - 3:30pm &middot;</h6>
        <h6>Charlotte Library</h6>
      </header>
      <section
        className="section-special-padding"
        style={{
          display: 'flex',
          padding: '4rem 2rem 1rem 2rem',
          marginInline: '2rem'
        }}>
        <div className="cookies">
          <Image alt="Cookie" id="cookie1" src={cookieImage} />
          <Image alt="Cookie" id="cookie2" src={cookieImage} />
        </div>
        <div id="about" style={{ position: 'relative', zIndex: '999' }}>
           <h1>Coding for 5th-12th graders</h1>
          <p>We're a group of Charlotte students who get together for 6-week sessions of coding. It's free and everyone is welcome, regardless of coding levels.</p>
          <p>We are part of a nationwide community of hackers at Hack Club, and you can meet more teenagers who code
              on{' '}
            <a
              href="https://hackclub.com/slack/"
              target="_blank"
              rel="noreferrer">
              the Hack Club Slack
            </a>
            !
          </p>


          <p>To sign up please add your name and email to this sheet:
          <button type="button">
            <a href="https://docs.google.com/spreadsheets/d/1kkIoclxYr6mVrl6VxoF0_BXI9d9JY0z6_qECvmGZ1hU/edit?usp=sharing" >Click here to reserve your spot</a></button>
          </p>


          <p>Then, see you child on March 15th at 2:15pm for the first of 6 weekly meetups! </p>
        </div>
        <div className="cookies">
          <Image alt="Cookie" id="cookie3" src={cookieImage} />
          <Image alt="Cookie" id="cookie4" src={cookieImage} />
          <Image alt="Cookie" id="cookie5" src={cookieImage} />
        </div>
      </section>
      <section>
        <div id="gallery">
          <div style={{ transform: `rotate(3deg)` }}>
            <img alt="Image" src="https://cloud-3jp8cz0x7-hack-club-bot.vercel.app/0img_4813.jpg" />
            <p>
              <a
                href="https://editor.sprig.hackclub.com/"
                target="_blank"
                rel="noreferrer">
                Making a video game 
              </a>
              , with Sprig
            </p>
          </div>


          <div style={{ transform: `rotate(-2deg)` }}>
            <img alt="Image" src="https://cloud-bwnly55jq-hack-club-bot.vercel.app/0img_6275.jpg" />
            <p>
              Coding in Python for FIRST Robotics competition {' '}
              
            </p>
          </div>

          <div style={{ transform: `rotate(1deg)` }}>
            <img alt="Image" src="https://cloud-n9hebz4g3-hack-club-bot.vercel.app/0img_4890.jpg" />
            <p>
              Shot at{' '}
              <a
                href="https://cloud-n9hebz4g3-hack-club-bot.vercel.app/0img_4890.jpg"
                target="_blank"
                rel="noreferrer">
                Hack Club {' '}
              </a>HQ in Shelburne
            </p>
          </div>


          <div style={{ transform: `rotate(-3deg)` }}>
            <img
              alt="Image"
              src="https://cloud-2so6xlte8-hack-club-bot.vercel.app/0img_1651.jpg"
            />
            <p>
              Celebrating our coding with pizza{' '}
               
            </p>
          </div>
          <div style={{ transform: `rotate(2.5deg)` }}>
            <img
              alt="Image"
              src="https://cloud-2so6xlte8-hack-club-bot.vercel.app/1img_1653.jpg"
            />
            <p>
              Building our first website{' '}
              <a
                href="https://epoch.hackclub.com"
                target="_blank"
                rel="noreferrer">
                
              </a>
            </p>
          </div>
           
        </div>
      </section>
      <section className="section-special-padding" id="faq-wrapper">
        <div id="faq">
          <div>
            <Question
              summary="Can I join the coding club?"
              answer={
                <p>
                  We welcome 6th-12th graders. Only 18 kids per meetup, with priority to CCS and CVSDVT students.  
                </p>
              }
            />
            <Question
              summary="Questions about cost/aid?"
              answer={
                <p>
                  This event is free.
                </p>
              }
            />
            <Question
              summary="Can I join if I've never coded before?"
              answer={
                <p>
                  This club is for hackers of all skill levels! It's
                  completely beginner-friendly. In fact, we'll have workshops
                  and other events, so join us and let's learn together. If
                  you'd like to start exploring some introductory projects,
                  check out{' '}
                  <a
                    href="https://workshops.hackclub.com/"
                    target="_blank"
                    rel="noreferrer">
                    Hack Club Workshops
                  </a>
                  .
                </p>
              }
            />
            <Question
              summary="What do I need to bring?"
              answer={
                <p>
                  Bring a laptop if you have one. If not, you can use the libraries. Also bring a water bottle and snacks!
                  
                </p>
              }
            />
          </div>
          <div>
            <div style={{ display: 'flex', textAlign: 'center' }}>
              <h1
                style={{
                  margin: 'auto',
                  textDecoration: 'underline',
                  textDecorationStyle: 'wavy',
                  transform: 'rotate(2deg)'
                }}>
                <Sparkles
                  style={{
                    alignItems: 'center',
                    margin: 'auto'
                  }}>
                  I have questions...
                </Sparkles>
              </h1>
            </div>
            <Question
              summary="What can I make at coding club?"
              answer={
                <p>
                  Anything! In past sessions we have built our own websites, coded video games in JavaScript, and wrote Python for robots. Check out what{' '}
                  <a
                    href="https://hackclub.com"
                    target="_blank"
                    rel="noreferrer">
                    Hack Clubbers
                  </a>{' '}
                  are{' '}
                  <a
                    href="https://scrapbook.hackclub.com"
                    target="_blank"
                    rel="noreferrer">
                    making every day!
                  </a>
                </p>
              }
            />
            <Question
              summary="My parents can't drive! What should I do?"
              answer={
                <p>
                  You can probably get a ride from another parent from the school. Also the bus can take you. We're here to help, ask them to reach out to us at{' '}
                  <a href="mailto:christina@hackclub.com">christina@hackclub.com</a>{' '}
                  and we'll make sure to answer all your questions.  
                </p>
              }
            />
            <Question
              summary="Can we hack the school? Plus: I have more questions, how can I reach out?"
              answer={
                <p>
                  Contact us! If you're a teenager, join{' '}
                  <a
                    href="https://hackclub.com/slack/"
                    target="_blank"
                    rel="noreferrer">
                    Hack Club Slack
                  </a>{' '}
                  or email us christina{' '}
                  <a
                    href="mailto:christina@hackclub.com"
                    target="_blank"
                    rel="noreferrer">
                    christina@hackclub.com
                  </a>
                   
                </p>
              }
            />
          </div>
        </div>
      </section>
      <footer id="footer">
        <div id="icons">
          <a href="https://www.instagram.com/starthackclub/">
            <svg
              className="icon-color"
              height="30px"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <title>Instagram</title>
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
          </a>
          <a href="https://github.com/hackclub">
            <svg
              className="icon-color"
              height="30px"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <title>Github</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a href="https://hackclub.com/slack">
            <svg
              className="icon-color"
              height="30px"
              role="img"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg">
              <title>Slack</title>
              <path d="M31 24c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5s5 2.243 5 5v12C36 21.757 33.757 24 31 24zM43 24h-4c-.553 0-1-.447-1-1v-4c0-2.757 2.243-5 5-5s5 2.243 5 5S45.757 24 43 24zM19 24H7c-2.757 0-5-2.243-5-5s2.243-5 5-5h12c2.757 0 5 2.243 5 5S21.757 24 19 24zM23 12h-4c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5v4C24 11.553 23.553 12 23 12zM19 48c-2.757 0-5-2.243-5-5V31c0-2.757 2.243-5 5-5s5 2.243 5 5v12C24 45.757 21.757 48 19 48zM7 36c-2.757 0-5-2.243-5-5s2.243-5 5-5h4c.553 0 1 .447 1 1v4C12 33.757 9.757 36 7 36zM43 36H31c-2.757 0-5-2.243-5-5s2.243-5 5-5h12c2.757 0 5 2.243 5 5S45.757 36 43 36zM31 48c-2.757 0-5-2.243-5-5v-4c0-.553.447-1 1-1h4c2.757 0 5 2.243 5 5S33.757 48 31 48z" />{' '}
            </svg>
          </a>
        </div>
        <div>This site is adapted from Hack Club's
          <a href="https://horizon.hackclub.com"
                target="_blank"
                rel="noreferrer">
                Horizon hackathon</a> by <a href="https://github.com/hackclub/horizon">@jc</a> 💞</div>
      </footer>
    </>
  )
}
