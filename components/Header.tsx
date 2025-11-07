
function Header(){
 return(
    <div className="select-none">
        <div className="flex items-center">
            <div className="flex-grow space-y-0.5">
                <hr className="border-t-[5px] border-black/85"/>
                <hr className="border-t-[2px] border-black/90"/>
            </div>
            
                {/* <span className="mx-2 text-5xl font-old-london text-themeOrange">
                    Most Wanted Software Developer
                </span> */}
            
             <span style={{ fontFamily: 'old-london, serif', color:"#ff6600"}} className="mx-2 text-5xl">
  Most Wanted Software Developer
</span>
              <div className="flex-grow space-y-0.5">
                 <hr className="border-t-[5px] border-black/90"/>
                <hr className="border-t-[2px] border-black/85"/>
              </div>
        </div>
         <div className="flex flex-col gap-4 items-center pb-6">
                <span style={{fontFamily:'old-london,serif'}} className="text-8xl text-black/90">Avni Uplabdhee</span>
                <span style={{fontFamily:'editorial-regular'}}>A jack of many trades</span>
              </div>
         <div className="flex-grow space-y-0.5">
                <hr className="border-t-[5px] border-black/85"/>
                <hr className="border-t-[2px] border-black/90"/>
            </div>
    </div>
 )
}

export default Header;