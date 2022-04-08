Vue.component('saludo', {
    template: //html
    `
    <div>
        <h1>{{saludo}}</h1>
        <h3>Saludo 2</h3>
    </div>
    
    `,
    data(){
        return{
            saludo: 'Hola desde VUE'
        }
    }
});

Vue.component('contador', {
    template: //html
    `
        <div>
            <h3>{{numero}}</h3>
            <button @click="numero++">+</button>
        </div>
    `,
    data(){
        return{
            numero:0
        }
    }
})