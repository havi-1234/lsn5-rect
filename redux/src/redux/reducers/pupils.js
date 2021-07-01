import produce from 'immer'

const initialState = {
    pupils: [{ name: 'havi', id: '3333' }, { name: 'hani', id: '1111' }]
}

export default produce((state, action) => {
    switch (action.type) {
        case 'ADD_PUPIL':
            { state.pupils.push(action.payload) }
            break
        case 'UPDATE_PUPIL':
            { state.pupils=(action.payload) }
            break
        case '':
            break
    }
},initialState)