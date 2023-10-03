import Bath from "./Bath"
import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"

const FloorPlan = () => {
  return ( 
  <div>
 
 <Bedroom bedNum={1} />
    <Kitchen />
    <Bath size='Full Bath'/>
   
    <Bedroom  bedNum={2}/>
     <LivingRoom />
     <Bath size='Half Bath'/>
    <Bedroom bedNum={3} />
    
 
    
    </div>
    
   )
}
 
export default FloorPlan;