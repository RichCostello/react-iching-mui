import React from 'react'
//import DropDownMenu from 'material-ui/DropDownMenu';
//import MenuItem from 'material-ui/MenuItem';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';


const SortButton = ({ currentSort, sortImages }) => {

    const handleChange = (event, index, value) => {
      event.preventDefault()
      sortImages(value)
    }
  
    return (
      <Menu value={currentSort} onChange={(e, i, v) => handleChange(e, i, v)}>
        <MenuItem value="MOST_VIEWS" primaryText="Most Views" />
        <MenuItem value="MOST_UPVOTES" primaryText="Most Upvotes" />
        <MenuItem value="MOST_FAV" primaryText="Most Fav" />
        <MenuItem value="LATEST" primaryText="Latest" />
      </Menu>
    )
  }
  
  export default SortButton
  