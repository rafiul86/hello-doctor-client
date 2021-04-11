import React from 'react';

const Navbar = () => {
    return (
            <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid ">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link ms-auto me-5 fs-5 fw-bolder" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-auto me-5 fs-5 fw-bolder" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-auto me-5 fs-5 fw-bolder" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-auto me-5 fs-5 fw-bolder" href="#">Review</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-auto me-5 fs-5 fw-bolder" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-auto me-5 fs-5 fw-bolder" href="#">Contacts</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;