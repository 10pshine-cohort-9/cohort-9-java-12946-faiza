import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Profile() {

const navigate = useNavigate();

let user = null;

try {
  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    user = JSON.parse(storedUser);
  }

} catch (error) {

  console.error(
    "Failed to parse user data from localStorage:",
    error
  );

  localStorage.removeItem("user");

  navigate("/login", { replace: true });
}


const [showPasswordForm, setShowPasswordForm] = useState(false);

const [formData, setFormData] = useState({
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
});

const [error, setError] = useState("");
const [success, setSuccess] = useState("");
const [loading, setLoading] = useState(false);


const handleChange = (e) => {

setFormData({
  ...formData,
  [e.target.name]: e.target.value,
});

};


const handleChangePassword = async (e) => {

e.preventDefault();

setError("");
setSuccess("");


if(formData.newPassword !== formData.confirmPassword){

  setError(
    "New password and confirm password do not match."
  );

  return;
}


setLoading(true);


try {

await api.put(
  "/auth/change-password",
  {
    currentPassword: formData.currentPassword,
    newPassword: formData.newPassword,
  }
);


setSuccess(
  "Password changed successfully."
);


setFormData({
  currentPassword:"",
  newPassword:"",
  confirmPassword:"",
});


setShowPasswordForm(false);


}
catch(err){

setError(
 err.response?.data?.error ||
 "Unable to change password."
);

}
finally{

setLoading(false);

}

};



const handleLogout = async () => {

try {

await api.post(
 "/auth/logout",
 {},
 {
  withCredentials:true,
 }
);


}
catch(err){

console.error(
 "Logout request failed:",
 err
);


}
finally{


localStorage.removeItem("user");

navigate("/login");


}

};



return (

<div className="dashboard">


<header className="dashboard-header">

<div>

<h1>
Contact Management
</h1>

<p>
User Profile
</p>

</div>


<button
className="logout-button"
onClick={handleLogout}
>
Logout
</button>


</header>



<main className="dashboard-content">


<button
className="back-button"
onClick={()=>navigate("/dashboard")}
>
← Back to Contacts
</button>



<div className="profile-card">



<div className="profile-header">


<div className="profile-avatar">

{user?.firstName?.charAt(0)?.toUpperCase()}

</div>


<div>

<h2>

{user?.firstName} {user?.lastName}

</h2>


<p>
Contact Management User
</p>


</div>


</div>



{error && (

<div className="error-message">

{error}

</div>

)}



{success && (

<div className="success-message">

{success}

</div>

)}




<div className="profile-section">


<h3>
User Details
</h3>


<div className="details-grid">


<div className="detail-item">

<span>
First Name
</span>

<strong>
{user?.firstName || "N/A"}
</strong>

</div>



<div className="detail-item">

<span>
Last Name
</span>

<strong>
{user?.lastName || "N/A"}
</strong>

</div>



<div className="detail-item">

<span>
Email
</span>

<strong>
{user?.email || "N/A"}
</strong>

</div>



<div className="detail-item">

<span>
Phone
</span>

<strong>
{user?.phone || "N/A"}
</strong>

</div>


</div>


</div>





{!showPasswordForm && (

<button

className="auth-button"

onClick={()=>{

setShowPasswordForm(true);

setError("");

setSuccess("");

}}

>

Change Password

</button>

)}





{showPasswordForm && (

<div className="password-section">


<h3>
Change Password
</h3>


<form onSubmit={handleChangePassword}>


<div className="form-group">

<label>
Current Password
</label>


<input

type="password"

name="currentPassword"

value={formData.currentPassword}

onChange={handleChange}

required

/>

</div>




<div className="form-group">

<label>
New Password
</label>


<input

type="password"

name="newPassword"

value={formData.newPassword}

onChange={handleChange}

required

/>

</div>





<div className="form-group">

<label>
Confirm New Password
</label>


<input

type="password"

name="confirmPassword"

value={formData.confirmPassword}

onChange={handleChange}

required

/>

</div>





<div className="form-actions">


<button

type="button"

onClick={()=>{

setShowPasswordForm(false);

setError("");

setSuccess("");

}}

>

Cancel

</button>



<button

type="submit"

className="auth-button"

disabled={loading}

>

{
loading
?
"Changing..."
:
"Change Password"
}


</button>



</div>


</form>


</div>

)}



</div>


</main>


</div>

);


}


export default Profile;