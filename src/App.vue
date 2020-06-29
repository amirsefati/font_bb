<template>
    <div>
        <div class="nav_dashboard pt-2 pr-5">
            <ul class="ul_dashboard">
                <li class="li_dashboard"><router-link to="mamad"><p>دیتای روزانه</p></router-link></li>
                <li class="li_dashboard"><router-link to="daily_report"><p>گزارش روزانه</p></router-link></li>

            </ul>
        </div>
        <router-view></router-view>   
    </div>
</template>


<script>
export default {
    created(){
        this.$router.push({name:'mamad'})
    }
}
</script>