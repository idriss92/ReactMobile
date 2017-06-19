import { combineReducers } from 'redux';
import AlbumReducer from './AlbumReducer';
import SelectionReducer from './SelectionReducer';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export const rootReducer = combineReducers({
    albums: AlbumReducer,
    selectedAlbumTitle: SelectionReducer,
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer
});

