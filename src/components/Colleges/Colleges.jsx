import { useEffect, useState } from "react";
import CollegesData from "../CollegesDAta/CollegesData";

const Colleges = () => {

    const [college, setCollege] = useState([])

    useEffect(() => {
        fetch('CollegeData.json')
            .then(res => res.json())
            .then(data => setCollege(data))
    }, [])
    return (
        <div>

            <h1> Number of collge: {college.length}</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    college.map(collegeData =>
                        <CollegesData
                            key={collegeData._id}
                            collegeData={collegeData}
                        ></CollegesData>)
                }
            </div>


        </div>
    );
};

export default Colleges;