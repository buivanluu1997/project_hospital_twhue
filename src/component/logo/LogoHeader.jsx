import logoBv from '../../assets/images/logo_bv.jpg'

export default function LogoHeader() {
    return(
        <>
            <div className="w-15 h-15 sm:w-[65px] sm:h-[65px]">
                <img className="w-full h-full" src={logoBv} alt="LogoHeader"/>
            </div>
        </>
    )
}