import logoBv from '../../assets/images/logo_bv.jpg'

export default function LogoHeader() {
    return (
        <>
            <div className="w-15 h-15 sm:w-[44px] sm:h-[44px]">
                <img className="w-full h-full" src={logoBv} alt="LogoHeader" />
            </div>
        </>
    )
}