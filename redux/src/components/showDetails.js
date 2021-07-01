import react from 'react'
import { connect } from 'react-redux'
import pupils from '../redux/reducers/pupils'
import store from '../redux/store'

function mapStateToProps(state) {
    return { pupils: state.pupils.pupils }
}

export default connect(mapStateToProps)(
    function PupilsDetails(props) {
        const { pupils, dispatch} = props
        return (
            <>
                <h3>All pupils:</h3>
                <ul>
                    {pupils.map(item => <li key={item.id}>name:{item.name}</li>)}
                </ul>
            </>
        )
    }
)
