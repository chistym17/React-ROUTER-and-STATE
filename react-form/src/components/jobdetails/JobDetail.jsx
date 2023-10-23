import { useLoaderData, useParams } from "react-router-dom";

const JobDetail = () => {
const jobs=useLoaderData()
const {id}=useParams()
const intId=parseInt(id)
const job=jobs.find(job=>job.id===intId)
    return (
        <div>
            
        </div>
    );
};

export default JobDetail;