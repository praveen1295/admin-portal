import { useNavigate } from "react-router-dom";
import "../App.css";

const UserDetails =({setShowDetails, user})=>{
    
    const navigate = useNavigate();
    const handleCancel =()=>{
        setShowDetails(false);
    }
    const update=()=>{
        navigate("/update-user");
    }
    return (<div class="card text-center">
  <div class="card-header">
    User Details
  </div>
  <div class="card-body">
    <h5 class="card-title">{user.name}</h5>
    <p class="card-text m-2 p-2">First Name : {user.firstName}</p>
    <p class="card-text m-2 p-2">Last Name : {user.lastName}</p>
    <p class="card-text m-2 p-2">userName : {user.username}</p>
    <p class="card-text m-2 p-2">email : {user.email}</p>
    <p class="card-text m-2 p-2">password : {user.password}</p>
    <p class="card-text m-2 p-2">address : {user.address}</p>
    <p class="card-text m-2 p-2">gender : {user.gender}</p>
    <p class="card-text m-2 p-2">status : {user.status}</p>
   
    
    
    
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
  <div class="card-footer text-muted">
   <button className="btn btn-primary"onClick={update}>Update Details</button>
   <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
   
  </div>
</div>)
}
export default UserDetails;