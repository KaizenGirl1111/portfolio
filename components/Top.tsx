import Clock from "./Clock";

function Top(){
 const today = new Date();
 const year = today.getFullYear();
 const month = today.getMonth();
 const date = today.getDate();
 const day = today.getDay();

 const day_arr =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 const month_arr = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    return(
    <div style={{fontFamily:'helvetica'}} className="select-none text-black/90 text-xs flex flex-row justify-between items-center">
        <div className="flex flex-col items-start">
           <span className="text-black/75 text-base font-semibold hover:underline cursor-pointer">
             <a href="mailto:avnigungun@gmail.com">{"avnigungun@gmail.com"}</a>
           </span>
           <span className="text-black/75 text-base font-semibold cursor-pointer">
             {"Find the resume at-"}<a href="https://drive.google.com/file/d/1BxALi0t_uW60fIpC6RUE5u0Sfj-Acm0l/view?usp=sharing" className="hover:text-themeOrange hover:underline">{"Resume"}</a>
           </span>
        </div>
        <div className="flex flex-col items-end">
            <span className="text-black/75 font-semibold text-sm">
            {"Bengaluru, Karnataka, India"}
            </span>
            <span className="text-black/80 font-semiboold text-base">
            {`${day_arr[day]}, ${month_arr[month]} ${date},${year}`}
            </span>
            <span className="flex flex-row gap-1 font-sans font-semibold">
               {"Local Time"}
               <Clock/>
            </span>
        </div>
    </div>
)
}

export default Top;