import React from 'react'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import Search from '@material-ui/icons/Search';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import red from 'material-ui/colors/red';



class SearchBar extends React.Component {
    state = { 
        query: "",
        error: ""
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { searchImages } = this.this.props

        if (/\S/.test(this.state.query)) {
            searchImages(this.state.query)
            this.setState({ query: "", error: "" })
        } else {
            this.setState({ error: "Please enter a valid search query "})
        }
    }

    render() {
         const { classes, theme } = this.props;
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <TextField
                    
                    value={this.state.query}
                    errorText={this.state.error}
                    hintText="Search"
                    onChange={this.handleChange}
                    underlineFocusStyle={{}}
                />
                <IconButton type="submit">
                    <Search />
                </IconButton>
            </form>
        </div>
        )
    }
}


SearchBar.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default SearchBar