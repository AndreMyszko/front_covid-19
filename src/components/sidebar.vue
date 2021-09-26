<template>
  <div>
    <sidebar-menu :menu="menu" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          header: true,
          title: "CRAWLER MENU",
          hiddenOnCollapse: true,
        },
        {
          href: "/",
          title: "Home",
          icon: "people-fill",
        },
        {
          title: "Tables",
          icon: "fas fa-user",
          child: [
            {
              href: "/user",
              title: "Users",
            },
            {
              href: "/charts",
              title: "Covid",
            },

          ],
        },
      ],
    };
  },
};
</script>
