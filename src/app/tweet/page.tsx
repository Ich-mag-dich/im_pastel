"use client";
import ReactGA from "react-ga4";

export default function Tweet() {
  ReactGA.initialize("G-5XQQLB2M6F");
  ReactGA.send({ hitType: "pageview", page: "/tweet", title: "tweet" });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-[100vw] py-2">
      <div className="font-mono text-3xl text-white font-bold drop-shadow-xl mt-10 mb-10 xl:mb-0 ">
        {" "}
        TWEETS{" "}
      </div>
      <main className="flex flex-wrap flex-row items-center justify-center flex-1 px-20 text-center max-w-[100vw] mx-2">
        <div className="my-2 xl:mx-2 min-w-[380px] min-h-[700px]">
          <a
            className="twitter-timeline mx-2"
            data-chrome="noscrollbar"
            data-lang="ko"
            data-width="380"
            data-height="700"
            href="https://twitter.com/GANGZIIII"
          >
            Tweets by GANGZIIII
          </a>
        </div>
        <div className="my-2 xl:mx-2 min-w-[380px] min-h-[700px]">
          <a
            className="twitter-timeline mx-2"
            data-chrome="noscrollbar"
            data-lang="ko"
            data-width="380"
            data-height="700"
            href="https://twitter.com/AyatsunoYuni"
          >
            Tweets by AyatsunoYuni
          </a>
        </div>
        <div className="my-2 xl:mx-2 min-w-[380px] min-h-[700px]">
          <a
            className="twitter-timeline mx-2"
            data-chrome="noscrollbar"
            data-lang="ko"
            data-width="380"
            data-height="700"
            href="https://twitter.com/airikannaKR"
          >
            Tweets by airikannaKR
          </a>
        </div>
        <div className="my-2 xl:mx-2 min-w-[380px] min-h-[700px]">
          <a
            className="twitter-timeline mx-2"
            data-chrome="noscrollbar"
            data-lang="ko"
            data-width="380"
            data-height="700"
            href="https://twitter.com/AiriKanna_"
          >
            Tweets by AiriKanna_
          </a>
        </div>

        <div className="my-2 xl:mx-2 min-w-[380px] min-h-[700px]">
          <a
            className="twitter-timeline mx-2"
            data-chrome="noscrollbar"
            data-lang="ko"
            data-width="380"
            data-height="700"
            href="https://twitter.com/ArahashiTabi"
          >
            Tweets by ArahashiTabi
          </a>
        </div>
        <div className="my-2 xl:mx-2 min-w-[380px] min-h-[700px]">
          <a
            className="twitter-timeline mx-2"
            data-chrome="noscrollbar"
            data-lang="ko"
            data-width="380"
            data-height="700"
            href="https://twitter.com/AkaneLize"
          >
            Tweets by AkaneLize
          </a>
        </div>
        <div className="my-2 xl:mx-2 min-w-[380px] min-h-[700px]">
          <a
            className="twitter-timeline mx-2"
            data-chrome="noscrollbar"
            data-lang="ko"
            data-width="380"
            data-height="700"
            href="https://twitter.com/ShirayukiHina_"
          >
            Tweets by ShirayukiHina_
          </a>
        </div>
        <div className="my-2 xl:mx-2 min-w-[380px] min-h-[700px]">
          <a
            className="twitter-timeline mx-2"
            data-chrome="noscrollbar"
            data-lang="ko"
            data-width="380"
            data-height="700"
            href="https://twitter.com/NenekoMashiro"
          >
            Tweets by NenekoMashiro
          </a>{" "}
          <script async src="https://platform.twitter.com/widgets.js"></script>
        </div>
      </main>
    </div>
  );
}
