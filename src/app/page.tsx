export default function Home() {
    const content = " I'm Pastel은 버츄얼 아이돌 그룹 '스텔라이브'의 팬 사이트 입니다. ";
    const asd = "본 사이트는 수익창추릉ㄹ ";
    const contentClassName = "font-bold font-sans text-6xl";
    const contentClassName2 = "font-bold font-sans text-2xl";
    return (
        <main className="h-full xl:hover:cursor-default">
            <img src="/static/stellive.svg" className="mt-[-60px]  xl:ml-20 xl:mt-[-110px] w-[300px] xl:w-[500px] h-auto absolute z-[-1]"></img>
            <div className="text_div text-left ">
                <div className="hidden xl:block py-20 mt-[260px] ml-[130px]">
                    <figure className="w-[1000px]  px-[2.25rem]">
                        <p className={`${contentClassName} qq`} >⭐I'm Pastel</p>
                        <blockquote cite="https://pastel.im/">
                            <p className={`${contentClassName2} qw font-sunf`}>{content}</p>
                        </blockquote>
                    </figure>
                </div>
                <div className="block xl:hidden py-5 mt-[140px] ml-[10px]">
                    <figure className=" px-[1.5rem]">
                        <p className={`${contentClassName} qq`}>I'm Pastel</p>
                        <blockquote cite="https://pastel.im/">
                            <p className={`${contentClassName2} qw font-sunf`}>{content}</p>
                        </blockquote>
                    </figure>
                </div>

            </div>
            <div className="hidden xl:block float-right xl:mt-[-450px] xl:mr-[120px]">
                <div className="text-center flex m-auto justify-center mt-4 z-10">
                    <div className='flex justify-center  flex-wrap my-[2.25rem]'>
                        <div
                            className=" w-[400px] lg:w-[600px] xl:w-[800px] min-h-[500px] pt-[50px] inline-block h-auto xl:my-auto relative rounded-2xl bg-white mx-4 mt-5"
                            style={{ boxShadow: "gray 0px 3px 6px 0px" }}
                        >
                            <iframe className="m-auto w-[300px] xl:w-[710px] xl:px-0 " width="710" height="400" src="https://www.youtube-nocookie.com/embed/kPdB6iGYBBc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
