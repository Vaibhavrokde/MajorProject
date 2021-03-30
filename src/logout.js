
import {useHistory} from 'react-router-dom';

function Logout(){

return(
<div>
    const history= useHistory();
    sessionStorage.clear;
    history.push("/Login");
    </div>
    )
   
}

export default Logout;  



