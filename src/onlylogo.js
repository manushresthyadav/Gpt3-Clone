
import ggl from "./assets/google.png"
import slack from "./assets/slack.png"
import atlas from "./assets/atlassian.png"
import drop from "./assets/dropbox.png"
import shop from "./assets/shopify.png"
import "./ol.css"
export default function logo(){
let con=document.getElementsByClassName("logos");


    return(
        <div className="logos mt-20 flex items-center justify-center ">

<img src={ggl}  alt="not found"></img>
<img src={slack} alt="not found"></img>
<img src={atlas} alt="not found"></img>
<img src={drop} alt="not found"></img>
<img src={shop} alt="not found"></img>

        </div>
    )
}
// gll slacl atlas drop shopify