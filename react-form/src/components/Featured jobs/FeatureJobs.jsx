import { useEffect, useState } from "react";
import Job from "../job/Job";

const FeatureJobs = () => {

const [jobs,setjobs]=useState([])
useEffect(()=>{
fetch('jobs.json')
.then(res=>res.json())
.then(data=>setjobs(data))


},[])


    return (
        <div>
                          <h1 className="text-center text-5xl">Featured Jobs:{jobs.length}</h1>
<div className="grid grid-cols-2 gap-20">
{

jobs.map(job=><Job key={job.id}job={job}></Job>)


}
</div>

        </div>
    );
};

export default FeatureJobs;