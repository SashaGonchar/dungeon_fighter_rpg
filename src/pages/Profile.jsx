function Profile(){
    return (
        <div className={'flex flex-col gap-6'}>
            <section className={'flex flex-row gap-6'}>
                <img alt={'profile-photo '} className={'size-64 bg-amber-200 rounded-full'}></img>
                <div className={'h-64 flex grow bg-amber-200 rounded-3xl'}>personal inf</div>
            </section>
            <section className={' flex h-[60vh] grow bg-amber-200 rounded-3xl'}>settings</section>
        </div>
    )
}

export default Profile;