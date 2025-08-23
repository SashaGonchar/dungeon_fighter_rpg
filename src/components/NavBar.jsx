import { NavLink} from "react-router-dom";

function NavBar(){
    return (
            <nav className={'h-12 flex bg-amber-300 justify-between' }>
                <div className={'flex gap-5'}>
                    <NavLink to="/" className={'w-24 h-12 grid place-items-center '}>Home</NavLink>
                    <NavLink to="character" className={'w-24 h-12 grid place-items-center '}>Character</NavLink>
                    <NavLink to="shop" className={'w-24 h-12 grid place-items-center '}>Shop</NavLink>
                    <NavLink to="fight" className={'w-24 h-12 grid place-items-center '}>Fight</NavLink>
                </div>
                <div className={'flex'}>
                    <div className={'flex flex-col w-24 h-12 items-center '}>
                        <p>money</p>
                        <p>gems</p>
                    </div >
                    <NavLink to="/profile" className={'w-24 h-12 grid place-items-center '}>Profile</NavLink>
                    <p className={'w-24 h-12 grid place-items-center '}>Logout</p>
                </div>

            </nav>
    )
}

export default NavBar;