<template>
<div>
    <div class="mx-2 py-3 background-wrapper">
        <h1 class="display-6 font-weight-bold text-md-left">{{napisy.nagowek}}</h1>
        <div v-if="tabela.length!=0" class="m-lg-4 m-1">
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">{{napisy.NagowekPierwszejKolumny}}</th>
                        <th scope="col">{{napisy.NagowekDrugiejKolumny}}</th>
                        <th scope="col">{{napisy.NagowekTrzeciejKolumny}}</th>
                        <th scope="col">{{napisy.NagowekCzwartejKolumny}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in tabela">
                        <td>{{row.col1}}</td>
                        <td>{{row.col2}}</td>
                        <td>{{row.col3}}</td>
                        <td>{{row.col4}}</td>
                    </tr>
                </tbody>
            </table>
            <p><a :href="napisy.PrzekierowanieDoPelniejWerjiStrony.url">{{napisy.PrzekierowanieDoPelniejWerjiStrony.text}}</a></p>
                
          </div>
          <div v-else class="m-lg-4 m-1">
            <p class="font-weight-bold text-danger">{{napisy.BrakDanychDoWyswietlenia}}</p>
          </div>
                

    </div>
</div>
</template>
<script>
export default{
    props:['tabela','napisy']
}
</script>