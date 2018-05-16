import React from 'react'
import Checkbox from 'material-ui/Checkbox';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const FilterButton = ({ filterImages }) => {

    return (
        <Checkbox
            checkedIcon={<Visibility/>}
            uncheckedIcon={<VisibilityOff />}
            onCheck={() => filterImages()}
            label="NSFW"
            style={{marginTop: "1vh", width: "none"}}
        />
    )
}

export default FilterButton