import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as picturesActions from '../../actions/pictures'
import SearchBar from './SearchBar'
import SortButton from './SortButton'
import FilterButton from './FilterButton'
import PropTypes from 'prop-types';


class HeadContainer extends React.Component {

  render() {
    const { currentSort, sortImages, filterImages, searchImages } = this.props
    return (
      <div id="head">
        <SearchBar searchImages={searchImages} />
        <div className="button-wrapper">
          <SortButton sortImages={sortImages} currentSort={currentSort} />
          <FilterButton filterImages={filterImages} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentSort: state.currentSort
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(picturesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeadContainer)
