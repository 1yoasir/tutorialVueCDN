const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con vue',
        frutas: ['Manzana', 'Pera', 'Platano'],
        personas: [
            {nombre:'Yoasir', estado:'Casado'},
            {nombre:'Elena', estado:'Casada'},
            {nombre:'Ana', estado:'Soltera'}
        ],
        nuevaFruta:'',
        nuevaPersonaNombre: '',
        nuevaPersonaEstado:'',
        totalPersonas: 0,
        totalFrutas: 0
    },
    methods:{
        agregarFruta () {
            this.frutas.push(this.nuevaFruta);
            this.nuevaFruta = "";
        },

        agregarPersona () {
            this.personas.push({
                nombre: this.nuevaPersonaNombre, estado: this.nuevaPersonaEstado
            })
        }
    },
    computed:{
        sumarPersonas(){
            this.totalPersonas = 0;
            for(persona of this.personas){
                this.totalPersonas++
            }
            return this.totalPersonas
        },
        personasCasadas(){
            personasCasadas = 0;
            for(persona of this.personas){
                if(persona.estado == 'Casado' || persona.estado == 'Casada'){
                    personasCasadas++
                }
            }
            return personasCasadas;
        },
        personasSolteras(){
            personasSolteras = 0;
            for(persona of this.personas){
                if(persona.estado == 'Soltera' || persona.estado == 'Soltero'){
                    personasSolteras++
                }
            }
            return personasSolteras++;
        },
        sumarFrutas(){
            this.totalFrutas = 0;
            for(fruta of this.frutas){
                this.totalFrutas++
            }
            return this.totalFrutas;
        }
    }
})