<template>
<div class="container dashboard">
    <div class="row justify-content-lg-between mb-lg-4">
        <ElementDashbord :tabela="dyzury.dane" :napisy="dyzury.napisy" class=" col-12 col-lg-6"/>
        <ElementDashbord :tabela="zbiorki.dane" :napisy="zbiorki.napisy" class="col-12 col-lg-6 my-3 my-lg-0"/>
    </div>
     <div class="row justify-content-lg-between">
        <ElementDashbord :tabela="finanse.dane" :napisy="finanse.napisy" class=" col-12 col-lg-6"/>
        <DaneParafiDashboard :daneparafi="parafie" class=" col-12 col-lg-6 my-3 my-lg-0"/>
    </div>
</div>
</template>
<script>
import DaneParafiDashboard from '@/components/DaneParafiDashboard.vue';
import ElementDashbord from '@/components/ElementDashbord.vue';
export default {
    components:{
    DaneParafiDashboard,
    ElementDashbord,
},
data(){
    return{
        parafie:[
            {
                Nazwa: 'parafia pod pw świętego floriana',
                Adres: 'Kopernika 4',
                Miejscowosc: "Pleszew",
                kodPodcztowy:'63-300',
                Koscioły:['Kościół św. Floriana w Pleszewie',"Kościół matki boskiej Częstochowskiej w pleszewie"],
                opiekunMinistrantow: "Ks.Tomasz ślęzak",
                kontaktDoOpiekuna: 'xxx xxx xxx'

            }, 

        ],
        dyzury:{
            dane:[{
                col1: '12.10.2022',
                col2:"18:30",
                col3: "Florian",
                col4: "MBCZ"
            }],
            napisy:{
                nagowek:"Najblizsze dyzury",
                NagowekPierwszejKolumny:"Data",
                NagowekDrugiejKolumny:"Godzina",
                NagowekTrzeciejKolumny:"Parafia",
                NagowekCzwartejKolumny:"Kościół",
                BrakDanychDoWyswietlenia:"W najbliszym czasie nie masz Dyzurów"
            }
    },

        zbiorki:{
        dane:[
         {
            col1: '11.11.2011',
            col2:'11:00',
            col3: 'florian',
            col4: 'salka'
         }
        ],
        napisy:{
               nagowek:"Najblizsze zbiórki",
                NagowekPierwszejKolumny:"Data",
                NagowekDrugiejKolumny:"Godzina",
                NagowekTrzeciejKolumny:"Parafia",
                NagowekCzwartejKolumny:"Miejsce",
                BrakDanychDoWyswietlenia:"Hura!! Wszystko masz opłacone"
        }
        },
        finanse:{
            dane:[
         {
            col1: '11.11.2011',
            col2:'Składka',
            col3: '22',
            col4: 'salka'
         }
        ],
        napisy:{
               nagowek:"Niezapłacone Naleności",
                NagowekPierwszejKolumny:"Data",
                NagowekDrugiejKolumny:"Cel",
                NagowekTrzeciejKolumny:"Kwota",
                NagowekCzwartejKolumny:"Parafia",
                BrakDanychDoWyswietlenia:"W najbliszym czasie nie masz zbiórek"
        }
        }
    }
}
}
</script>
<style>
.dashboard a{
    color: #F73D93;
    font-weight: 600;
}
.dashboard a:hover, .dashboard a:focus{
    color: #c400ae;
    font-weight: 600;
}
</style>