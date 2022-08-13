<template>
<div>
    <div class="mx-2 py-3 background-wrapper">
          <h1 class="display-6 font-weight-bold text-md-left">Parafia</h1>
          <div class="m-4">
 <div v-if="daneparafi.length!=1" class="dropdown">
  <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   {{parafia}}
  </button>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
    <li v-for="danaparafia in daneparafi" class="dropdown-item" @click="changeParafia(danaparafia.Nazwa)">{{danaparafia.Nazwa}}</li>
  </ul>
</div>
<div>
<p class="text-start">Nazwa: <span>{{dane.Nazwa}}</span></p>
<p class="text-start">Ulica: <span>{{dane.Adres}}</span></p>
<p class="text-start">Miejscowość: <span>{{dane.Miejscowosc}}</span></p>
<p class="text-start">Kod Podcztowy: <span>{{dane.kodPodcztowy}}</span></p>
<p class="text-start">Kościoły
    <ul>
        <li class="text-start" v-for="kosciol in dane.Koscioły">{{kosciol}}</li>

    </ul>
</p>
<p class="text-start">Opiekun ministrantów: <span>{{dane.opiekunMinistrantow}}</span></p>
<p class="text-start">Kontakt do opiekuna: <span>{{dane.kontaktDoOpiekuna}}</span></p>

</div>
          </div>

    </div>
  
</div>
</template>
<script>
export default{
    props:['daneparafi'],
    data(){
        return{
            parafia:'Wybierz parafie',
            dane:{
                  Nazwa: '',
                Adres: '',
                Miejscowosc: "",
                kodPodcztowy:'',
                Koscioły:[],
                opiekunMinistrant0w: "",
                kontaktDoOpiekuna: ''

            }
        }
    },
    methods:{
        changeParafia:function(parafia){
            this.parafia=parafia;
            this.daneparafi.forEach(element => {
                if(element.Nazwa===parafia){
                this.dane.Nazwa=element.Nazwa;
                this.dane.Adres=element.Adres;
                this.dane.Miejscowosc=element.Miejscowosc;
                this.dane.kodPodcztowy=element.kodPodcztowy;
                this.dane.Koscioły=element.Koscioły;
                this.dane.opiekunMinistrantow=element.opiekunMinistrantow;
                this.dane.kontaktDoOpiekuna=element.kontaktDoOpiekuna;
                }
                
            });
        }
    },
    mounted(){
        
            if(this.daneparafi.length==1){
               
                this.parafia = this.daneparafi[0].Nazwa;
                this.dane.Nazwa=this.daneparafi[0].Nazwa;
                this.dane.Adres=this.daneparafi[0].Adres;
                this.dane.Miejscowosc=this.daneparafi[0].Miejscowosc;
                this.dane.kodPodcztowy=this.daneparafi[0].kodPodcztowy;
                this.dane.Koscioły=this.daneparafi[0].Koscioły;
                this.dane.opiekunMinistrantow=this.daneparafi[0].opiekunMinistrantow;
                this.dane.kontaktDoOpiekuna=this.daneparafi[0].kontaktDoOpiekuna;
            }
        
    },

}
import { computed } from '@vue/reactivity';
import { onBeforeMount } from 'vue';
</script>