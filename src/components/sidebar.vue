<template>
  <sidebar-menu :menu="menu" />
</template>

<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'CRAWLER MENU',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/',
                        title: 'Home',
                        icon: 'fa fa-user'
                    },
                    {
                        title: 'Charts',
                        icon: 'fa fa-user',
                        child: [
                            {
                                href: '/charts-global',
                                title: 'Chart Global'
                            },
                        ]
                    },
                    {
                        title: 'Tables',
                        icon: 'fa fa-user',
                        child: [
                            {
                                href: '/user',
                                title: 'Users'
                            },

                        ]
                    },

                ]
            }
        }
    }
</script>