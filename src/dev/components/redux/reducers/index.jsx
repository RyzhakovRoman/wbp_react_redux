import {combineReducers} from 'redux';

import counter from './counter';
import issues from './issues';
import repository from './repository';

export default combineReducers({
        counter,
        issues,
        repository
})



// import counterRdcr from './counter';
// import issuesRdcr from './issues';
// import repositoryRdcr from './repository';
// export default combineReducers({
//         counter: counterRdcr,
//         issues: issuesRdcr,
//         repository: repositoryRdcr
// })