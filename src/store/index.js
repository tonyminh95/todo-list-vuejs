import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // todos: [
        //     { id: 1, title: 'Go to the mall', description: 'Buy food and decore preparing for new year', deadline: '2020/02/27', status: 1 },
        //     { id: 2, title: 'Go to the gym', description: 'Training for 6 packs', deadline: '2020/06/24', status: 2 },
        //     { id: 3, title: 'Finding some girls', description: 'Have someone to go to the movie theater', deadline: '2020/01/02', status: 3 }
        // ],
        // tasks: null,
        // updateTask: null,
        // deleteTask: null

        tasks: [
            {
                id: 1,
                title: 'Maecenas Minhpharetra convallis posuere morbiminh',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare suspendisse sed nisi lacus sed viverra tellus. Sed risus pretium quam vulputate dignissim. Amet massa vitae tortor condimentum. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in.',
                deadline: '03/02/2020',
                status: 0
            },
            {
                id: 2,
                title: 'Volutpat blandit aliqMinhuam etiam erat',
                description: 'Lorem ipsum dolor minhsit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Lobortis mattis aliquam faucibus purus in massa. Dignissim suspendisse in est ante in.',
                deadline: '26/08/2020',
                status: 0
            },
            {
                id: 3,
                title: 'Massa tincidunt dui ut minhornare',
                description: 'Lorem ipsum dolor sit amet, consectetur adMInHipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est placerat in egestas erat imperdiet sed euismod. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Interdum velit laoreet id donec ultrices tincidunt. Tortor at auctor urna nunc id cursus metus aliquam eleifend.',
                deadline: '13/05/2020',
                status: 1
            },
            {
                id: 4,
                title: 'Diam phasellus vestibulum lorem sed',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius quam quisque id diam vel quam. Convallis posuere morbi leo urna. Eu lobortis elementum nibh tellus molestie nunc. Lacus vestibulum sed arcu non odio.',
                deadline: '03/12/2020',
                status: 2
            }
        ]
    },

    getters,
    actions,
    mutations
})