
const CollegesData = ({ collegeData }) => {
    console.log(collegeData)

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={collegeData.college_img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">College Name: {collegeData.college_name}</h2>
                    <p> <span className="font-semibold">Event:</span>  {collegeData.events}</p>
                    <p> <span className="font-semibold">sports:</span>  {collegeData.sports}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegesData;