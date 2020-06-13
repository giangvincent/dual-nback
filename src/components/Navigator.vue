<template>
    <div class="flex absolute top-0 w-full h-16 text-white indicator-nav">
      <div class="flex w-full justify-center relative content-center flex-wrap">
        <router-link class="router-link-active absolute left-0 h-full pl-2 flex content-center flex-wrap" to="/">
          <img class="w-8" src="@/assets/images/back-btn.png" />
        </router-link>
        <div class>n = {{ nlevel }}</div>
      </div>
    </div>
</template>
<script>
export default {
    name: "navigator",
    props: {
        nlevel: Number
    },
    data() {
        return {}
    }
}
</script>