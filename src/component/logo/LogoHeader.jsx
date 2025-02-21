import logoBv from '../../assets/images/logo_bv.jpg'

export default function LogoHeader() {
    return(
        <>
            <div className="w-24 h-24 sm:w-[16px] sm:h-[16px]  ">
                <img className="w-[100%] h-[100%]" src={logoBv} alt="LogoHeader"/>
            </div>
        </>
    )
}