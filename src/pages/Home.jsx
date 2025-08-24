
function Home(){
    return (
        <div className={"flex flex-col "}>
            <section className={'flex flex-col  min-h-96 bg-fuchsia-200 rounded-3xl mt-6'}>
                <p className={'flex justify-center'}>News</p>
                <div className={'grow bg-amber-100 rounded-b-3xl'}>Content</div>
            </section>
            <section className={'flex flex-col  min-h-96 bg-fuchsia-200 rounded-3xl mt-6'}>
                <p className={'flex justify-center'}>Leaderboard</p>
                <div className={'grow bg-amber-100 rounded-b-3xl'}>Content</div>
            </section>
        </div>

    )
}

export default Home;