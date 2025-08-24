function Character(){
    return (
        <div className={"flex flex-col "}>
            <section className={'flex flex-row min-h-96 mt-6 '}>
                <div className={'h-96 w-96 bg-amber-100 rounded-3xl mr-6 justify-center flex items-center'}> hero img</div>
                <div className={'h-96 grow bg-amber-100 rounded-3xl flex flex-col'}>
                    <div className={'h-36 grow flex flex-row justify-evenly items-center sp'}>
                        <div className={'h-28 w-28 bg-fuchsia-200 rounded-3xl flex items-center justify-center'}>item
                        </div>
                        <div className={'h-28 w-28 bg-fuchsia-200 rounded-3xl flex items-center justify-center'}>item
                        </div>
                        <div className={'h-28 w-28 bg-fuchsia-200 rounded-3xl flex items-center justify-center'}>item
                        </div>
                        <div className={'h-28 w-28 bg-fuchsia-200 rounded-3xl flex items-center justify-center'}>item
                        </div>
                        <div className={'h-28 w-28 bg-fuchsia-200 rounded-3xl flex items-center justify-center'}>item
                        </div>
                    </div>
                    <div className={'h-60 grow bg-fuchsia-200 rounded-b-3xl'}>hero stats</div>
                </div>
            </section>
            <section className={'flex flex-col   min-h-96 bg-fuchsia-200 rounded-3xl mt-6'}>
                <p className={'flex justify-center'}>All items</p>
                <div className={'grow bg-amber-100 rounded-b-3xl'}>items</div>
            </section>
        </div>
    )
}

export default Character;