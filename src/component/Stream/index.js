import {connect} from 'react-redux'
import Stream from './presenter'

const mapStateToProps = (state) => {
    const {tracks}=state
    return{
        tracks
    }
}
export default connect(mapStateToProps)(Stream)
