<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-3" style="text-align:center">
                <p>تاریخ امروز</p>
                <p></p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5"></div>
            <div class="col-md-2">
                <vs-button success flat @click="get_data">گرفتن دیتا امروز</vs-button>
            </div>
            <div class="col-md-5"></div>
        </div>

        <div class="row mt-4">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <ul>
                    <li v-for="item in list" :key="item.name">
                        <p>دیتا گروه  {{item}}  با موفقیت گرفته شد.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
 import axios from 'axios'

export default {
    data(){
        return{
            group : ['agriculture','coal','oil_gas','metal_ores','other_mines','textiles','wood','paper','printz','pet_products','plastic','elec_computer','basic_metal','metal_products','equipment','electrical','comm_devices','cars','sugar','multidisciplinary','supply_elec_gas','food','drug','chemical','contracting','wholesale','retail','tile','cement','non_metal','hotel','investments','banks','other_financial','transportation','water_transportation','financial','insurance','auxiliary','etf','financing_bonds','estate','engineering','app_computer','information','technical_services','artistic'],
            list : []
        }
    },

    methods:{
        get_data:function(){
            this.group.forEach((val,index)=>{
                setTimeout(() => {
                    axios.get('/api/daily/' + val)
                    .then(res => {
                        this.list.push(res.data)
                    })  
                }, 600 * index);    
            })             
        }
    }
}
</script>