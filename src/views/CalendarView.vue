<template>
<div class="container dyzuryr">
    <div class="row">
        <h1>{{title}}</h1>
    </div>
    <div class="row">
            <v-calendar
      class="custom-calendar max-w-full background-wrapper p-3"
      :masks="masks"
      :attributes="attributes"
      disable-page-swipe
      is-expanded
      is-dark
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p
              v-for="attr in attributes"
              :key="attr.key"
              class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
              :class="ObecnosciGenerowanieKlasy(attr.customData.CzyByłObecny)"
            >
             Godzina: {{attr.customData.Godzina}}<br>Parafia: {{attr.customData.Parafia}}  <br>Kościół: {{attr.customData.Kościół}}
            </p>
          </div>
        </div>
      </template>
    </v-calendar>
   
    </div>
     <div class="row background-wrapper mt-1 rounded p-1 legenda">
        <div class="row"><h5>Legenda</h5></div>
        <div class="row">
            <div class="d-flex align-items-center">
                
                <p> <div class="kropka-do-legendy zielona mx-1"></div>- Obecny</p>
            </div>
            <div class="d-flex align-items-center">
                
                <p> <div class="kropka-do-legendy czerwona mx-1"></div>- Nie obecny</p>
            </div>
            <div class="d-flex align-items-center">
                
                <p> <div class="kropka-do-legendy biala mx-1"></div>- Dyzur dopiero się odbędzie</p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      masks: {
        weekdays: 'WWWW',
      },
      attributes: [
        {
          customData: {
            Godzina:"11:20",
            Parafia:"Florian",
            Kościół:"MB",
            CzyByłObecny:null

          },
          dates: new Date(year, month, 1),
        },
        {
          customData: {
            Godzina:"11:20",
            Parafia:"Parafia Najświętszego Zbawiciela w Pleszewie",
            Kościół:"MB",
            CzyByłObecny:false

          },
          dates: new Date(year, month, 1),
        },
        {
          customData: {
            Godzina:"11:20",
            Parafia:"Parafia Św. Floriana",
            Kościół:"MB",
            CzyByłObecny:true
          },
          dates: new Date(year, month, 4),
        },
      ],
      title:this.$route.meta.title
    };
  },
  methods:{
    ObecnosciGenerowanieKlasy(obecnosc){
        if(obecnosc==false){
            return "kaledarz-czerwony"
        }else if(obecnosc==true){
            return "kaledarz-zielony"
        }else{
            return "kaledarz-bialy"
        }
    }
  }
};
</script>
<style>
.custom-calendar.vc-container .vc-weeks{
    padding: 0%;
}
.vc-is-dark .vc-header, .custom-calendar.vc-container .vc-weekday {
    background-color: #212529;

}
.vc-weeks{
    overflow:scroll;
    background-color: #2c3034;
}
.custom-calendar.vc-container .vc-day{
    border: 1px solid #4a5568;
    padding: 3px;
}
.custom-calendar.vc-container .vc-day .kaledarz-bialy {
    background-color: #f7fafc;
    color: #212529;
    border-radius: 10px;
    padding: 3px;
}
.custom-calendar.vc-container .vc-day .kaledarz-czerwony {
    background-color: #f86969;
    border-radius: 10px;
    padding: 3px;
}
.custom-calendar.vc-container .vc-day .kaledarz-zielony {
    background-color: #74c280;
    border-radius: 10px;
    padding: 3px;
}
.kropka-do-legendy{
    width: 1em;
    height: 1em;
    border-radius: 100%;
}
.zielona{
    background-color: #74c280;
}
.czerwona{
    background-color: #f86969;
}
.biala{
    background-color: #f7fafc;
}
</style>