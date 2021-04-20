<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="col-lg-12 col-md-3 col-sm-12 col-xs-12">
          <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
              <b-nav-item to="/admin">View product</b-nav-item>
              <b-nav-item to="/admin/new">Add product</b-nav-item>
              <b-nav-item to="/admin/manufacturers"
                >View manufacturer</b-nav-item
              >
              <b-nav-item to="/admin/manufacturers/new"
                >Add manufacturer</b-nav-item
              >
            </b-navbar-nav>
          </b-navbar>
          <!-- <ul class="admin-menu">
            <li>
              <router-link to="/admin">View product</router-link>
            </li>
            <li>
              <router-link to="/admin/new">Add product</router-link>
            </li>
            <li>
              <router-link to="/admin/manufacturers"
                >View manufacturer</router-link
              >
            </li>
            <li>
              <router-link to="/admin/manufacturers/new"
                >Add manufacturer</router-link
              >
            </li>
          </ul> -->
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
