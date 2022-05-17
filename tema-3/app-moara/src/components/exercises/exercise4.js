import { useState } from "react";
import { useEffect } from "react";

const Exercise4 = ()=>{
        const [loaded, setLoaded] = useState(false);
        useEffect(() => {
            setTimeout(() => {
              setLoaded(true);
            }, 5000);
          }, []);
         
    return (
    <div className='row'>
        <div className="col-2"><h3>Exercise 4</h3></div>
        <div className="col-10">
            {!loaded ? "Loading, please wait" : "Finished loading"} 
            {!loaded ? <div class="spinner-border" role="status"/>: ""}
        </div>
    </div>
    )
    }
    export default Exercise4;