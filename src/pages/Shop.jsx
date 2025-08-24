function Shop(){
    return (
        <section className={'flex flex-row justify-between grow h-[80vh] rounded-3xl mt-6 '}>
            <div className={'flex flex-col h-full w-64 mr-6 bg-amber-100 rounded-3xl gap-y-8 p-6'}>
                <div className={'flex justify-center items-center h-14 bg-fuchsia-200 rounded-3xl'}>category</div>
                <div className={'flex justify-center items-center h-14 bg-fuchsia-200 rounded-3xl'}>category</div>
                <div className={'flex justify-center items-center h-14 bg-fuchsia-200 rounded-3xl'}>category</div>
                <div className={'flex justify-center items-center h-14 bg-fuchsia-200 rounded-3xl'}>category</div>
                <div className={'flex justify-center items-center h-14 bg-fuchsia-200 rounded-3xl'}>category</div>
            </div>
            <div className={'flex h-full flex-wrap grow mr-6 bg-amber-100 rounded-3xl p-6 ' }>
                <div className={'size-80 bg-fuchsia-200 rounded-3xl p-3 flex flex-col items-center gap-y-4'}>
                    <img alt={'item-icon'} className={'size-32 bg-amber-300 rounded-3xl'}></img>
                    <div className={'h-28 w-full bg-amber-300 rounded-3xl'}>stats</div>
                    <button className={'h-14 w-full bg-amber-300 rounded-3xl'}>buy</button>
                </div>
            </div>
        </section>
    )
}

export default Shop;