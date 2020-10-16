import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './screens/Landing'
import OrphanageMap from './screens/OrphanagesMap'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Landing} /> 
                <Route path='/app' component={OrphanageMap} />  
            </Switch>
        </BrowserRouter>
    )
}

export default Routes