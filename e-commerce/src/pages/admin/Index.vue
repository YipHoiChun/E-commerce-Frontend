<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="admin-menu">
            <li>
              <router-link to="/admin">View product</router-link>
            </li>
            <li>
              <router-link to="/admin/new">Add product</router-link>
            </li>
            <li>
              <router-link to="/admin/manufacturers">View manufacturer</router-link>
            </li>
             <li>
              <router-link to="/admin/manufacturers/new">Add manufacturer</router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
