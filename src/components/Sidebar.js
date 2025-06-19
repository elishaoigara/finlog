import React from 'react';

function Sidebar() {
return (
<div className="p-3">
<h4>Finlog</h4>
<ul className="nav flex-column">
<li className="nav-item">
<a className="nav-link active" href="#">Dashboard</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Expenses</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Reports</a>
</li>
</ul>
</div>
);
}

export default Sidebar;