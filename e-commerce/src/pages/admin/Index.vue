<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="col-lg-12 col-md-3 col-sm-12 col-xs-12">
          <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
              <b-nav-item to="/admin">View Commoditiy</b-nav-item>
              <b-nav-item to="/admin/new">Add Commoditiy</b-nav-item>
              <b-nav-item to="/admin/vendors"
                >View Vendor</b-nav-item
              >
              <b-nav-item to="/admin/vendors/new"
                >Add Vendor</b-nav-item
              >
            </b-navbar-nav>
          </b-navbar>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
